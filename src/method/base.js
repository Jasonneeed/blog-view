export const indexData = (page) => fetch('http://localhost:99/page/' + page, {
    type: 'indexData'
});

export const boxData = () => fetch('http://localhost:99/data', {
    type: 'boxData'
});
export const blogData = (blogId) => fetch('http://localhost:99/blog/' + blogId, {
    type: 'blogData'
});
export const tagData = (tagId) => fetch('http://localhost:99/tag/' + tagId, {
    type: 'tagData'
});
export const tags=()=>fetch('http://localhost:99/admin/tag/',{
   type:'tags'
});
export const categoryData = (categoryId) => fetch('http://localhost:99/category/' + categoryId, {
    type: 'categoryData'
});
export const categories = () => fetch('http://localhost:99/admin/categories', {
    type: 'categories'
});
export const adminBlogData = (page) => fetch('http://localhost:99/admin/blog?page='+page, {
    type: 'adminBlog'
});
export const editor = (data) => fetch('http://localhost:99/admin/blog', {
    type: 'editor',
    method: 'post',
    body: data
});
export const loadImage = (data) => fetch('http://106.14.249.247:99/upload/image', {
    type: 'loadImage',
    method: 'post',
    body: data
});

export const initPage=(data=>{
    let page;
    if (data) {
        page = data;
    } else {
        page = 0;
    }
    return page;
});

