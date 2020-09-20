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
  subtitle: "I'm a web and mobile app developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a full stack web and hybrid mobile app developer. I enjoy creating applications that scale.',
  paragraphTwo:
    'Some of the tools I use include: React, nextjs, gatsbyjs, Ionic framework, capacitorjs, nodejs, express, socketIO, postgreSQL, mongodb, firebase, e.t.c.',
  paragraphThree:
    "I love learning and I'm  always adding new skills and improving the quality of my products. ",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'Coursegoals',
    title: 'Course Goals',
    info:
      "A mobile app for setting and keeping track of goals. It's built using Ionic framework, react, capacitorjs. It features google drive integration for cloud backup of data.",
    info2: 'It is live on the google play store.',
    url: 'https://play.google.com/store/apps/details?id=netlifyapp.kodeworld.coursegoals',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'crowncl',
    title: 'Crown clothing',
    info:
      'A full fledge ecommerce website built with react, firebase, redux with redux-sagas to handle asynchronous actions. It is also progressive web app.',
    info2:
      'It is built following proven best practices with redux and redux sagas so can scale well',
    url: 'https://crwn-gamh-live.herokuapp.com/',
    repo: 'https://github.com/GAMHnile/Crown-clothing', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'smartbrains',
    title: 'Smartbrains',
    info:
      'This app uses the Clarifai computer vision api to detect faces in photos. It has signup and login feature.',
    info2:
      'It is built on the frontend using react and create react app framework. The backend using nodejs, express, postgreSQL, and others',
    url: 'http://gamhnile-smart-brain.herokuapp.com/',
    repo: 'https://github.com/GAMHnile/smart-brain-front', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'robofriends',
    title: 'Robofriends',
    info: 'A web app that displays my robot friends with a live search feature.',
    info2: ' It is a serverside rendered app built using nextjs',
    url: 'https://robofriends-ssr-tau.vercel.app/',
    repo: 'https://github.com/GAMHnile/robofriends-ssr', // if no repo, the button will not show up
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
