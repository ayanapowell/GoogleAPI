var bookApiKey = require('./../.env').bookApiKey;
function Book() {
}

Book.prototype.getDefault = function() {
  var books = [];
  var that = this;
  $.get('https://www.googleapis.com/books/v1/volumes?q=' + 'web'+ '&key=' + bookApiKey).then(function(response) {
    var items = response.items;
    for (var i = 0; i < 5; i++) {
      var title = items[i].volumeInfo.title;
      var authors = items[i].volumeInfo.authors[0];
      var description = items[i].volumeInfo.description;
      var rating = items[i].volumeInfo.averageRating;
      var image = items[i].volumeInfo.imageLinks.thumbnail;
      books.push([title, authors, description, rating, image]);
    };
    that.listDefaults(books);
  });
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
    // if (books.length === 0) {
    //   alert('no searches match!');
    // } else {
      that.listBooks(books);
    // }
  });
}

Book.prototype.listBooks = function(books) {
  $('.all_books').empty();
  for (var i = 0; i < books.length; i++) {
    $('.all_books').append("<br><div class='row'><div class='col-sm-3'>" + '<img src="' + books[i][4] + '">' + "</div>" + "<div class='col-sm-8 col-sm-offset-1'><h3>" + books[i][0] + "</h3><br>" + "<p class='bold'>Author(s): " + books[i][1] + "</p><p class='bold'>Description: " + books[i][2] + "</p><p class='bold'>Average Rating: "
    + books[i][3] + "</p></div></div><br>");
  }
}

Book.prototype.listDefaults = function(books) {
  $('.all_books').empty();
  for (var i = 0; i < books.length; i++) {
    $('.default_books').append("<br><div class='row'><div class='col-sm-3'>" + '<img src="' + books[i][4] + '">' + "</div>" + "<div class='col-sm-8 col-sm-offset-1'><h3>" + books[i][0] + "</h3><br>" + "<p class='bold'>Author(s): " + books[i][1] + "</p><p class='bold'>Description: " + books[i][2] + "</p><p class='bold'>Average Rating: "
    + books[i][3] + "</p></div></div><br>");
  }
}

exports.bookModule = Book;
