const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')

app.use(express.static(path.resolve(__dirname, './build')));

app.get('/', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  // response.sendFile(filePath);
  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, 'Projects - Cornell Daily Sun');
    data = data.replace(/\$OG_DESCRIPTION/g, "The projects page is where The Sun's experimental pages are consolidated.");
    result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    response.send(result);
});
});

app.get('/huawei', function(request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      data = data.replace(/\$OG_TITLE/g, 'Huawei Paid Cornell $5.3 Million for Research Contracts. That’s the Firm’s Biggest Payout to a U.S. College in the Last Six Years.');
      data = data.replace(/\$OG_DESCRIPTION/g, "The Chinese company is currently embattled with several Western governments that have accused it of spying on behalf of the Chinese government.");
      result = data.replace(/\$OG_IMAGE/g, '../screens/Huawei/images/huaweicover.jpg');
      response.send(result);
    });
  });
app.use(express.static(path.resolve(__dirname, './build')));
app.get('*', function(request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    response.sendFile(filePath);
  });
app.listen(port, () => console.log(`Listening on port ${port}`));