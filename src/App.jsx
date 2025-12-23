import "./App.css";

function App() {
  return (
    <div>
      <header className="hero">
        <h1>Sammunat</h1>
        <p>Empowering Digital Growth for Modern Businesses</p>
        <button>Get Started</button>
      </header>

      <section className="features">
        <div className="card">
          <h3>Innovative Solutions</h3>
          <p>We deliver scalable and modern digital products.</p>
        </div>
        <div className="card">
          <h3>Expert Team</h3>
          <p>Experienced professionals focused on quality.</p>
        </div>
        <div className="card">
          <h3>Customer Focus</h3>
         <p>We build solutions centered around user needs.</p>

        </div>
      </section>

      <section className="why">
        <h2>Why Choose Sammunat?</h2>
        <ul>
          <li>✔ Clean UI</li>
          <li>✔ Responsive Design</li>
          <li>✔ Built with React</li>
        </ul>
      </section>

      <footer className="footer">
        <p>contact@sammunat.com</p>
        <p>© 2025 Sammunat</p>
      </footer>
    </div>
  );
}

export default App;
