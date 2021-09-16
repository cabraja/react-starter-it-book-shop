import React, { useEffect,useState } from 'react'
import Book from './Book'

const App = () => {
    const BASE_URL = 'https://api.itbook.store/1.0/';
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + 'new').then(res => res.json()).then(data => setData(data.books));
    },[])

    const searchBooks = (e) => {
        e.preventDefault();
        const value = e.target.querySelector('input').value;
        fetch(`${BASE_URL}search/${value}`).then(res => res.json()).then(data => setData(data.books));
    }

    return (
        <>
        <header>
            <h1>BookNerd.IT</h1>
            <form  onSubmit={(e) => searchBooks(e)}><input type="text" placeholder="Search..."/></form>
        </header>

        <main>
        {
            data.map((book,index) => <Book key={index} {...book}/>)
        }
        </main>
        </>
    )
}

export default App
