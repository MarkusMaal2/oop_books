class UI {
    addBook(book) {

        // create row
        let newBook = document.createElement("tr")

        // create book columns
        let colTitle = document.createElement("td")
        let colAuthor = document.createElement("td")
        let colISBN = document.createElement("td")

        colTitle.appendChild(document.createTextNode(book.title))
        colAuthor.appendChild(document.createTextNode(book.author))
        colISBN.appendChild(document.createTextNode(book.isbn))

        // add the delete button to the ISBN column
        let xLink = document.createElement("a")
        xLink.href = "#"
        xLink.className = "secondary-content"
        xLink.appendChild(document.createTextNode("X"))
        colISBN.appendChild(xLink)

        // add all columns to the new row
        newBook.appendChild(colTitle)
        newBook.appendChild(colAuthor)
        newBook.appendChild(colISBN)

        // add newly created table row to the book table
        const bookList = document.querySelector("#booklist")
        bookList.appendChild(newBook)
    }
}