export function login() {
  return `
    <form action="/submit" method="POST">
    <input type="text" name="username" placeholder="enter name" />
    <input type="password" name="pasword" placeholder="enter password" />
    <button>Submit form</button>
    </form>
    `;
}
