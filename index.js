document.getElementById('about-btn').addEventListener('click', () => location.href = 'maedelamar.github.io/about');

document.getElementById('project-btn').addEventListener('click', () => location.href = 'maedelamar.github.io/projects');

const headerBtns = document.querySelectorAll('.my-stuff-btn');
for (let btn of headerBtns) {
    btn.addEventListener('mouseover', () => btn.style.backgroundColor = 'rgb(50, 50, 50)');
    btn.addEventListener('mouseout', () => btn.style.backgroundColor = 'black');
}