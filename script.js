// document.querySelector('.menu-toggle').addEventListener('click', function() {
//     document.querySelector('nav ul').classList.toggle('show');
// });

// let toggle = document.querySelector('.menu-toggle');

// toggle.addEventListener('click', () => {
//     if (toggle.classList.contains('clicked')) {
//         toggle.classList.remove('clicked');
//         toggle.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
//     } 
//     else {
//         toggle.classList.add('clicked');
//         toggle.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
//     }
// });


// var typed = new Typed(".effect", {
//     strings: ["UX/UI Designer.",
//     "Frontend Developer.", 
//     "Java Programmer.",],
//     loop: true,
//     typeSpeed: 80,
//     backSpeed: 25,
//     backDelay: 2500,
// });

// //Rendering the projects container
// const boxesContainer = document.querySelector('.projContainer');
// const renderInformation = ()=>{

//     const boxInfo = [
//         {
//          heading: 'Personal Portfolio',
//          description: 'Created my debut web portfolio featuring a dynamic Weather App. Utilizing HTML, CSS, and JS, users can input their preferred city to instantly access accurate weather conditions. This project showcases my proficiency in web development and enthusiasm for creating engaging, functional interfaces.',
//          link: 'https://xoli-nxiweni.github.io/personalportfolio/index.html'
//         },
        
//         {
//          heading: 'Web-Based Calculator',
//          description: 'The calculator, a CodSoft project, offers a user-friendly web application with a polished interface for basic arithmetic operations. Its responsive design ensures seamless experiences on diverse devices, allowing users to toggle the calculator on or off for enhanced control and usability.',
//          link: 'https://xoli-nxiweni.github.io/CodSoft_WebDevelopment_Task_3/'
//         },
        
//         {
//          heading: 'OAuth Login Form',
//          description: 'The OAuth login form project simplifies user authentication with OAuth. Its streamlined interface enables seamless login experiences across devices, ensuring security and convenience for accessing various platforms and services. With a registration form attached.',
//          link: 'https://xoli-nxiweni.github.io/Google_Oauth/'
//         },
        
//         {
//          heading: 'Java Calculator App',
//          description: 'This robust Java application adheres to established coding principles and utilizes comprehensive exception handling. This ensures stability, predictability, and minimizes unexpected disruptions, resulting in a reliable and resilient experience for users.',
//          link: 'https://github.com/Xoli-Nxiweni/Java-Calculator-App/'
//         },
        
//         {
//          heading: 'Java ATM App',
//          description: 'This program simulates an ATM system. It includes PIN verification, balance management, and transaction history functionalities. Users can check balances, deposit and withdraw funds, and print transaction statements. The code ensures PIN security and handles user input errors, providing a comprehensive and interactive ATM experience.',
//          link: 'https://github.com/Xoli-Nxiweni/CodSoft_JavaATMApp'
//         },
//         {
//          heading: 'Java Number Guessing Game',
//          description: 'This Java guessing game generates random numbers. Players input guesses, get feedback, and win by guessing correctly. The program tracks attempts and congratulates upon success, offering an engaging guessing experience. It includes exception handling for input errors, ensuring smooth gameplay.',
//          link: 'https://github.com/Xoli-Nxiweni/CodSoft_JavaNumGuessingApp'
//         }
//      ]
//     boxInfo.map((parameter)=>{
//         const postInfo = document.createElement('div');
//         postInfo.classList.add('project');
//         postInfo.innerHTML = `
//             <h3>${parameter.heading}</h3>
//             <p>${parameter.description}</p>
//             <a href="${parameter.link}" target="_blank"><button class="btn">View Project</button></a>
//         `
//         boxesContainer.appendChild(postInfo);
//     });
// }
// renderInformation();

// console.log('this is annoying now');

















document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle Functionality
    const toggleMenu = () => {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('show');

        const menuToggle = document.querySelector('.menu-toggle');
        menuToggle.classList.toggle('clicked');
        menuToggle.innerHTML = menuToggle.classList.contains('clicked') ? '<i class="fa fa-times" aria-hidden="true"></i>' : '<i class="fa fa-bars" aria-hidden="true"></i>';
    };

    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

    // Typed.js Initialization
    const typed = new Typed(".effect", {
        strings: ["UX/UI Designer.", "Frontend Developer.", "Java Programmer."],
        loop: true,
        typeSpeed: 80,
        backSpeed: 25,
        backDelay: 2500,
    });
});
