const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

// Define paths to clean
const pathsToClean = [
  path.join(__dirname, 'node_modules/.cache'),
  path.join(__dirname, 'android/app/build'),
  path.join(__dirname, 'ios/build'),
];

// Clean each path
pathsToClean.forEach(pathToClean => {
  if (fs.existsSync(pathToClean)) {
    console.log(`Cleaning ${pathToClean}...`);
    rimraf.sync(pathToClean);
    console.log(`Done cleaning ${pathToClean}`);
  } else {
    console.log(`Path ${pathToClean} does not exist, skipping...`);
  }
});

console.log("Cache cleanup completed. Run 'npm start -- --reset-cache' to start the Metro server with a clean cache.");