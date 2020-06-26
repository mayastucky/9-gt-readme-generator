// function to generate markdown for README

function generateMarkdown(data) {
  return ` # ${data.title}
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})
  ## Description
  ${data.description}
  ## Table of contents 
  * [Description](#Description)
  * [Instructions](#Instructions)
  * [Usage](#Usage)
  * [Contributions](#Contributions)
  * [Test](#Test)
  * [License](#License)
  * [Questions](#Questions)
  ## Instructions
  ${data.instructions}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contribution}
  ## Test
  ${data.test}
  ## License
  This project is licensed under the ${data.license} license. 
  ## Questions: 
  All questions can be directed to my 
  [GitHub](https://github.com/${data.username}) or my 
  [E-mail](${data.email})
  `;
}

// licenseBadge = (license) => {
//   //paste the data.license value into the url
//   const badge = ``;
// };

module.exports = generateMarkdown;
