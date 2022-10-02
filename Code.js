import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? "green" : "red" }}
      onClick={onClickHandler.bind(this,index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState();

  useEffect(() => {
    setSelectedIndex(0);
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
    console.log(index)
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items?.map((item, index) => (
        <SingleListItem
        key={index}
          onClickHandler={(index) => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index}
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  )
};

WrappedListComponent.defaultProps = {
  items: null
};

const List = memo(WrappedListComponent);

export default List;
