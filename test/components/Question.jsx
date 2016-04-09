import React from 'react'
import {mount} from 'enzyme'
import Question from '../../src/components/Question'
import sinon from 'sinon'

const questionProps = {
  text: 'What company made React?',
  choices: [
    'AirBnb',
    'Google',
    'Citibank',
    'Facebook'
  ],
  playerChoice: 'AirBnb',
  answerState: null
}

describe('components/Question', () => {
  let subject
  let wrapper
  let onAnswerChosen
  const eventObj = sinon.match.object

  beforeEach(() => {
    onAnswerChosen = sinon.spy()
    const testProps = Object.assign({}, questionProps, {onAnswerChosen})
    subject = <Question {...testProps} />
    wrapper = mount(subject)
  })

  describe('UI', () => {
    it('should display the question text', () => {
      expect(wrapper.find('.prompt')).to.have.text(questionProps.text)
    })

    it('should render a number of choices', () => {
      expect(wrapper).to.have.descendants('.choice')
    })
  })

  describe('State: unanswered', () => {
    it('should call answerChosen with the answer when clicked', () => {
      wrapper.find('button').first().simulate('click')
      expect(onAnswerChosen).to.have.been.calledWith(eventObj, 'AirBnb')

      wrapper.find('button').at(1).simulate('click')
      expect(onAnswerChosen).to.have.been.calledWith(eventObj, 'Google')
    })
  })

  describe('State: answered (pending)', () => {
    it('should disallow answers once the answerState is defined', () => {
      let props = Object.assign({},
        questionProps,
        {onAnswerChosen},
        {answerState: 'pending'})
      let wrapper = mount(<Question {...props} />)
      wrapper.find('button').first().simulate('click')
      expect(onAnswerChosen).to.not.have.been.called
    })
  })
})
