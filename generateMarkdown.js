// function to generate markdown for README

function generateMarkdown(data) {
  return ` # ${data.title}
  [![saythanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/kennethreitz)
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
  ${data.license}
  ## Questions: 
  All questions can be directed to my 
  [GitHub](https://github.com/${data.username}) or my 
  [E-mail](${data.email})
  `;
}

module.exports = generateMarkdown;
