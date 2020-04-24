export const indexData = (page) => fetch('http://localhost:99/page/' + page, {
    type: 'indexData'
});

export const boxData = () => fetch('http://localhost:99/data', {
    type: 'boxData'
});
export const blogData = (blogId) => fetch('http://localhost:99/blog/' + blogId, {
    type: 'blogData'
});

export const loadImage = (data) => fetch('http://106.14.249.247:99/upload/image', {
    type: 'loadImage',
    method: 'post',
    body: data
});
