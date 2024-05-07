// src/components/ImageGallery.js
import React, { useState, useEffect } from 'react';

const ImageGallery = ({ page }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  const fetchImages = (page) => {
    setLoading(true);
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  };

  return (
    <div className="image-gallery">
      {loading ? (
        <div className="loader text-white text-center text-2xl">Loading...</div>
      ) : (
        images.map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.download_url} alt={image.author} />
          </div>
        ))
      )}
    </div>
  );
};

export default ImageGallery;
