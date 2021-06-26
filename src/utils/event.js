
/**
 * 登录框头部拖拽函数
 * @param {*} E 
 * @param {鼠标初始位置} dragStyle 
 * @param {修改组件内部style的函数} setDragStyle 
 */
export const dragEvent = (E,dragStyle,setDragStyle) => {
  // E.pageX\E.pageY是鼠标相对浏览器可视区域的水平\垂直距离, 先赋予参考位置,然后利用鼠标移动后的距离来移动元素
  // Width\Height是鼠标距离header左边框的距离\上边框的距离
  let Width,Height;
  
  Width = E.pageX - dragStyle.left;
  Height = E.pageY - dragStyle.top;
  // console.log('E:',E.pageX,E.pageY)

  document.onmousemove = (e) => {
    // console.log('e:',e.pageX,e.pageY)

    setDragStyle({
      left: e.pageX - Width,
      top:  e.pageY - Height,
    });

  } 
  document.onmouseup = (e) => {
    document.onmousemove = null;
  }

};
