let listItemStyling = $('.shopping-item');

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
// Will remove check now, but only using remove, need to toggle between
// Either use IF to see if the class exists, if it does, remove it, if it doesnt, add interval
// OR find a more elegant way of toggling the class
    $('.shopping-item-toggle').click(function(event) {
      $(this).parent('.shopping-item').toggleClass('.shopping-item__checked');
    });
};

$(handleClicks);
/* Do I need to have this at the bottom? */
