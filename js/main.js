function CreateHeader() {
    let headerDiv = document.createElement('div');
    headerDiv.className = 'header';

    let headerImage = document.createElement('img');
    headerImage.className = "header-image";
    headerImage.src = '/image/headerImage.png';
    headerImage.alt = "加载失败";

    let imageLink = document.createElement('a');
    imageLink.href = '/index.html';
    imageLink.appendChild(headerImage);
    headerDiv.appendChild(imageLink);

    let navWrapperDiv = document.createElement('div');
    navWrapperDiv.className = 'nav';
    let ul = document.createElement('ul');
    let items = [
        { href: '/index.html', text: '首页' },
        { href: '/navigation/收藏.html', text: '收藏' },
        { href: '/navigation/工具.html', text: '工具' }
    ];
    items.forEach(item => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        ul.appendChild(li);
    });
    let sliderDiv = document.createElement('div');
    sliderDiv.className = 'slider';
    ul.appendChild(sliderDiv);

    let titleA = document.createElement('a');
    titleA.className = 'title';
    titleA.href = '/index.html';
    titleA.textContent = '伊始之苏';
    navWrapperDiv.appendChild(titleA);

    navWrapperDiv.appendChild(ul);
    headerDiv.appendChild(navWrapperDiv);

    document.body.innerHTML = '';
    document.body.appendChild(headerDiv);
}
CreateHeader();

function AddSiteIcon() {

    // 创建link元素
    let link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.href = '/image/ys.png';
    link.type = 'image/x-icon';
    // 将link元素添加到<head>标签中
    document.head.appendChild(link);
}
AddSiteIcon();