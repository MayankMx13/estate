import './filter.scss'

function Filter() {
    return (
        <div className="filter">
            <h1>Search Results for <b>London</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id='city' name='city' placeholder='City Location' />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">any</option>
                        <option value="rent">Rent</option>
                        <option value="Buy">Buy</option>
                    </select>

                </div>

                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="">any</option>
                        <option value="Apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minprice">Min Price</label>
                    <input type="numbner" id='minPrice' name='minPricce' placeholder='any' />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="text" id='maxPrice' name='maxPrice' placeholder='any' />
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Bed Room</label>
                    <input type="text" id='bedroom' name='bedroom' placeholder='any' />
                </div>

                <button>
                    <img src="/search.png" alt="" />
                </button>



            </div>

        </div>
    )
}

export default Filter;