async function getData() {
  const response = await fetch("http://localhost:3200/sample");
  const data = await response.json();
  const finalData = data.filter((data) => data.age > 18);
  console.log(finalData);
}

getData();
