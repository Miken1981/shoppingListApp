// adds items to ul
$(function(){
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    var newItem = $('#shopping-list-entry').val();
    console.log(newItem);
    $('#shopping-list-entry').val('');


    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });


});

// delete items from ul and DOM
function deleteItem() {
  $(this).closest('li').remove();
}
// mark items as completed
function completedItem (){
$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
};


$('.shopping-list').on('click', '.shopping-item-delete', deleteItem);
// $(".shopping-list").on("click", ".shopping-item-toggle", "completedItem");
// $('ul').on('click', '.shopping-item-delete', "deleteitem");
// $(".shopping-item-delete").click(deleteItem);
// $(".shopping-item-toggle").click(completedItem);
$('.shopping-list').on('click', '.shopping-item-toggle', completedItem);
$('.shopping-list').on('click', '.shopping-item-delete', deleteItem);
