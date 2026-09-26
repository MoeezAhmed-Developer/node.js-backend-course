// const queryString = require("querystring");

// const userDataSubmit = (req, res) => {
//   let data = [];
//   req.on("data", (chunk) => {
//     data.push(chunk);
//   });

//   req.on("end", () => {
//     const rawData = Buffer.concat(data).toString();
//     const readableData = queryString.parse(rawData);
//     console.log(readableData);
//   });
//   res.setHeader("Content-Type", "text/html");
//   res.write("<h1>Data Submit.</h1>");
//   res.end();
// };

// module.exports = userDataSubmit;
