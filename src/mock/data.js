import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'George Uweh | Full stack developer', // e.g: 'Name | Developer'
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
    'I am a full stack web and mobile app developer. I enjoy creating applications that scale.',
  paragraphTwo:
    'Some of the tools I use include: React, react native, nextjs, gatsbyjs, Ionic framework, capacitorjs, nodejs, express, socketIO, postgreSQL, mongodb, firebase, e.t.c.',
  paragraphThree:
    "I love learning and I'm  always adding new skills and improving the quality of my products. ",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'biumobileapp',
    title: 'BIU App',
    info:
      'Official mobile app of Benson Idahosa University (BIU). Built using technologies like react native, nodejs, sql, and mongodb e.t.c.',
    info2: 'It is live on the google play store.',
    url: 'https://play.google.com/store/apps/details?id=edu.biu.mobileapp&hl=en_US&gl=US',
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
    url: 'https://crwn-gamh-live-e1315b1b80c0.herokuapp.com',
    repo: 'https://github.com/GAMHnile/Crown-clothing', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'biunotification',
    title: 'Student notification System',
    info: 'A web application for composing and sending push notifications to the BIU mobile app.',
    info2: 'It is built with technologies like React, nodejs, mongoDB, e.t.c.',
    url: 'https://student-experience-api-af37944f3527.herokuapp.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'smartbrains',
    title: 'Smartbrains',
    info:
      'This app uses the Clarifai computer vision api to detect faces in photos. It has signup and login feature.',
    info2:
      'It is built on the frontend using react and create react app framework. The backend using nodejs, express, postgreSQL, and others',
    url: 'https://gamhnile-smart-brain-5a00584bf477.herokuapp.com',
    repo: 'https://github.com/GAMHnile/smart-brain-front', // if no repo, the button will not show up
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
