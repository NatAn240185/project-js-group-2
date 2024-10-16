// Массив всех проектов
const allProjects = [
   { img: '../img/my-projects/Rectangle 11-min.png', title: 'wallet webservice ', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/project-js-group-2' },
  { img: '../img/my-projects/Rectangle 12-min.png', title: 'English excellence webservice ', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/project-js-group-2' },
  { img: '../img/my-projects/Rectangle 9-min.png', title: 'green harvest online store', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/project-js-group-2' },
  { img: '../img/my-projects/first screen 1-min.png', title: 'starlight studio landing page', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/project-js-group-2' },
  { img: '../img/my-projects/Rectangle 10-min.png', title: 'power pulse webservice ', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/project-js-group-2' },
  { img: '../img/my-projects/Rectangle 4-min.png', title: 'energy flow webservice ', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/project-js-group-2' },
  { img: '../img/my-projects/Rectangle 5-min.png', title: 'fruitbox online store', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/project-js-group-2' },
  { img: '../img/my-projects/Rectangle 6-min.png', title: 'chego jewelry website', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/project-js-group-2' },
  { img: '../img/my-projects/Rectangle 7-min.png', title: 'mimino website', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/project-js-group-2' },
  { img: '../img/my-projects/Rectangle 8-min.png', title: 'vyshyvanka vibes Landing Page', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/project-js-group-2' },


];

let currentIndex = 0;
const projectsPerLoad = 3;


function loadProjects() {
  const projectList = document.getElementById('project-list');


  for (let i = 0; i < projectsPerLoad; i++) {
    if (currentIndex >= allProjects.length) {

      document.getElementById('load-more').style.display = 'none';
      break;
    }


    const project = allProjects[currentIndex];
    const li = document.createElement('li');
    li.classList.add('project-item');
    li.innerHTML = `
      <img src="${project.img}" alt="${project.title}" class="img">
      <div class="item-text">
        <p class="text">${project.technologies}</p>
        <h3 class="label">${project.title}</h3>
  
        <a href="${project.github}" class="visit" target="_blank">Visit<svg class="visit-icon" width="15" height="15">
        <use href="../img/my-projects/symbol-defs.svg#icon-visit">
        </svg></a>
      </div>
    `;

    projectList.appendChild(li);
    currentIndex++;
  }
}

// Начальная загрузка первых 3 проектов
loadProjects();


document.getElementById('load-more').addEventListener('click', loadProjects);
