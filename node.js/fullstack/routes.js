function userForm(req, res) {
  res.write(`
     <form action="/submit" method="post">
      <input type="text" placeholder="Enter name" name="name" />
      <input type="password" placeholder="Enter password" name="password" />
      <button>Submit</button>
    </form>
    `);
}

module.exports = userForm;
