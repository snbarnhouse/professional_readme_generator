// Generate markdown for README
function generateMarkdown(userResponses) {

  //userReponses in table of contents
  let draftTable = `## Table of Contents`;

  if (userResponses.installation !== '') { draftTable += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { draftTable += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { draftTable += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { draftTable += `
  * [Tests](#tests)` };
  
  //Title and description
  //Generate badges
  let draftMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub](https://img.shields.io/badge/license-${userResponses.license}-brightgreen) 
  
  
  ## Description 
  
  
  ${userResponses.description}
  `
  //Table of contents
  draftMarkdown += draftTable;
  
  //License section
  draftMarkdown += `
  * [License](#license)`;

  //Installation section
  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  
  ${userResponses.installation}`
  };

  //Usage section
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
   
  ${userResponses.usage}`
  };
  
  //Contribution section
  if (userResponses.contributing !== '') {
  `
  
  ## Contributing
  
  
  ${userResponses.contributing}`
  };

  //Tests section
  if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  
  ${userResponses.tests}`
  };

  //License section
  draftMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;

  //Contact
  draftMarkdown +=
  `
  
  ##Contact

  Email: ${userResponses.contact}
  `;

  //Return input
  return draftMarkdown;
};

// Export markdown
module.exports = generateMarkdown;
