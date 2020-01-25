const express = require('express');
const mainApp = express();
const mainPort = 3002;

mainApp.use(express.static('public'));

mainApp.listen(mainPort, () => {
  console.log(`APP is listening on port ${mainPort}`);
});