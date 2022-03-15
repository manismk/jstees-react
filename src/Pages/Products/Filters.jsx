export const Filters = () => {
  return (
    <>
      <button className="filter--button">
        Filter <i className="fas fa-arrow-right"></i>
      </button>
      <div className="overlay hide"></div>
      <section className="filter--section">
        <button className="filter--close">&times;</button>
        <div className="filter--header m-v-1">
          <h3 className="heading--3">Filter</h3>
          <button className="btn btn--clear">Clear</button>
        </div>
        <div className="filter--category m-v-2">
          <h4 className="heading--4">Category</h4>
          <div className="input--primary">
            <input
              type="checkbox"
              id="normalTees"
              name="normalTees"
              defaultChecked
            />
            <label htmlFor="normalTees">Normal tees</label>
          </div>
          <div className="input--primary">
            <input type="checkbox" id="fullSleeveTees" name="fullSleeveTees" />
            <label htmlFor="fullSleeveTees">Full sleeve tees</label>
          </div>
          <div className="input--primary">
            <input type="checkbox" id="pulloverHoodie" name="pulloverHoodie" />
            <label htmlFor="pulloverHoodie">Pullover hoodies</label>
          </div>
          <div className="input--primary">
            <input type="checkbox" id="stencilHoodie" name="stencilHoodie" />
            <label htmlFor="stencilHoodie">Stencil hoodies</label>
          </div>
        </div>

        <div className="filter--rating m-v-2">
          <h4 className="heading--4">Rating</h4>
          <div className="input--primary">
            <input type="radio" name="starRating" id="4star" />
            <label htmlFor="4star">4 star & above</label>
          </div>
          <div className="input--primary">
            <input type="radio" name="starRating" id="3star" />
            <label htmlFor="3star">3 star & above</label>
          </div>
          <div className="input--primary">
            <input type="radio" name="starRating" id="2star" />
            <label htmlFor="2star">2 star & above</label>
          </div>
          <div className="input--primary">
            <input type="radio" name="starRating" id="1star" />
            <label htmlFor="1star">1 star & above</label>
          </div>
        </div>
        <div className="filter--sort m-v-2">
          <h4 className="heading--4">Sort by</h4>
          <div className="input--primary">
            <input type="radio" name="sortBy" id="lowHigh" />
            <label htmlFor="lowHigh">Price: low to high</label>
          </div>
          <div className="input--primary">
            <input type="radio" name="sortBy" id="highLow" />
            <label htmlFor="highLow">Price: high to low</label>
          </div>
        </div>
      </section>
    </>
  );
};
