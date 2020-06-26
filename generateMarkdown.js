// function to generate markdown for README
// const questions = require("./index");

// function generateMarkdown(data) {
//   return `# Title

// `;
// }

function generateMarkdown(data) {
  return ` # ${data.title}`;
}

module.exports = generateMarkdown;
