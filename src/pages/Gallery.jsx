// src/components/ImageGallery.js

import { useState } from 'react';


const images = [
  // Add more image URLs as needed
  'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  'https://images.ctfassets.net/lzny33ho1g45/UWH9IWnkrHogTs50L5FM8/85b518e7aedd196d2b6b541d0f90c7fb/Linux.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760',
];

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg">
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full cursor-pointer"
              onClick={() => openModal(imageUrl)}
            />
          </div>
        ))}
      </div>

      {modalIsOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={selectedImage}
              alt="Selected Image"
              style={{ width: '600px', height: '400px' }} // Set the desired size using inline styles
            />
            <button className="mt-2 p-2 bg-blue-500 text-white rounded hover-bg-blue-600" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
