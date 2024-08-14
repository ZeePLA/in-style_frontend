import "./component.css";

function SearchBar() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form-submitted");
  };
  return (
    <section className="search-section">
      <div className="searc-bar-container">
        <h2 className="search-bar-title-text">
          Hizmet Almak İstediğiniz Kuaförünüzü Seçin
        </h2>

        <div className="search-input-container">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ara..." />

            <img
              className="search-icon"
              src="magnifier-icon.png"
              alt="Search Icon"
            />

            <button className="button-search" type="submit">
              Ara
            </button>
          </form>
        </div>

        <button className="button-random">Rastgele</button>
      </div>
    </section>
  );
}

export default SearchBar;
