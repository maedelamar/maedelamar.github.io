document.getElementById('about-back-btn').addEventListener('click', () => location.href = '../');

document.getElementById('project-btn').addEventListener('click', () => location.href = '../projects/projects.html');

const headerBtns = document.querySelectorAll('.my-stuff-btn');
for (let btn of headerBtns) {
    btn.addEventListener('mouseover', () => btn.style.backgroundColor = 'rgb(50, 50, 50)');
    btn.addEventListener('mouseout', () => btn.style.backgroundColor = 'black');
}

// temp