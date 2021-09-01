const cursor = document.querySelector('.cursor');

// 6078774048401

// 마우스 무브 이벤트는 모든 마우스 움직임 좌표를 반환한다.
// AddEventListener function for mousemove is return all moving position of mouse
// e.pageX and e.pageY
window.addEventListener('mousemove', (e)=> {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromtop', (cursor.offsetTop - scrollY))
});
window.addEventListener('scroll', () => {
    const fromTop = parse(cursor.getAttribute('data-fromTop'));

    cursor.style.top = scrollY + fromTop + 'px';
})

window.addEventListener('click', ()=>{
    if (cursor.classList.contains('click')){
        cursor.classList.remove('click');
        // Triggering aDom Reflow
        void cursor.offsetWidth;
        cursor.classList.add('click')
    } else {
        cursor.classList.add('click')
    }
})