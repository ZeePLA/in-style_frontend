import "./component.css";

function Greeting() {
  return (
    <section className="greeting-section">
      <img
        className="greeting-icon"
        src="mainIcon.png"
        alt="Sketch of a red hair dryer machine."
      />
      <h1 className="greeting-text">In Style</h1>
    </section>
  );
}

export default Greeting;
