// import React, { useState } from 'react';

// const books = [
//   {
//     id: 1,
//     title: 'The Invisible Man',
//     author: 'H.G . Wells',
//     image: 'The_Invisible_Man.jpg',
//     category: 'Science Fiction',
//     year: 1897,
//     publisher: 'Pearson Weekly'
//   },
//   {
//     id: 2,
//     title: 'Ikigai',
//     author: 'Héctor García, Francesc Miralles',
//     image: 'ikigai.jpeg',
//     category: 'Non-Fiction',
//     year: 2016,
//     publisher: 'Publisher B'
//   },

// ];

// function BookList() {
//   const [filter, setFilter] = useState('');
//   const [selectedPublisher, setSelectedPublisher] = useState('');

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const handlePublisherChange = (e) => {
//     setSelectedPublisher(e.target.value);
//   };

//   const filteredBooks = books.filter(book =>
//     (book.title.toLowerCase().includes(filter.toLowerCase()) ||
//     book.author.toLowerCase().includes(filter.toLowerCase()) ||
//     book.category.toLowerCase().includes(filter.toLowerCase())) &&
//     (selectedPublisher === '' || book.publisher === selectedPublisher)
//   );

//   const publishers = [...new Set(books.map(book => book.publisher))];

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by title, author, or category"
//         value={filter}
//         onChange={handleFilterChange}
//       />

//       <select value={selectedPublisher} onChange={handlePublisherChange}>
//         <option value="">Select Publisher</option>
//         {publishers.map(publisher => (
//           <option key={publisher} value={publisher}>{publisher}</option>
//         ))}
//       </select>

//       <div className="book-list">
//         {filteredBooks.map(book => (
//           <div key={book.id} className="book">
//             <div className="book-details">
//               <h2>{book.title}</h2>
//               <p>Author: {book.author}</p>
//               <p>Category: {book.category}</p>
//               <p>Year: {book.year}</p>
//               <p>Publisher: {book.publisher}</p>
//               <img src={require(`./${book.image}`).default} alt={book.title} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BookList;

import React, { useState } from 'react';

const books = [
  {
    id: 1,
    title: 'The Invisible Man',
    author: 'H.G . Wells',
    image: 'The_Invisible_Man.jpg',
    category: 'Science Fiction',
    year: 1897,
    publisher: 'Pearson Weekly'
  },
  {
    id: 2,
    title: 'Ikigai',
    author: 'Héctor García, Francesc Miralles',
    image: 'ikigai.jpeg',
    category: 'Non-Fiction',
    year: 2016,
    publisher: 'Publisher B'
  },

];
const BookList = () => {
  const [filter, setFilter] = useState('');
  const [selectedPublisher, setSelectedPublisher] = useState('');
  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handlePublisherChange = (e) => {
    setSelectedPublisher(e.target.value);
  };

  const filteredBooks = books.filter(book =>
    (book.title.toLowerCase().includes(filter.toLowerCase()) ||
    book.author.toLowerCase().includes(filter.toLowerCase()) ||
    book.category.toLowerCase().includes(filter.toLowerCase())) &&
    (selectedPublisher === '' || book.publisher === selectedPublisher)
  );

  const publishers = [...new Set(books.map(book => book.publisher))];

  return (
    <div>
      <h1>Book List</h1>
      
      <div>
        <input
          type="text"
          placeholder="Search by title, author, or category"
          value={filter}
          onChange={handleFilterChange}
        />
        
        <select value={selectedPublisher} onChange={handlePublisherChange}>
          <option value="">Select Publisher</option>
          {publishers.map(publisher => (
            <option key={publisher} value={publisher}>{publisher}</option>
          ))}
        </select>
      </div>
      
      <div className="book-list">
        {filteredBooks.map(book => (
          <div key={book.id} className="book">
            <div className="book-details">
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Category: {book.category}</p>
              <p>Year: {book.year}</p>
              <p>Publisher: {book.publisher}</p>
              <img src={require(`./${book.image}`).default} alt={book.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
