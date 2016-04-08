// TODO dynamic url
// TODO detect JS error
// TODO assert visual change on click
module.exports = {
  'Visible question can be answered' : function (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.question', 'What company made React?')
      .click('.question button:nth-of-type(2)')
      .end();
  }
};
