const hamburger = document.querySelector('.ham-btn1');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.overlaymenu1');
const cancel = document.querySelector('.cancel');
const port = document.querySelector('.items-port');
const contact = document.querySelector('.items-contact');
const about = document.querySelector('.items-about');
const objBtnPopup = document.querySelectorAll('.see-project-btn');



hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  overlay.style.display = 'block';
});
about.addEventListener('click', () => {
  overlay.style.display = 'none';
});
cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});

port.addEventListener('click', () => {
  overlay.style.display = 'none';
});



contact.addEventListener('click', () => {
  overlay.style.display = 'none';
});

const projects = [
  {
    id: 0,
    url: 'cali.jpg',
    title: 'Keeping track of hundreds of components',
    description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy
text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s
with the relea`,
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
    url: 'cali.jpg',
    title: 'Keeping track of hundreds of components 1',
    description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy
text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s
with the relea`,
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
    url: 'cali.jpg',
    title: 'Keeping track of hundreds of components 2',
    description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy
text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s
with the relea`,
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
    url: 'cali.jpg',
    title: 'Keeping track of hundreds of components 3',
    description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy
text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s
with the relea`,
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
    url: 'cali.jpg',
    title: 'Keeping track of hundreds of components 4',
    description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy
text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s
with the relea`,
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
    url: 'cali.jpg',
    title: 'Keeping track of hundreds of components 5',
    description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy
text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s
with the relea`,
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

const popup2 = (index) => `<article class="popup">
<button type="button" class="btn-popup-close">
  <img src="Icon-Cancel.svg" alt="cancel icon" />
</button>
<div class="card-popup">
  <img src=${projects[index].url} alt="" />
</div>
<h2 class="popup-title">${projects[index].title}</h2>
<ul class="popup-tags">
  <li class="tag-popup">${projects[index].tecnologies.tech1}</li>
  <li class="tag-popup">${projects[index].tecnologies.tech2}</li>
  <li class="tag-popup">${projects[index].tecnologies.tech3}</li>
  <li class="tag-popup">${projects[index].tecnologies.tech4}</li>
</ul>
<p class="popup-paragraph">${projects[index].description}</p>

<div class="pop-up-btn">
  <a href=${projects[index].linkVersion} class="pop-up-btn-info">
    See Live
    <img src="" alt="" />
  </a>
  <a href="${projects[index].linkSource}" class="pop-up-btn-info">
    See Sources
    <img src="kitty.png" alt="" />
  </a>
</div>
<script src="main2.js"></script>
</article> `;

for (let i = 0; i < objBtnPopup.length; i += 1) {
  objBtnPopup[i].addEventListener('click', () => {
    document.body.innerHTML = popup2(i);
  });
}

const formSection = document.getElementById('davididhere');
const mailInput = document.getElementById('email');
const messageError = document.getElementById('error-messages');

formSection.addEventListener('submit', (e) => {
  if (mailInput.value === mailInput.value.toLowerCase()) {
    messageError.textContent = '';
  } else {
    e.preventDefault();
    messageError.textContent = 'The email must be in lowercase';
  }
});

