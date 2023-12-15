function CreateHeader() {
    const headerDiv = document.createElement('div')
    headerDiv.className = 'header'

    const headerImage = document.createElement('img')
    headerImage.className = "header-image"
    headerImage.src = '/image/headerImage.png'
    headerImage.alt = "加载失败"

    const imageLink = document.createElement('a')
    imageLink.href = '/index.html'
    imageLink.appendChild(headerImage)
    headerDiv.appendChild(imageLink)

    const navWrapperDiv = document.createElement('div')
    navWrapperDiv.className = 'nav'
    const ul = document.createElement('ul')
    const items = [
        { href: '/index.html', text: '首页' },
        { href: '/navigation/collection.html', text: '收藏' },
        { href: '/navigation/tool.html', text: '工具' }
    ];
    items.forEach(item => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.href = item.href
        a.textContent = item.text
        if (window.location.pathname === item.href) {
            a.classList.add('a-active')
        }
        li.appendChild(a)
        ul.appendChild(li)
    });
    const sliderDiv = document.createElement('div')
    sliderDiv.className = 'slider'
    ul.appendChild(sliderDiv)

    const titleA = document.createElement('a')
    titleA.className = 'title'
    titleA.href = '/index.html'
    titleA.textContent = '伊始之苏'
    navWrapperDiv.appendChild(titleA)

    navWrapperDiv.appendChild(ul)
    headerDiv.appendChild(navWrapperDiv)

    document.body.innerHTML = ''
    document.body.appendChild(headerDiv)
}
CreateHeader()

function AddSiteIcon() {
    const link = document.createElement('link')
    link.rel = 'shortcut icon'
    link.href = '/image/ys.png'
    link.type = 'image/x-icon'
    document.head.appendChild(link)
}
AddSiteIcon()

function CreateFloatBtn() {
    const toTopBtn = document.createElement('div')
    toTopBtn.id = 'to-top'
    toTopBtn.className = 'float-btn'
    toTopBtn.innerHTML = '<span>↑</span>'

    const toBottomBtn = document.createElement('div')
    toBottomBtn.id = 'to-bottom'
    toBottomBtn.className = 'float-btn'
    toBottomBtn.innerHTML = '<span>↓</span>'

    document.body.appendChild(toTopBtn)
    document.body.appendChild(toBottomBtn)


    toTopBtn.addEventListener('click', () => scrollToPosition('.base-container', 'top'))
    toBottomBtn.addEventListener('click', () => scrollToPosition('.base-container', 'bottom'))

    function scrollToPosition(target, position) {
        const element = document.querySelector(target)
        const scrollHeight = element.scrollHeight
        const containerHeight = element.clientHeight
        const maxScrollTop = scrollHeight - containerHeight

        element.scrollTo({
            top: position === 'top' ? 0 : maxScrollTop,
            behavior: 'smooth'
        })
    }
}
window.addEventListener('load', CreateFloatBtn)