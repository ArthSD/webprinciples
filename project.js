
// nav toggle 

let links = document.querySelectorAll('.links');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove('active'))
        link.classList.add('active');
    })
})

// toggle navbar
const toggleBtn = document.querySelector('.toggle-btn');

const ul = document.querySelector('.nav-links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    ul.classList.toggle('active');
})


const projectModal = document.getElementById('project-modal');
const modalTitle = document.querySelector('.modal-title');
const modalDetail = document.querySelector('.modal-detail');
const modalGithub = document.querySelector('.modal-github');
// const modalLive = document.querySelector('.modal-live');
const modalImage = document.querySelector('.modal-image');
const closeBtn = document.querySelector('.closeButton');

// Original code below

let projectData = [
    {
        image: 'img/ios_logo.png',
        name: 'iOS Application Development',
        detail: 'I had developed an iOS Application for REWARDLE INC, Australia. It was a loyalty app which gives points on every purchase.',
        github: 'https://github.com/ArthSD',
        tags: '#ios, #all'
    },
    {
        image: 'img/android_logo.png',
        name: 'Android Application Development',
        detail: 'I had developed an Android application based on Kotlin. Name of thhe app is Strike an Opinion, it is a footbal game review app.',
        github: 'https://github.com/ArthSD',
        tags: '#android, #all'
    },
    {
        image: 'img/reactnative_logo.png',
        name: 'React Native Development',
        detail: 'I had rebuild mobile app for REWARDLE INC, Australia in React Native which is a cross-platform development tools, used to develop app for iOS and Android both',
        github: 'https://github.com/ArthSD',
        tags: '#reactnative, #all'
    },
    {
        image: 'img/php_logo.png',
        name: 'PHP Website Development',
        detail: 'This website was for Swim Club. It was used to manage Swim Gala meetings and also use to manage swimmers record data.',
        github: 'https://github.com/ArthSD',
        tags: '#php, #all'
    },
    {
        image: 'img/python_logo.png',
        name: 'Python Development',
        detail: 'I had developed a Python app for specially abled deaf people. I had developed a Machine Learning alogrithm which detects their sign language and converts them into readable sentences.',
        github: 'https://github.com/ArthSD',
        tags: '#python, #all'
    },
    {
        image: 'img/reactjs_logo.png',
        name: 'Reactjs Development',
        detail: 'I had developed a tool hiring website using ReactJs.',
        github: 'https://github.com/ArthSD',
        tags: '#reactjs, #all'
    },
]

const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML += `
            <div class="project-card" data-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="img/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-img" alt="">
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-detail">${data.detail}</p>
                        <a href="${data.github}" class="btn">github</a>
                    </div>
                </div>
            </div>
    `;
}

projectData.forEach(data => createProjectCards(data));

// changed code

const projects = document.querySelectorAll('.project-card');

projects.forEach((card, index) => {
  card.addEventListener('click', () => {
    const data = projectData[index];
    modalImage.src = data.image;
    modalTitle.textContent = data.name;
    modalDetail.textContent = data.detail;
    modalGithub.href = data.github;
    projectModal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  projectModal.style.display = 'none';
});