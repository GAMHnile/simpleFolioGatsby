import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'George Uweh | Web developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: "Welcome to George Uweh's portfolio website.", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'George Uweh',
  subtitle: "I'm a web developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a web developer with a focus  on front end development. I enjoy creating scalable applications.',
  paragraphTwo:
    "I love learning and i'm  always adding new skills and improving the quality of my products.",
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'crowncl',
    title: 'Crown clothing',
    info:
      'A full fledge ecommerce website built with react, firebase, redux. A progressive web app so can scale well.',
    info2: 'It is still in development',
    url: 'https://crwn-gamh-live.herokuapp.com/',
    repo: 'https://github.com/GAMHnile/Crown-clothing', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'smartbrains',
    title: 'Smartbrains',
    info:
      'This app uses the Clarifai computer vision api to detect faces in photos. It has signup and login feature.',
    info2: '',
    url: 'http://gamhnile-smart-brain.herokuapp.com/',
    repo: 'https://github.com/GAMHnile/smart-brain-front', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'robofriends',
    title: 'Robofriends',
    info: 'A simple web app that displays my robot friends with a live search feature.',
    info2: '',
    url: 'https://gamhnile.github.io/Robofriends/',
    repo: 'https://github.com/GAMHnile/Robofriends', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'georgeamhuweh@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/UwehGeorge',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://ng.linkedin.com/in/george-uweh-96190a145',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/GAMHnile',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
