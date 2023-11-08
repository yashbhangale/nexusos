// src/components/Blog.js

import React, { useState } from 'react';

const articles = [
  {
    id: 1,
    title: 'Sample Article 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    fullContent: 'This is the full content of Sample Article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Sample Article 2',
    content: 'Praesent vel dui sit amet justo aliquet auctor.',
    fullContent: 'This is the full content of Sample Article 2. Praesent vel dui sit amet justo aliquet auctor.',
  },
  {
    id: 2,
    title: 'Sample Article 2',
    content: 'Praesent vel dui sit amet justo aliquet auctor.',
    fullContent: 'This is the full content of Sample Article 2. Praesent vel dui sit amet justo aliquet auctor.',
  },
  {
    id: 2,
    title: 'Sample Article 2',
    content: 'Praesent vel dui sit amet justo aliquet auctor.',
    fullContent: 'This is the full content of Sample Article 2. Praesent vel dui sit amet justo aliquet auctor.',
  },
  {
    id: 2,
    title: 'Sample Article 2',
    content: 'Praesent vel dui sit amet justo aliquet auctor.',
    fullContent: 'This is the full content of Sample Article 2. Praesent vel dui sit amet justo aliquet auctor.',
  },
  // Add more articles as needed
];

const Blog = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedArticle(null);
    setModalIsOpen(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md cursor-pointer" onClick={() => openModal(article)}>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-700">{article.content}</p>
            </div>
          </div>
        ))}
      </div>

      {modalIsOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{selectedArticle.title}</h2>
            <p className="text-gray-700">
              {modalIsOpen ? selectedArticle.fullContent : selectedArticle.content}
            </p>
            <button className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
