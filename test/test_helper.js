import jsdom from 'jsdom'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'
import chaiEnzyme from 'chai-enzyme'
import sinonChai from 'sinon-chai'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win

global.expect = chai.expect

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})

chai.use(chaiImmutable) // better comparison of maps
chai.use(chaiEnzyme())  // better comparison of JSX trees
chai.use(sinonChai)     // better assertions on function spies
