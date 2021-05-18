function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books') // return fetch() as requested
  .then(resp => resp.json())                              // convert response to JSON
  .then(json => renderBooks(json));                       // send fetched JSON to renderBooks as (books) parameter.
  
};

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  
 
});
