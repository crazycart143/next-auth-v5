import React from "react";

// routes inside parenthesis like (auth) will not be needed in url,
// so you can just use /login. It just organizes and groups the route
// efficiently without having to mention it on the URL

// Example: /login
// Without parenthesis: /auth/login

export default function page() {
  return <div>Login page without /auth prefix </div>;
}
