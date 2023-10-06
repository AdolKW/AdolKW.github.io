function CreateHeader() {
    let headerDiv = document.createElement('div');
    headerDiv.className = 'header';

    let navWrapperDiv = document.createElement('div');
    navWrapperDiv.className = 'nav';

    let titleA = document.createElement('a');
    titleA.className = 'title';
    titleA.href='/index.html';
    titleA.textContent='伊始之苏';
    headerDiv.appendChild(titleA);

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

    navWrapperDiv.appendChild(ul);
    headerDiv.appendChild(navWrapperDiv);

    document.body.innerHTML = '';
    document.body.appendChild(headerDiv);
}

CreateHeader();