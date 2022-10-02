# Steeleye-assignment

1. This LIST component is rendering the list of text from the items array which it is receiving as a prop.
   If we are clicking or selecting the individual item from list, the colour of that item is becoming green else the items are red in colour.

2. The problems/warnings are listed below
     (1). "setSelectedIndex is not a function",the value returned by the useState() is not assigned properly.
     (2). Function of proptypes is not used properly. some wrong functions are called ex: shapeOf(),array() etc.
     (3). There is no null (conditional rendering) check while rendering through the items array using map function.
     (4). In "WrappedSingleListItem" component we are not referencing the function to onClick, instead we are calling that function.
     (5). In "WrappedListComponent" we have to pass the comparison of selectedIndex and element index , not only index.
     
 3. Fixed Code
 
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
