
var Book = require('./../js/book.js').bookModule;

$(document).ready(function() {
  var newBook = new Book();
  newBook.getDefault();
  $('#books-form').submit(function(event) {
    event.preventDefault();
    $('.default_books').addClass('hide');
    var search = $('#search').val();
    newBook.searchBooks(search);
  });
});
