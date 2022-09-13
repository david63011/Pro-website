const hamburger = document.querySelector('.ham-btn1');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.overlaymenu1');
const cancel = document.querySelector('.cancel');
const port = document.querySelector('.items-port');
const contact = document.querySelector('.items-contact');
const about = document.querySelector('.items-about');



const myProjectsSection = document.querySelector('#projects');


hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  overlay.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});

port.addEventListener('click', () => {
  overlay.style.display = 'none';
});

about.addEventListener('click', () => {
  overlay.style.display = 'none';
});

contact.addEventListener('click', () => {
  overlay.style.display = 'none';
});

const projects = [
  {
    id: 0,
    url: '',
    title: 'Keeping track of hundreds of components',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/david63011',
  },
  {
    id: 1,
    url: '',
    title: 'Keeping track of hundreds of components 1',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/david63011',
  },
  {
    id: 2,
    url: '',
    title: 'Keeping track of hundreds of components 2',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/david63011',
  },
  {
    id: 3,
    url: '',
    title: 'Keeping track of hundreds of components 3',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/david63011/',
  },
  {
    id: 4,
    url: '',
    title: 'Keeping track of hundreds of components 4',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/david63011',
  },
  {
    id: 5,
    url: '',
    title: 'Keeping track of hundreds of components 5',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://www.google.com/',
    linkSource: 'https://github.com/david63011',
  },
];

function createCards (index) {
  const div = document.createElement('div');
  const projectsTitle = document.createElement('h3');
  const languages = document.createElement('div');
  const paragraphCard = document.createElement('p');
  const liveBtn = document.createElement('a');
  const sourceBtn = document.createElement('a');
  const projectExBtn = document.createElement('button');
  const seeProBtn = document.createElement('button');


  projectsTitle.innerText = `${projects[index].title}`;
  projectsTitle.classList.toggle('popup-title');

  languages.innerText = `<div>${projects[index].tech1}</div>

  <div>${projects[index].tech2}</div>;
  <div>${projects[index].tech3}</div>;
  <div>${projects[index].tech4}</div>;
  
  languages.classList.toggle('popup-languages');

  paragraphCard.innertext = `${projects[index].description}
  paragraphCard.classList.toggle('popup-paragraph');
  seeProBtn.textContent = 'See Project';

  liveBtn.textContent= 'See Live'
  liveSiteBtn.href = `${projects[index].linkVersion}`;
  sourceBtn.textContent= 'See Source'
  sourceBtn.href = `${projects[index].linkSource}`;
  projectExBtn.style.backgroundImage = "URL('cancel.png')";
  projectExBtn.classList.add('popup-exit');
  div.classList.toggle('popup');
 

div.appendChild(projectsTitle);
  div.appendChild(languages);
  div.appendChild(paragraphCard);
  div.appendChild(liveBtn);
  div.appendChild(sourceBtn);
  div.appendChild(seeProBtn);

  
  projectExBtn.addEventListener('click', () => {
    overlay.style.display = 'none';

    document.body.style.background = '#fff';
   
  });




}
