function createNavItem(href, text) {
    return `<li><a href="${href}">${text}</a></li>`;
}

function Init() {
    // 创建 nav 元素
    var nav = document.createElement('nav');

    // 创建 ul 元素
    var ul = document.createElement('ul');

    // 创建 li 元素和 a 元素，并设置相关属性和链接
    var items = [
        { href: '/index.html', text: '主页' },
        { href: '/navigation/收藏.html', text: '收藏' },
        { href: '/navigation/工具箱.html', text: '工具箱' }
    ];

    // 创建 li 元素和 a 元素，并设置相关属性和链接
    var navItems = items.map(item => createNavItem(item.href, item.text)).join('');

    // 将 li 元素添加到 ul 元素中
    ul.innerHTML = navItems;

    // 将 ul 元素添加到 nav 元素中
    nav.appendChild(ul);

    // 将 nav 元素添加到页面的 body 标签中
    document.body.appendChild(nav);
}

Init();

