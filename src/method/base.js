let path = 'http://172.16.34.54'

export const indexData = (page) => fetch(path + ':99/page/' + page, {
    type: 'indexData'
});

export const boxData = () => fetch(path + ':99/data', {
    type: 'boxData'
});
export const blogData = (blogId) => fetch(path + ':99/blog/' + blogId, {
    type: 'blogData'
});
export const tagData = (tagName, page) => fetch(path + ':99/tag/' + tagName + '/page/' + page, {
    type: 'tagData'
});
export const tags = () => fetch(path + ':99/admin/tag/', {
    type: 'tags'
});
export const categoryData = (category, page) => fetch(path + ':99/category/' + category+'/page/'+page, {
    type: 'categoryData'
});
export const categories = () => fetch(path + ':99/admin/categories', {
    type: 'categories'
});
export const adminBlogData = (page) => fetch(path + ':99/admin/blog?page=' + page, {
    type: 'adminBlog'
});
export const editor = (data) => fetch(path + ':99/admin/blog', {
    type: 'editor',
    method: 'post',
    body: data
});
export const loadImage = (data) => fetch('http://106.14.249.247:99/upload/image', {
    type: 'loadImage',
    method: 'post',
    body: data
});

export const initPage = (data => {
    let page;
    if (data) {
        page = data;
    } else {
        page = 0;
    }
    return page;
});

