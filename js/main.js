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
        { href: '/navigation/collection.html', text: '收藏' },
        { href: '/navigation/tool.html', text: '工具' }
    ];
    items.forEach(item => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        if(window.location.pathname===item.href){
            a.classList.add('a-active');
        }
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
    let link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.href = '/image/ys.png';
    link.type = 'image/x-icon';
    document.head.appendChild(link);
}
AddSiteIcon();