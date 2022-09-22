const books = [
    {
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        path: 'images/don_quixote.jpeg'
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien',
        path: 'images/lord_of_the_rings.jpeg'
    },
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        path: 'images/harry_potter.jpeg'
    },
    {
        title: 'Alice\'s Adventures in Wonderland',
        author: 'Lewis Carroll',
        path: 'images/alice_adventures_in_wonderland.jpeg'
    },
    {
        title: 'Twenty Thousand Leagues Under the Sea',
        author: 'Jules Verne',
        path: 'images/twenty_thousand_leagues_under_the_sea.jpeg'
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        path: 'images/moby_dick.jpeg'
    },
    {
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        path: 'images/the_picture_of_dorian_gray.jpeg'
    }
];


document.write(
`<div id="container">
    <table class="table">
        <tr class="table-title">
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
        </tr>`
) 

books.forEach(book => {
    document.write(
    `<tr class="books">
        <td><img class="img" src="${book.path}" alt="${book.title}"></td>
        <td>${book.title}</td>
        <td>${book.author}</td>
    </tr>`
    )
})

document.write(
    `</table>
    </div>`
)