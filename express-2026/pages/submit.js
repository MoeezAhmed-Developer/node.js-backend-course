import queryString from "querystring";

export function getData(req, res) {
  let data = [];
  req.on("data", (chunk) => {
    data.push(chunk);
    // console.log(data);
  });

  req.on("end", () => {
    const rawData = Buffer.concat(data).toString();
    const readableData = queryString.parse(rawData);
    console.log(readableData);
  });
}

export function submit(req, res) {
  return res.send("<h1>Data submited.</h1>");
}
