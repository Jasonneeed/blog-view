export const indexData = (page) => fetch('http://localhost:99/page/'+page, {
    type: 'indexData'
});

export const boxData = () => fetch('http://localhost:99/data', {
    type: 'boxData'
});
