export function login() {
  return `<h1>Login Page</h1>
    <form action="/submit" method="post">
    <input type="text" placeholder="Enter name" name="username" />
    <input type="password" placeholder="Enter password" name="password" />
    <button>Login</button>
    </form>
    <a href="/">Go to Home Page</a>
    `;
}
