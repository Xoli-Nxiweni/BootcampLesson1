document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = () => {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('show');

        const menuToggle = document.querySelector('.menu-toggle');
        menuToggle.classList.toggle('clicked');
        menuToggle.innerHTML = menuToggle.classList.contains('clicked') ? '<i class="fa fa-times" aria-hidden="true"></i>' : '<i class="fa fa-bars" aria-hidden="true"></i>';
    };

    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
    const typed = new Typed(".effect", {
        strings: ["UX/UI Designer.", "Frontend Developer.", "Java Programmer."],
        loop: true,
        typeSpeed: 80,
        backSpeed: 25,
        backDelay: 2500,
    });
});

//Rendering Index information



/////////////////////////////

    // Render Projects Function
    const renderInformation = () => {
        const ProjectsInfo = [
            {
                         heading: 'Personal Portfolio',
                         description: 'Created my debut web portfolio featuring a dynamic Weather App. Utilizing HTML, CSS, and JS, users can input their preferred city to instantly access accurate weather conditions. This project showcases my proficiency in web development and enthusiasm for creating engaging, functional interfaces.',
                         link: 'https://xolinxiweniresume.netlify.app/',
                         button: 'View Project'
                        },
                        
                        {
                         heading: 'Web-Based Calculator',
                         description: 'The calculator, a CodSoft project, offers a user-friendly web application with a polished interface for basic arithmetic operations. Its responsive design ensures seamless experiences on diverse devices, allowing users to toggle the calculator on or off for enhanced control and usability.',
                         link: 'https://xoli-nxiweni.github.io/CodSoft_WebDevelopment_Task_3/',
                         button: 'View Project'
                        },
                        
                        {
                         heading: 'OAuth Login Form',
                         description: 'The OAuth login form project simplifies user authentication with OAuth. Its streamlined interface enables seamless login experiences across devices, ensuring security and convenience for accessing various platforms and services. With a registration form attached.',
                         link: 'https://xoli-nxiweni.github.io/Google_Oauth/',
                         button: 'View Project'
                        },
                        
                        {
                         heading: 'Java Calculator App',
                         description: 'This robust Java application adheres to established coding principles and utilizes comprehensive exception handling. This ensures stability, predictability, and minimizes unexpected disruptions, resulting in a reliable and resilient experience for users.',
                         link: 'https://github.com/Xoli-Nxiweni/Java-Calculator-App/',
                         button: 'view repository'
                        },
                        
                        {
                         heading: 'Java ATM App',
                         description: 'This program simulates an ATM system. It includes PIN verification, balance management, and transaction history functionalities. Users can check balances, deposit and withdraw funds, and print transaction statements. The code ensures PIN security and handles user input errors, providing a comprehensive and interactive ATM experience.',
                         link: 'https://github.com/Xoli-Nxiweni/CodSoft_JavaATMApp',
                         button: 'view repository'
                        },
                        {
                         heading: 'Java Number Guessing Game',
                         description: 'This Java guessing game generates random numbers. Players input guesses, get feedback, and win by guessing correctly. The program tracks attempts and congratulates upon success, offering an engaging guessing experience. It includes exception handling for input errors, ensuring smooth gameplay.',
                         link: 'https://github.com/Xoli-Nxiweni/CodSoft_JavaNumGuessingApp',
                         button: 'view repository'
                        },
                        
        ];

        const boxesContainer = document.querySelector('.projContainer');
        ProjectsInfo.forEach(boxPara => {
            const postInfo = document.createElement('div');
            postInfo.classList.add('project');
            postInfo.innerHTML = `
                <h3>${boxPara.heading}</h3>
                <p>${boxPara.description}</p>
                <a href="${boxPara.link}" target="_blank" class="btn">${boxPara.button}</a>
            `;
            boxesContainer.appendChild(postInfo);
        });
    };

// footer icons rendering
var thisYear = new Date();
var currentYear = thisYear.getFullYear();
let footer = document.querySelector('footer');
let year = () => {
    const yearToday = document.createElement('p');
    yearToday.classList.add('footerP');
    // let icon = '<i class="fa fa-copyright"></i>
    yearToday.textContent =`
    Xoli Nxiweni Designs & Development. | All rights reserved. CodeTribe Bootcamp ${currentYear}.
    `;
    footer.appendChild(yearToday);
};
year();


const footerIcons = document.querySelector('#leftFooter');
let footerPopulation = ()=>{
    const icons = document.createElement('a')
    icons.classList.add('leftFooter')
    icons.innerHTML = `
    <a href="index.html"><h1>< X O _ / > </X></h1></a>
    <p>86 Somekele Street Zone 4 Meadowlands 1852,<br> Soweto, Johannesburg, Gauteng.</p>
    <a href="https://github.com/Xoli-Nxiweni" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
    <a href="https://www.linkedin.com/in/xolinxiweni/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
    <a href="https://wa.me/+27617514638" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
    <a href="tel:+27813065104" target="_blank"><i class="fa fa-phone" aria-hidden="true"></i></a>
    `
    footerIcons.appendChild(icons);
}
footerPopulation();

//wrapped icons rendering


const aboutSection = document.querySelector('.aboutSection');

let informationArray = [
  {
    iconClass: 'fa fa-graduation-cap',
    // title: 'Education',
    items: [
      'National Senior Certificate ',
      'Lamula J. Secondary School - 2011 - 2016',
      'System Development NQF Level 4',
      'DynamicDNA - 2022 - 2023',
      'System Development Diploma (PENDING)',
      'DynamicDNA - 2023 - 2024'
    ],
  },
  {
    iconClass: 'fa fa-smile-o',
    // title: 'Soft Skills',
    items: [
      'Adaptive',
      'Problem Solving',
      'Team Player',
      'Hard Working',
      'Positive Attitude',
      'Time Management',
    ],
  },
  {
    iconClass: 'fa fa-code',
    // title: 'Technical Skills',
    items: [
      'Java & C# Programming',
      'Linux',
      'HTML5, CSS3, JS',
      'Logo Design',
      'Web based platforms version control',
      'SQL',
    ],
  },
];

let populateInformation = () => {
  informationArray.forEach(info => {
    let population = document.createElement('div');
    population.classList.add('Portfolio');
    population.innerHTML = `
      <i class="${info.iconClass}" aria-hidden="true"></i>
      ${info.items.map(item => `<p><i class="fa fa-angle-right" aria-hidden="true"></i>${item}</p>`).join('')}
    `;
    aboutSection.appendChild(population);
  });
};
//functions rendering
document.addEventListener('DOMContentLoaded', ()=>{
  populateInformation();
  renderInformation();
})

//contact form validation 
const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('myForm');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const message = document.getElementById('message');
const messageError = document.getElementById('messageError');
form.addEventListener('submit', (e) => {

  var emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (name.value === '' || name.value === null || name.value.length < 5) {
      e.preventDefault();
      nameError.innerHTML = "*Name is Required";
  }
  name.addEventListener('input', () => {
    if (name.value.trim() !== '') {
        nameError.innerHTML = " ";
    }
  });

  if (!email.value.match(emailCheck)) {
      e.preventDefault();
      emailError.innerHTML = "*Valid Email is Required";
  } 
  email.addEventListener('input', () => {
    if (email.value.trim() !== '' && email.value.length > 5) {
        emailError.innerHTML = " ";
    }
  });

  if (message.value === '' || message.value === null || message.value < 8) {
    e.preventDefault();
    messageError.innerHTML = "*Message is Required";
} 
  message.addEventListener('input', () => {
    if (message.value.trim() !== '' && message.value.length > 8) {
        messageError.innerHTML = " ";
    }
  });
});

