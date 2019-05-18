

function handleClicks() {
  addNewListItem();
  bindDeleteListItem();
  bindCheckAndUncheck();
}

function deleteListItem(event) {
  //Becuase the "this" below is running on elements added to the DOM after load, can't seem to traverse and get to them.
  //Thought passing an "event" argument from the prepended code below would work, but no luck.
  $(this).closest("li").remove();
  console.log("I ran the delete function");
}

function checkAndUncheck(event) {
  //Becuase the "this" below is running on elements added to the DOM after load, can't seem to traverse and get to them.
  //Thought passing an "event" argument from the prepended code below would work, but no luck.
  $(this).parent().siblings().toggleClass('shopping-item__checked');
  console.log($(this).parent().siblings());
  console.log("I ran the check and uncheck function");
}

function addNewListItem(){
  $("#js-shopping-list-form").on('submit', function() {

    event.preventDefault();

    var newItemEntered = $("#shopping-list-entry").val();

    $('.shopping-list').prepend($('<li>' +
      '<span class="shopping-item">' + newItemEntered + '</span>' +
        '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle" onClick="checkAndUncheck(event)">' +
        '<span class="button-label">check</span>' +
        '</button>' +
        '<button class="shopping-item-delete" onClick="deleteListItem(event)">' +
        '<span class="button-label" >delete</span>' +
        '</button>' +
        '</div>' +
      '</li>'));
      });
    }

function bindDeleteListItem() {
  $(".shopping-item-delete").click(deleteListItem);
}

function bindCheckAndUncheck(){
  $('.shopping-item-toggle').click(checkAndUncheck);
};

$(handleClicks);
