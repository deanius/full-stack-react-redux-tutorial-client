import React from 'react'
import {mount} from 'enzyme'
import Question from '../../src/components/Question'
import sinon from 'sinon'
import examples from '../../doc/examples'

describe('components/Question', () => {
  let subject
  let wrapper
  let onAnswerChosen
  let questionProps = examples.client.questionProps

  beforeEach(() => {
    onAnswerChosen = sinon.spy()
    const testProps = {...questionProps, onAnswerChosen}
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

  describe('Events', () => {
    it('should call answerChosen with the answer when clicked', () => {
      wrapper.find('button').first().simulate('click')
      expect(onAnswerChosen).to.have.been.calledWith(sinon.match.object, 'AirBnb')

      wrapper.find('button').at(1).simulate('click')
      expect(onAnswerChosen).to.have.been.calledWith(sinon.match.object, 'Google')
    })
  })

  describe('State: unanswered', () => {
  })

  describe('State: answered', () => {
    it('should disallow answers once the answerState is defined', () => {
      let props = {...questionProps, onAnswerChosen, playerAnswer: 'something'}
      let wrapper = mount(<Question {...props} />)
      wrapper.find('button').first().simulate('click')
      expect(onAnswerChosen).to.not.have.been.called
    })

    describe('State: pending', () => {
      it('should show pending answer')
    })
  })
})
