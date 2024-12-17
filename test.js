const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

test('button click changes text', () => {
  const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  
  const button = document.getElementById('myButton');
  const outputText = document.getElementById('outputText');
  
  button.click();
  
  expect(outputText.innerText).toBe('Hello, CircleCI!');
});
