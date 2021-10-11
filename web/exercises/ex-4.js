/*
Transform the following code to async / await
Complexity: Easy
*/

fetchBook()
  .then((book) => {
    translateBook(book)
      .then((translatedBook) => {
        formatBook(translatedBook)
          .then((formattedBook) => {
            return formattedBook;
          });
      });
  });