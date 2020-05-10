import React from "react";
import "./directory.styles.scss";

// import external components
import MenuItem from "../menu-item/menu-items";

// Import Test Data Assets!!
import SECTIONS_DATA from "../../data/sections.data";

/**
 * A Directory React Component that enables displaying webpage menu-items
 * in a friendly and ez manner.
 *
 * @extends React.Component
 */
class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
