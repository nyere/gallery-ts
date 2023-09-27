interface Image {
    src: string;
    tags: string[];
}

const createGallery = (): { uniqueTags: string[]; images: Image[] } => {
    const images: Image[] = [
        {
            src: './imgs/baby-1.jpg',
            tags: ['baby'],
        },
        { src: './imgs/baby-2.jpg', tags: ['baby'] },
        { src: './imgs/baby-3.jpg', tags: ['baby'] },
        { src: './imgs/baby-4.jpg', tags: ['baby'] },
        { src: './imgs/baby-5.jpg', tags: ['baby'] },
        { src: './imgs/baby-6.jpg', tags: ['baby'] },
        { src: './imgs/baby-7.jpg', tags: ['baby'] },
        { src: './imgs/dog-1.jpg', tags: ['dog', 'Zelda', 'woman'] },
        { src: './imgs/dog-2.jpg', tags: ['dog', 'Zelda'] },
        { src: './imgs/dog-3.jpg', tags: ['dog'] },
        { src: './imgs/dog-4.jpg', tags: ['dog', 'Zelda'] },
        { src: './imgs/dog-5.jpg', tags: ['dog', 'Zelda'] },
        { src: './imgs/dog-6.jpg', tags: ['dog', 'Zelda'] },
        { src: './imgs/dog-7.jpg', tags: ['dog'] },
        { src: './imgs/dog-8.jpg', tags: ['dog', 'Zelda'] },
        { src: './imgs/dog-9.jpg', tags: ['dog', 'Zelda'] },
        { src: './imgs/dog-10.jpg', tags: ['dog', 'people'] },
        { src: './imgs/dog-11.jpg', tags: ['dog', 'Zelda'] },
        { src: './imgs/nature-1.jpg', tags: ['nature'] },
        { src: './imgs/nature-2.jpg', tags: ['nature'] },
        { src: './imgs/nature-3.jpg', tags: ['nature'] },
        { src: './imgs/nature-4.jpg', tags: ['nature', 'Zelda'] },
        { src: './imgs/nature-5.jpg', tags: ['nature'] },
        { src: './imgs/nature-6.jpg', tags: ['nature'] },
        { src: './imgs/nature-7.jpg', tags: ['nature'] },
        { src: './imgs/people-1.jpg', tags: ['people'] },
        { src: './imgs/people-2.jpg', tags: ['people'] },
        { src: './imgs/people-3.jpg', tags: ['people'] },
        { src: './imgs/people-4.jpg', tags: ['people'] },
        { src: './imgs/people-5.jpg', tags: ['people'] },
        { src: './imgs/people-6.jpg', tags: ['people'] },
        { src: './imgs/people-7.jpg', tags: ['people'] },
        { src: './imgs/woman-1.jpg', tags: ['woman'] },
        { src: './imgs/woman-2.jpg', tags: ['woman'] },
        { src: './imgs/woman-3.jpg', tags: ['woman'] },
        { src: './imgs/woman-4.jpg', tags: ['woman'] },
        { src: './imgs/woman-5.jpg', tags: ['woman'] },
        { src: './imgs/woman-6.jpg', tags: ['woman'] },
        { src: './imgs/woman-7.jpg', tags: ['woman'] },
        { src: './imgs/woman-8.jpg', tags: ['woman'] },
        { src: './imgs/woman-9.jpg', tags: ['woman'] },
        { src: './imgs/woman-10.jpg', tags: ['woman'] },
        { src: './imgs/woman-11.jpg', tags: ['woman', 'dog'] },
        { src: './imgs/woman-12.jpg', tags: ['woman'] },
        { src: './imgs/woman-13.jpg', tags: ['woman'] },
        { src: './imgs/woman-14.jpg', tags: ['woman'] },
    ];

    const uniqueTags = [
        ...new Set(
            images
                .map((img) => img.tags)
                .flat()
                .sort((a, b) => {
                    return a.toLowerCase().localeCompare(b.toLowerCase());
                })
        ),
    ];

    return { uniqueTags, images };
};

export const gallery = createGallery();
