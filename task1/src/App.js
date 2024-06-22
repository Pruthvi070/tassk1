import React from 'react';

function App() {
  return (
    <div>
      <header className="header">
        <h1>My Landing Page</h1>
      </header>
      <section className="hero">
        <div className="container">
          <h1>Welcome to My Landing Page</h1>
          <p>This is a simple landing page built with React.</p>
        </div>
      </section>
      <section className="content">
        <div className="container">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec libero auctor, nec varius nisi dictum.</p>
          <h2>Services</h2>
          <p>Quisque malesuada lectus vel odio vestibulum, nec aliquet magna convallis. Fusce ac magna ut velit pharetra eleifend.</p>
          <h2>Contact</h2>
          <p>Aliquam erat volutpat. In hac habitasse platea dictumst. Curabitur euismod nisl eu metus consectetur, a lacinia nisl facilisis.</p>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 My Landing Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
