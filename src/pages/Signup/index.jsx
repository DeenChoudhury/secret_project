import React from 'react';

function SignupPage() {
  return (
    <div>
      <form action="/signup" method="post">

        <h1> Signup form </h1>

        <input
          className="box"
          type="text"
          name="first_name"
          id="first_name"
          placeholder="First name"
          required
        />
        <br />

        <input
          className="box"
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Last name"
          required
        />
        <br />

        <input
          className="box"
          type="email"
          name="email"
          id="email"
          placeholder="E-Mail "
          required
        />
        <br />

        <input
          className="box"
          type="password"
          name="password"
          id="password"
          placeholder="Password "
          required
        />
        <br />

        <input
          type="submit"
          id="submitDetails"
          name="submitDetails"
          value="Submit"
        />
        <br />

      </form>
    </div>
  );
}

export default SignupPage;
