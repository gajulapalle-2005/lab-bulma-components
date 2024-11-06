// src/components/SignupForm.js
import React from 'react';

const SignupForm = () => {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
        <h2>Signup</h2>
      </nav>

      {/* Signup Form */}
      <form style={{ margin: '2rem' }}>
        {/* FormField for Name */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '.5rem' }}>Name</label>
          <input type="text" id="name" name="name" required style={{ padding: '.5rem', width: '100%' }} />
        </div>

        {/* FormField for Email */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem' }}>Email</label>
          <input type="email" id="email" name="email" required style={{ padding: '.5rem', width: '100%' }} />
        </div>

        {/* FormField for Password */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '.5rem' }}>Password</label>
          <input type="password" id="password" name="password" required style={{ padding: '.5rem', width: '100%' }} />
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ padding: '.75rem', backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
