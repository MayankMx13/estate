import { useState } from "react";
import "./searchbar.scss"

const types = ["buy", "rent"];
function Searchbar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxprice: 0,
    });

    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
    };

    return (
        <div className="searchBar">
            <div className="type">
                {types.map((type) => (
                    <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : ""}>
                        {type}
                    </button>
                ))}
            </div>
            <form action="">
                <input type="text" name="location" placeholder="City Lcation" />
                <input type="numner" name="minprice" min={0} max={10000000} placeholder="Min Price" />
                <input type="numner" name="maxprice" min={0} max={10000000} placeholder="Max Price" />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    )
}

export default Searchbar;