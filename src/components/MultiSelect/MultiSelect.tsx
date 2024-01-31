import React, { useContext } from "react";
import "../Shop/shop.css";
import { ShopContext } from "../Shop/ShopContextProvider";

const MultiSelect = () => {
  const { sortBy, handleSortChange } = useContext(ShopContext);

  return (
    <div>
      <div className="selects">
        <label>
          {"Sort by: "}
          <select value={sortBy} onChange={handleSortChange}>
            <option value="">--Select--</option>
            <option value="lowToHigh">Price from lowest to highest</option>
            <option value="highToLow">Price from highest to lowest</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default MultiSelect;
