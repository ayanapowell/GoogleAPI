var Book = require('./../js/book.js').bookModule;

$(document).ready(function() {
  var newBook = new Book();
  $('#books-form').submit(function(event) {
    event.preventDefault();
    var search = $('#search').val();
    newBook.searchBooks(search);
  });
});
