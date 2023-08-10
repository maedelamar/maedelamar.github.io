document.getElementById('project-back-btn').addEventListener('click', () => location.href = '../index.html');

document.getElementById('about-btn').addEventListener('click', () => location.href = '../about/about.html');

const headerBtns = document.querySelectorAll('.my-stuff-btn');
for (let btn of headerBtns) {
    btn.addEventListener('mouseover', () => btn.style.backgroundColor = 'rgb(50, 50, 50)');
    btn.addEventListener('mouseout', () => btn.style.backgroundColor = 'black');
}