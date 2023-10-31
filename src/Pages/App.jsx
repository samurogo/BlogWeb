// src/App.js
import { useState } from 'react';
import BlogList from '../Components/Organisms/BlogList';
import './App.css';

function App() {
  const [blogEntries, setBlogEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ title: '', description: '' });

  const addBlogEntry = () => {
    setBlogEntries([...blogEntries, newEntry]);
    setNewEntry({ title: '', description: '' });
  };

  const handleDelete = (index) => {
    const updatedEntries = [...blogEntries];
    updatedEntries.splice(index, 1);
    setBlogEntries(updatedEntries);
  };

  return (
    <div className="App">
      <h1>Mi Blog</h1>
      <input
        type="text"
        placeholder="Título"
        value={newEntry.title}
        onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
      />
      <textarea
        placeholder="Descripción"
        value={newEntry.description}
        onChange={(e) =>
          setNewEntry({ ...newEntry, description: e.target.value })
        }
      />
      <button onClick={addBlogEntry}>Agregar Entrada</button>
      <BlogList entries={blogEntries} onDelete={handleDelete} />
    </div>
  );
}

export default App;
