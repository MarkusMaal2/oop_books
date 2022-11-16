class LS {
    // help functions to getset data at LS
    getData(name) {
        let data
        if (localStorage.getItem(name) === null) {
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(name))
        }
        return data
    }

    setData(name, data) {
        localStorage.setItem(name, JSON.stringify(data))
    }

    addBook(book) {
        let books = this.getData("books")
        books.push(book)
        this.setData("books", books)
    }

    delBook(book) {
        let books
        if (localStorage.getItem("books") === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem("books"))
            books.forEach((book, i) => {
                let lsBook = new Book(books[i].title, books[i].author, books[i].isbn)
                if(lsBook.title === book.title && lsBook.author === book.author && lsBook.isbn === book.isbn){
                    books.splice(i, 1)
                }
            })
        }
        localStorage.setItem("books", JSON.stringify(books))
    }
}