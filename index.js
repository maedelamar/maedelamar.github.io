document.getElementById('about-btn').addEventListener('click', () => location.href = '/about/about.html');

document.getElementById('project-btn').addEventListener('click', () => location.href = '/projects/projects.html');

const headerBtns = document.querySelectorAll('.my-stuff-btn');
for (let btn of headerBtns) {
    btn.addEventListener('mouseover', () => btn.style.backgroundColor = 'rgb(50, 50, 50)');
    btn.addEventListener('mouseout', () => btn.style.backgroundColor = 'black');
}