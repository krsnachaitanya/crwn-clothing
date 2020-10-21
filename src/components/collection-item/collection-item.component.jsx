import React from "react";
import { InvertedButton } from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <InvertedButton className="collection-item-button">
        Add To Cart
      </InvertedButton>
    </div>
  );
}

export default CollectionItem;
