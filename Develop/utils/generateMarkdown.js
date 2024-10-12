// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
  } else {
    return `![license](https://img.shields.io/badge/license-${license}-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No License') {
    return '';
  } else if (license === 'MIT') {
    return 'https://choosealicense.com/licenses/mit/';
  } else if (license === 'Apache') {
    return 'https://choosealicense.com/licenses/apache-2.0/';
  } else if (license === 'ISC') {
    return 'https://choosealicense.com/licenses/isc/';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No License') {
    return '';
  } else {
    return `## License
${renderLicenseBadge(license)}
${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}

`;
}

export default generateMarkdown;
