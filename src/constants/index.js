import { HiOutlineHome, HiOutlineCode, HiOutlineMail } from 'react-icons/hi';

const profileData = {
  name: 'Mauricio Agustin Silvera',
  job: 'Web developer',
  email: 'mauricioagustinsilvera@gmail.com',
  phone: '+54 9 1150207579',
  linkedIn: 'https://www.linkedin.com/in/mauricio-silvera/',
  gitHub: 'https://www.github.com/mauriciosilvera',
  buttonLabel: 'Download CV',
};

const proyectos = [{
  name: 'proyecto 1',
  preview: '',
},
{
  name: 'proyecto 2',
  preview: '',
},
{
  name: 'proyecto 3',
  preview: '',
},
{
  name: 'proyecto 4',
  preview: '',
}];

const headerOptions = [{
  id: 1,
  name: 'Home',
  icon: HiOutlineHome,
  link: '/',
},
{
  id: 2,
  name: 'Projects',
  icon: HiOutlineCode,
  link: '/projects',
},
{
  id: 3,
  name: 'Contact',
  icon: HiOutlineMail,
  link: '/contact',
}];

const technologies = {
  title: 'Hi! Im Mauricio ✌',
  text: 'Irure excepteur dolor deserunt magna. Id sint aute dolor nostrud dolor. Sit et pariatur exercitation amet ad cupidatat consectetur fugiat culpa ex ex excepteur do aliqua.',
  skills: [{
    name: 'Javascript',
    icon: 'https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg',
  },
  {
    name: 'HTML',
    icon: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png',
  },
  {
    name: 'CSS',
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
  },
  {
    name: 'React',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
  },
  {
    name: 'Javascript',
    icon: 'https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg',
  },
  {
    name: 'HTML',
    icon: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png',
  },
  {
    name: 'CSS',
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
  },
  {
    name: 'React',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
  },
  {
    name: 'HTML',
    icon: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png',
  },
  {
    name: 'CSS',
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
  },
  {
    name: 'React',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
  },
  {
    name: 'React',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
  }],
};

export {
  profileData, proyectos, headerOptions, technologies,
};
