import { useState, useEffect, useRef } from 'react';
import './Image.css';

interface ImageProps {
    src: string;
    alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLImageElement | null>(null);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            const handleClickOutside = (event: MouseEvent) => {
                if (
                    modalRef.current &&
                    !modalRef.current.contains(event.target as Node)
                ) {
                    setIsOpen(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isOpen]);

    return (
        <>
            <button className="gallery__thumbnail" onClick={handleOpenModal}>
                <img src={src} alt={alt} className="gallery__image" />
            </button>
            {isOpen && (
                <div className="modal">
                    <img
                        ref={modalRef}
                        className="modal__image"
                        src={src}
                        alt={alt}
                    />
                    <button
                        className="modal__close-button"
                        onClick={handleCloseModal}
                    >
                        X
                    </button>
                </div>
            )}
        </>
    );
};

export default Image;
