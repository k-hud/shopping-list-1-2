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
//Doesnt work for new list items only existing items on page load
  $(".shopping-item-delete").click(function() {
    $(this).closest("li").remove();
  });
}

function checkAndUncheck(){
// Not landing on right DOM element to toggle CSS need to target more elegantly
    $('.shopping-item-toggle').click(function(event) {
      $(this).parent().parent().parent().parent().removeClass('shopping-item__checked');
      console.log('Was the toggle run?');
    });
};

$(handleClicks);
/* Do I need to have this at the bottom? */
