// src/components/organisms/BlogList.js
import React from 'react';
import './BlogList.css';

const BlogList = ({ entries, onDelete }) => (
  <div className='blog-list-container'>
    {entries.map((entry, index) => (
      <div className='blog-list-item' key={index}>
        <h2>{entry.title}</h2>
        <p>{entry.description}</p>
        <button onClick={() => onDelete(index)}>Eliminar</button>
      </div>
    ))}
  </div>
);

export default BlogList;
