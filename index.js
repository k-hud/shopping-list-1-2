/*
function listItemTemplate(listItem) {
   ; };*/

function handleClicks() {
  addNewListItem();
  deleteListItem();
  checkAndUncheck();
}

function addNewListItem(){
  $("#js-shopping-list-form").on('submit', function() {
    
    event.preventDefault();
    
    var newItemEntered = $("#shopping-list-entry").val();
    
    $('.shopping-list').prepend($('<li>' + 
      '<span class="shopping-item">' + newItemEntered + '</span>' +
        '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
        '</button>' +
        '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
        '</button>' +
        '</div>' +
      '</li>'));
      });
    
    
}

function deleteListItem() {
  //Clear all list items and wipe the slate clean.
  // Set a UL template with empty list items. template needs to have the same HTML structure, CSS classes, and elements as the current list, but with no items.
  $(".shopping-item-delete").click(function() {
    console.log('Hell ya! for the delete button!');
  });
}

function checkAndUncheck(){

    $('.shopping-item-toggle').click(function() {
    
      $('.shopping-item__checked').toggle();
      //Toggle runs but deletes the word, need to toggle just the class.
      console.log('Was the toggle run?');
    });
};

$(handleClicks);
/* Do I need to have this at the bottom? */