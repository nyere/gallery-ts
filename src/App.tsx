import { useState } from 'react';
import './App.css';
import { gallery } from './utils/gallery';
import Gallery from './components/Gallery/Gallery';
import Image from './components/Image/Image';

interface Tags {
    active: string[];
    inactive: string[];
}

// code
function App(): JSX.Element {
    const [tags, setTags] = useState<Tags>({
        active: [...gallery.uniqueTags],
        inactive: [],
    });

    const handleTagClick = (tag: string) => {
        if (tags.active.includes(tag)) {
            setTags({
                ...tags,
                active: tags.active.filter((activeTag) => activeTag !== tag),
                inactive: [...tags.inactive, tag],
            });
        }
        if (tags.inactive.includes(tag)) {
            setTags({
                ...tags,
                active: [...tags.active, tag],
                inactive: [
                    ...tags.inactive.filter(
                        (inactiveTag) => inactiveTag !== tag
                    ),
                ],
            });
        }
    };

    // JSX
    return (
        <>
            <div className="tags-container">
                <h1 className="title">Tags:</h1>
                <div className="tags-container__tags">
                    {gallery.uniqueTags.map((tag, index) => {
                        return (
                            <button
                                className={
                                    tags.inactive.includes(tag)
                                        ? 'tags-container__tag tags-container__tag--inactive'
                                        : 'tags-container__tag'
                                }
                                key={index}
                                onClick={() => handleTagClick(tag)}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div>
                <h1 className="gallery-title">Image Gallery</h1>
                <Gallery>
                    {gallery.images.map((img, index) => {
                        if (
                            img.tags.some((imgTag) =>
                                tags.active.includes(imgTag)
                            )
                        ) {
                            return (
                                <Image
                                    key={index}
                                    src={img.src}
                                    alt={img.src}
                                />
                            );
                        }
                        return null;
                    })}
                </Gallery>
            </div>
        </>
    );
}

export default App;
