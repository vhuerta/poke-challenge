Transform the following code to async / await
Complexity: Easy

```
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
```

Answer

```
(async function() {
  const book = await fetchBook();
  const translatedBook = await translateBook(book);
  const formattedBook = await formatBook(translatedBook);
})()
```
