const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

test('button click changes text', () => {
  // Read the HTML content
  const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

  // Create a new JSDOM instance with the HTML content
  const dom = new JSDOM(html, {
    runScripts: "dangerously", // Allow script execution in JSDOM
    resources: "usable", // Load external resources like script.js
  });

  const { document } = dom.window;

  // Wait for the script to load
  dom.window.onload = () => {
    const button = document.getElementById('myButton');
    const outputText = document.getElementById('outputText');

    // Simulate the button click
    button.click();

    // Check if the text has changed
    expect(outputText.innerText).toBe('Thanks for clicking me!');
  };
});
