import React, { ReactNode } from 'react';
import './Gallery.css';

interface GalleryProps {
    children: ReactNode;
}

const Gallery: React.FC<GalleryProps> = ({ children }) => {
    return <div className="gallery">{children}</div>;
};

export default Gallery;
