// UI object
const ui = new UI()
const ls = new LS()

// event elements
const test_book = new Book("Tõde ja õigus", "A. H. Tammsaare", 9176762)
const bookList = document.querySelector("#booklist")

// events
const submit = document.querySelector("#submit")
submit.addEventListener("click", addBook)
bookList.addEventListener("click", deleteBook)
document.addEventListener("DOMContentLoaded", getBooks)

function getBooks() {
    let books = ls.getData("books")
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        ui.addBook(book)
    }
}

function addBook(e) {
    // Text inputs
    const bookTitleElement = document.querySelector("#title")
    const bookAuthorElement = document.querySelector("#author")
    const bookISBNElement = document.querySelector("#isbn")

    let title = bookTitleElement.value
    let author = bookAuthorElement.value
    let isbn = bookISBNElement.value

    // create book
    const book = new Book(title, author, isbn)

    // add book value to interface by UI object
    ui.addBook(book)
    // add book to LS
    ls.addBook(book)

    // clear user input
    bookTitleElement.value = ""
    bookAuthorElement.value = ""
    bookISBNElement.value = ""
    e.preventDefault()
}


function deleteBook(e) {
    if (e.target.textContent === "X") {
        // ask for user confirmation
        if (confirm(`Are you sure you want to delete this book from the list?`)) {
            // create book object for deletion
            const target = e.target.parentElement.parentElement
            let title = target.children[0].textContent
            let author = target.children[1].textContent
            let isbn = target.children[2].textContent
            isbn = isbn.slice(0, isbn.length - 1)
            const book = new Book(title, author, isbn)
            // delete from UI
            ui.delBook(target)
            // delete from localStorage
            ls.delBook(book)
        }
    }
    e.preventDefault()
}