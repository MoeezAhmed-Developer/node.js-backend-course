const queryString = require("querystring");

function userDataSubmit(req, res) {
  let dataBody = [];
  req.on("data", (chunk) => {
    dataBody.push(chunk);
  });

  req.on("end", () => {
    const rawData = Buffer.concat(dataBody).toString();
    const finalData = queryString.parse(rawData);
    console.log(finalData);
  });
  res.write("<h1>Data Submitted.</h1>");
}

module.exports = userDataSubmit;
