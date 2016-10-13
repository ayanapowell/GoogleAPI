var bookApiKey = require('./../.env').bookApiKey;
function Book() {
}

Book.prototype.searchBooks = function(search) {
  var books = [];
  var that = this;
  $.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=' + bookApiKey).then(function(response) {
    var items = response.items;
    items.forEach(function(item) {
      var title = item.volumeInfo.title;
      var authors = item.volumeInfo.authors[0];
      var description = item.volumeInfo.description;
      var rating = item.volumeInfo.averageRating;
      var image = item.volumeInfo.imageLinks.thumbnail;
      books.push([title, authors, description, rating, image]);
    });
    console.log(books);
    that.listBooks(books);
  });
}

Book.prototype.listBooks = function(books) {
  $('.all_books').empty();
  for (var i = 0; i < books.length; i++) {
    $('.all_books').append("<br><div class='row'><div class='col-sm-3'>" + '<img src="' + books[i][4] + '">' + "</div>" + "<div class='col-sm-8 col-sm-offset-1'><h3>" + books[i][0] + "</h3><br>" + "<p class='bold'>Author(s): " + books[i][1] + "</p><p class='bold'>Description: " + books[i][2] + "</p><p class='bold'>Average Rating: "
    + books[i][3] + "</p></div></div><br>");
  }
}

exports.bookModule = Book;
