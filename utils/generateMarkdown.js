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
  
  // Create title and description
  // Generate badges for each
  let draftMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub](https://img.shields.io/badge/license-${userResponses.license}-brightgreen) 
  
  
  ## Description 
  
  
  ${userResponses.description}
  `
  //Add table of contents
  draftMarkdown += draftTable;
  
  //Add license section
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

  //Questions section
  let draftDeveloper = 
  `
  ---
  
  ## Questions?
  
  
  For any questions, please contact me with the information below:
 
  
  `;

  //If GitHub email is not null, add to Developer section
  // if (email !== null) {
  
  // draftDeveloper +=
  // `
  // // Email: ${email}
  // // `};

 //Developer section
  draftMarkdown += draftDeveloper;

  //Return input
  return draftMarkdown;
};

// Export markdown
module.exports = generateMarkdown;
