function Init() {
    // 创建 link 元素，并设置相关属性
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/css/global.css';

    // 将 link 元素添加到页面的 head 标签中
    document.head.appendChild(link);

    // 创建 nav 元素
    var nav = document.createElement('nav');

    // 创建 ul 元素
    var ul = document.createElement('ul');

    // 创建 li 元素和 a 元素，并设置相关属性和链接
    var li1 = document.createElement('li');
    var a1 = document.createElement('a');
    a1.href = '/index.html';
    a1.textContent = '主页';
    li1.appendChild(a1);

    var li2 = document.createElement('li');
    var a2 = document.createElement('a');
    a2.href = '/navigation/收藏.html';
    a2.textContent = '收藏';
    li2.appendChild(a2);

    var li3 = document.createElement('li');
    var a3 = document.createElement('a');
    a3.href = '/navigation/工具箱.html';
    a3.textContent = '工具箱';
    li3.appendChild(a3);

    // 将 li 元素添加到 ul 元素中
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    // 将 ul 元素添加到 nav 元素中
    nav.appendChild(ul);

    // 将 nav 元素添加到页面的 body 标签中
    document.body.appendChild(nav);
}
Init();
