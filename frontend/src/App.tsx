import "../src/sass/app.scss";

function App() {
  return (
    <>
      <section className="header">
        <div className="logo">
          <img src="./images/logo.png" alt="alt-logo-text"></img>
        </div>

        <div className="toggleNavButton" id="toggleNavButton">
          <button className="toggle-btn">
            <i className="fas fa-bars fa-3x"></i>
          </button>
        </div>
        <div className="shifting-backgrounds">
          <img
            className="slideShow imgAnimation"
            src="./images/banner01_desk.png"
            alt="alt shifting-background img1"
          ></img>
        </div>
      </section>
    </>
  );
}

export default App;
