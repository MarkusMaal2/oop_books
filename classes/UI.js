class UI {

    // help function to add DOM element

    addUIElement(name, className = "", textContent = "", attributes = {}) {
        // create element
        const element = document.createElement(name)

        // add css
        if (className !== "") {
            element.className = className
        }

        // add textContent
        element.appendChild(document.createTextNode(textContent))

        // add attributes
        if (Object.keys(attributes).length > 0) {
            for (let key in attributes) {
                element.setAttribute(key, attributes[key])
            }
        }

        return element
    }

    addBook(book) {

        // create row
        let newBook = this.addUIElement("tr")

        // create book columns
        let colTitle = this.addUIElement("td", "", book.title)
        let colAuthor = this.addUIElement("td", "", book.author)
        let colISBN = this.addUIElement("td", "", book.isbn)

        // add the delete button to the ISBN column
        let xLink = this.addUIElement("a", "secondary-content", "X", {"href": "#"})
        colISBN.appendChild(xLink)

        // add all columns to the new row
        newBook.appendChild(colTitle)
        newBook.appendChild(colAuthor)
        newBook.appendChild(colISBN)

        // add newly created table row to the book table
        const bookList = document.querySelector("#booklist")
        bookList.appendChild(newBook)
    }

    delBook(book) {
        book.remove()
    }
}