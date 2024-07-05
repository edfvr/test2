import React, { useState } from 'react';

export default function SignInPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to API)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Sign in</h1>
        <p className="text-xs-center">
          <a href="#/login">Need an account?</a>
        </p>

        {/* Error messages component (if applicable) */}
        {/* Replace with your error handling logic */}
        <ul className="error-messages"></ul>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </fieldset>

            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </fieldset>

            <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
              Sign in
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

