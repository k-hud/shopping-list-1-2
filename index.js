function handleClicks() {
  //Handle the clicks for both the new list item button, toggle button, and strikethrough button.
  //Need to preventDefault() here too.
  //Grab anything entered into the text box (#shopping-list-entry) and save it as a variable.
}

function newListItemTemplate() {
  //This is where the template will go for new list items.
}

function addNewListItem(){
  // Take the newListItemTemplate template
  // Add in the new #shopping-list-entry data
  // Push a new shopping list item to the top of the UL with a class of .shopping-list.
}

function clearListItems() {
  //Clear all list items and wipe the slate clean.
  // Set a UL template with empty list items. template needs to have the same HTML structure, CSS classes, and elements as the current list, but with no items.
}

function checkAndUncheck(){
  // Listen for a .shopping-item-toggle button to be pressed.
  // Toggle() the class .shopping-item__checked against the nearest .shopping-list-item parent to the .shopping-item-toggle button that was pressed.
}

$(handleClicks);
