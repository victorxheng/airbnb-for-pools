import React from 'react';

interface PhotoGalleryProps {
  images: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  return (
    <div className="photo-gallery grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Pool image ${index + 1}`} className="object-cover w-full h-48" />
      ))}
    </div>
  );
};

export default PhotoGallery;
