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
 
