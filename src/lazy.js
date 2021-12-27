const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const loadImage = (entry) => {
    const container = entry.target;
    const img = container.firstChild;
    const url = img.dataset.src;
    img.src = url;

    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
});

export const registerImage = (image) => {
    observer.observe(image);
};
