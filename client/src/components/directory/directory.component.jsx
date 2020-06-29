import React from "react";
import "./directory.styles.scss";

// import external components
import MenuItem from "../menu-item/menu-items";

// import redux and utils
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorItems } from "../../redux/directory/directory.selectors";

const Directory = ({ directoryItems }) => {
  return (
    <div className="directory-menu">
      {directoryItems.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  directoryItems: selectDirectorItems,
});

export default connect(mapStateToProps)(Directory);
