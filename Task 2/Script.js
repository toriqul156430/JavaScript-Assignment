let books = JSON.parse(localStorage.getItem("books")) || [];

let bookList = document.getElementById("bookList");
let addBtn = document.getElementById("addBtn");


displayBooks();


addBtn.addEventListener("click", function () {
  let bookName = document.getElementById("bookName").value;
  let authorName = document.getElementById("authorName").value;

  if (bookName === "" || authorName === "") {
    alert("Please fill all fields!");
    return;
  }

  let book = {
    name: bookName,
    author: authorName
  };

  books.push(book);
  saveToLocal();
  displayBooks();


  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
});

function displayBooks() {
  bookList.innerHTML = "";

  books.forEach(function (book, index) {
    let tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td><button onclick="deleteBook(${index})">Delete</button></td>
    `;

    bookList.appendChild(tr);
  });
}

function deleteBook(index) {
  books.splice(index, 1);
  saveToLocal();
  displayBooks();
}

function saveToLocal() {
  localStorage.setItem("books", JSON.stringify(books));
}