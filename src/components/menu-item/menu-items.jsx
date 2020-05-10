import React from "react";
import "./menu-item.styles.scss";

/**
 * A React functional component to display the menu-item given to
 * it.
 *
 * @param {String} title - The title of the menu item
 * @param {String} imageUrl - The URL of the background image in the menu-item
 * @param {String} size - A class name for sizing the image in the background
 * @param {String} linkUrl - A routing Link URL for routing the page to the menu-item's
 *  page
 */
export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
