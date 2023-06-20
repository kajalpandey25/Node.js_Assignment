// const fs = require('fs');

// const architectureInfo = 'Information about Node.js architecture goes here.';

// fs.writeFile('nodejs_architecture.txt', architectureInfo, (err) => {
//   if (err) {
//     console.error('Error creating nodejs_architecture.txt:', err);
//     return;
//   }
//   console.log('nodejs_architecture.txt created successfully.');
// });

// const fs = require('fs');

// fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading nodejs_architecture.txt:', err);
//     return;
//   }
//   console.log(data);
// });


// const fs = require('fs');

// const additionalData = '\nAdvantages of Node.js: ...'; // Add the advantages of Node.js here

// fs.appendFile('nodejs_architecture.txt', additionalData, (err) => {
//   if (err) {
//     console.error('Error appending data to nodejs_architecture.txt:', err);
//     return;
//   }
//   console.log('Data appended to nodejs_architecture.txt successfully.');
// });

const fs = require('fs');

fs.unlink('nodejs_architecture.txt', (err) => {
  if (err) {
    console.error('Error deleting nodejs_architecture.txt:', err);
    return;
  }
  console.log('File Deleted Successfully');
});





