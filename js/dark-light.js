function darkMode(){
    let body = document.querySelector('body');
    let mainTitle = document.querySelector('h1');
    let nav = document.querySelector('ol');
    let linkText = document.querySelectorAll('a');
    linkText[0].style.color='lightblue';
    linkText[1].style.color='lightblue';
    linkText[2].style.color='lightblue';
    body.style.backgroundColor='black';
    mainTitle.style.color='white';
    document.querySelector('div').style.color='white';
    nav.style.color='white';
    mainTitle.style.borderBottom = '5px solid white';
    document.querySelector('div').style.borderLeft = '5px solid white';
}
function lightMode(){
    let body = document.querySelector('body');
    let mainTitle = document.querySelector('h1');
    let nav = document.querySelector('ol');
    let linkText = document.querySelectorAll('a');
    linkText[0].style.color='red';
    linkText[1].style.color='red';
    linkText[2].style.color='red';
    body.style.backgroundColor='white';
    mainTitle.style.color='black';
    document.querySelector('div').style.color='black';
    nav.style.color='black';
    mainTitle.style.borderBottom = '5px solid black';
    document.querySelector('div').style.borderLeft = '5px solid black';
}
