export const drag = () => {
    let dragDiv = document.getElementById("float-button");
    console.log('要开始动了');
// 鼠标按下事件 处理程序
    let putDown = function (e) {
        e.mousedown = function (event) {
            dragDiv.style.cursor = "pointer";
            let offsetX = parseInt(dragDiv.style.left); // 获取当前的x轴距离
            let offsetY = parseInt(dragDiv.style.top); // 获取当前的y轴距离
            let innerX = event.clientX - offsetX; // 获取鼠标在方块内的x轴距
            let innerY = event.clientY - offsetY; // 获取鼠标在方块内的y轴距
            // 按住鼠标时为div添加一个border
            dragDiv.style.borderStyle = "solid";
            dragDiv.style.borderColor = "red";
            dragDiv.style.borderWidth = "3px";
            // 鼠标移动的时候不停的修改div的left和top值
            document.onmousemove = function (event) {
                dragDiv.style.left = event.clientX - innerX + "px";
                dragDiv.style.top = event.clientY - innerY + "px";
                // 边界判断
                if (parseInt(dragDiv.style.left) <= 0) {
                    dragDiv.style.left = "0px";
                }
                if (parseInt(dragDiv.style.top) <= 0) {
                    dragDiv.style.top = "0px";
                }
                if (parseInt(dragDiv.style.left) >= window.innerWidth - parseInt(dragDiv.style.width)) {
                    dragDiv.style.left = window.innerWidth - parseInt(dragDiv.style.width) + "px";
                }
                if (parseInt(dragDiv.style.top) >= window.innerHeight - parseInt(dragDiv.style.height)) {
                    dragDiv.style.top = window.innerHeight - parseInt(dragDiv.style.height) + "px";
                }
            }
        };
        // 鼠标抬起时，清除绑定在文档上的mousemove和mouseup事件
        // 否则鼠标抬起后还可以继续拖拽方块
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            // 清除border
            dragDiv.style.borderStyle = "";
            dragDiv.style.borderColor = "";
            dragDiv.style.borderWidth = "";
        }
    }
// 绑定鼠标按下事件
    putDown(dragDiv);
}
