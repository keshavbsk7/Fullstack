import React, { useState } from 'react';
import './App.css'
import book1 from './1.jpg';
import book2 from './2.jpg';
import book3 from './3.jpg';



const bookList = [
  { title: 'Code Name God', year: 2020, publisher: 'Pearson', image: book1 },
  { title: 'Shot The Moon', year: 2019, publisher: 'TMH', image: book2 },
  { title: 'The Hidden Life of Trees', year: 2020, publisher: 'Pearson', image: book3},
];

const App = () => {
  const [books, setBooks] = useState(bookList);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedPublisher, setSelectedPublisher] = useState('');

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setBooks(bookList.filter(book => book.year === year));
  };

  const handlePublisherChange = (publisher) => {
    setSelectedPublisher(publisher);
    setBooks(bookList.filter(book => publisher === '' ? true : book.publisher === publisher));
  };
  return (
    <div>
      <h1>Book List</h1>
      <select onChange={(e) => handleYearChange(parseInt(e.target.value))}>
        <option value="">All Years</option>
        <option value={2020}>2020</option>
      </select>
      
      <select onChange={(e) => handlePublisherChange(e.target.value)}>
        <option value="">All Publishers</option>
        <option value="Pearson">Pearson</option>
        <option value="TMH">TMH</option>
      </select>
      
      <ul>
        {books.map(book => (
          <li key={book.title}>
            <img src={book.image} alt={book.title} />
            <p>{book.title}</p>
            <p>Year: {book.year}</p>
            <p>Publisher: {book.publisher}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
