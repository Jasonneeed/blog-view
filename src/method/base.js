//默认地址，方便切换环境测试
let path = 'http://localhost';

//首页数据
export const indexData = (page) => fetch(path + ':99/page/' + page, {
    type: 'indexData'
});

//游客页面右侧数据集
export const boxData = () => fetch(path + ':99/data', {
    type: 'boxData'
});

//具体博客数据
export const blogData = (blogId) => fetch(path + ':99/blog/' + blogId, {
    type: 'blogData'
});

//删除接口
export const blogDelete = (blogId) =>fetch(path+':99/admin/blog', {
    type: 'blogDelete',
    method: 'delete',
    body: blogId
});

//某标签关联的文章数据
export const tagData = (tagName, page) => fetch(path + ':99/tag/' + tagName + '/page/' + page, {
    type: 'tagData'
});

//所有标签集
export const tags = () => fetch(path + ':99/admin/tag/', {
    type: 'tags'
});

//某类别的文章数据集
export const categoryData = (category, page) => fetch(path + ':99/category/' + category+'/page/'+page, {
    type: 'categoryData'
});

//所有类别
export const categories =(page) =>fetch(path+':99/categories?page='+page, {
   type: 'categories'
});

export const adminCategories = () => fetch(path + ':99/admin/categories', {
    type: 'adminCategories'
});
//后台文章集
export const adminBlogData = (page) => fetch(path + ':99/admin/blog?page=' + page, {
    type: 'adminBlog'
});

//新建博客接口
export const editor = (data) => fetch(path + ':99/admin/blog', {
    type: 'editor',
    method: 'post',
    body: data
});

//更新博客接口
export const putBlog = (data) => fetch(path+':99/admin/blog', {
    type: 'putBlog',
    method: 'put',
    body: data
});
//编辑过程中向服务器发送图片
export const loadImage = (data) => fetch('http://106.14.249.247:99/upload/image', {
    type: 'loadImage',
    method: 'post',
    body: data
});

//初始化分页组件页号
export const initPage = (data => {
    let page;
    if (data) {
        page = data;
    } else {
        page = 0;
    }
    return page;
});

