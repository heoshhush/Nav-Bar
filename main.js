const moreMenu = document.querySelector('.moreMenu');
const nav = document.querySelector('nav');
const hiddenBar = document.querySelector('.hiddenBar')

moreMenu.addEventListener('click', () => {
    if(!hiddenBar.matches('.open')){
    hiddenBar.classList.add('open'); // javascript 연산이 더 빨리 전달되고, css가 더 나중에 전달됨. 문제..
    rotateButton('90deg');
}
    else if(hiddenBar.matches('.open')){
    hiddenBar.classList.remove('open');
    rotateButton('180deg');
    }
})

window.addEventListener('resize', () => {
    if(window.outerWidth > 850){
        hiddenBar.classList.remove('open');
        rotateButton('180deg');
    }
});

function rotateButton(deg){
    moreMenu.style.transform = `rotate(${deg})`
}

/* 혹은, 
moreMenu.addEventListener('click', () => {
    hiddenBar.classList.toggle('open');
})

1) toggle과 classList를 함께 쓰면, 이벤트리스너에서 각 경우를 if로 지정해주지 않더라도, 
버튼 클릭 및 재클릭시 클래스 삭제, 추가를 할 수 있다.  

2) Nav Bar의 핵심은, hiddenBar를 크기 0과 overflow:hidden 으로 만든뒤,
클릭 이벤트를 통해 hiddenBar의 크기를 늘려주는 것!
    ** overflow:hidden을 하는 이유는, 해당 div 안의 컨텐츠들이 삐져나올 수 있으므로!
*/ 

