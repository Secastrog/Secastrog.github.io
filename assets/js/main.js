/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        let navItem = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            if(navItem) navItem.classList.add('active-link')
        }else{
            if(navItem) navItem.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*==================== TERMINAL EASTER EGG ====================*/
const terminalToggle = document.getElementById('terminal-toggle');
const terminalOverlay = document.getElementById('terminal-overlay');
const terminalClose = document.getElementById('terminal-close');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');
const terminalBody = document.getElementById('terminal-body');

// Open terminal
const openTerminal = () => {
    terminalOverlay.classList.add('show-terminal');
    setTimeout(() => terminalInput.focus(), 300);
}

// Close terminal
const closeTerminal = () => {
    terminalOverlay.classList.remove('show-terminal');
    terminalInput.value = '';
}

// Toggle on button click
if(terminalToggle) terminalToggle.addEventListener('click', openTerminal);
if(terminalClose) terminalClose.addEventListener('click', closeTerminal);

// Toggle on keyboard shortcut (Ctrl + \ or ~)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.key === '\\') || e.key === '~') {
        e.preventDefault();
        if (terminalOverlay.classList.contains('show-terminal')) {
            closeTerminal();
        } else {
            openTerminal();
        }
    }
});

// Close on overlay click
if(terminalOverlay) {
    terminalOverlay.addEventListener('click', (e) => {
        if (e.target === terminalOverlay) {
            closeTerminal();
        }
    });
}

// Keep focus on input when clicking inside body
if(terminalBody) {
    terminalBody.addEventListener('click', () => {
        terminalInput.focus();
    });
}

// Command execution
if(terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim().toLowerCase();
            
            // Print the command executed
            const cmdLog = document.createElement('p');
            cmdLog.innerHTML = `<span style="color: #00ff00;">guest@secastrog:~$</span> ${command}`;
            terminalOutput.appendChild(cmdLog);
            
            // Process command
            processCommand(command);
            
            // Clear input and scroll to bottom
            terminalInput.value = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });
}

const processCommand = (cmd) => {
    let response = '';
    const currentLang = localStorage.getItem('language') || 'en';
    const isEs = currentLang === 'es';
    
    const baseCmd = cmd.split(' ')[0];
    
    switch (baseCmd) {
        case 'help':
            response = isEs 
                ? 'Comandos disponibles:<br> - whoami: Muestra información sobre mí<br> - get skills: Lista de tecnologías<br> - contact: Información de contacto<br> - goto/cd [sección]: Navegar a home, about, skills, services, portfolio, contact<br> - ls: Listar secciones<br> - pwd: Ruta actual<br> - date: Ver fecha<br> - echo [texto]: Imprimir texto<br> - hire: Contratar<br> - matrix: ???<br> - clear: Limpiar consola<br> - exit: Cerrar terminal'
                : 'Available commands:<br> - whoami: Displays info about me<br> - get skills: List of technologies<br> - contact: Contact info<br> - goto/cd [section]: Navigate to home, about, skills, services, portfolio, contact<br> - ls: List sections<br> - pwd: Print working directory<br> - date: Show date<br> - echo [text]: Print text<br> - hire: Hire<br> - matrix: ???<br> - clear: Clear console<br> - exit: Close terminal';
            break;
        case 'whoami':
            response = isEs
                ? 'Soy Sergio Castro, Desarrollador Senior Full-Stack e IA. Construyo arquitecturas en la nube escalables.'
                : 'I am Sergio Castro, Senior Full-Stack & AI Developer. I build scalable cloud architectures.';
            break;
        case 'get':
            if (cmd === 'get skills') {
                response = 'C#, .NET Core, Angular, Python, React, Node.js, SQL Server, Oracle, AWS, Azure, Git, Docker';
            } else {
                response = `get: missing operand`;
            }
            break;
        case 'contact':
            response = isEs
                ? 'Email: <a href="mailto:contact.sergio.dev@gmail.com" style="color:#00ff00;text-decoration:underline;">contact.sergio.dev@gmail.com</a><br>O ejecuta "goto contact"'
                : 'Email: <a href="mailto:contact.sergio.dev@gmail.com" style="color:#00ff00;text-decoration:underline;">contact.sergio.dev@gmail.com</a><br>Or run "goto contact"';
            break;
        case 'goto':
        case 'cd':
            const section = cmd.split(' ')[1];
            if (!section) {
                response = isEs ? 'Falta el nombre de la sección.' : 'Missing section name.';
                break;
            }
            const el = document.getElementById(section);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                response = isEs ? `Navegando a ${section}...` : `Navigating to ${section}...`;
            } else {
                response = isEs ? `Sección no encontrada: ${section}` : `Section not found: ${section}`;
            }
            break;
        case 'ls':
        case 'dir':
            response = '<span style="color:#8b949e">drwxr-xr-x</span> home<br><span style="color:#8b949e">drwxr-xr-x</span> about<br><span style="color:#8b949e">drwxr-xr-x</span> skills<br><span style="color:#8b949e">drwxr-xr-x</span> services<br><span style="color:#8b949e">drwxr-xr-x</span> portfolio<br><span style="color:#8b949e">drwxr-xr-x</span> contact';
            break;
        case 'pwd':
            response = '/home/guest/secastrog_portfolio';
            break;
        case 'date':
            response = new Date().toString();
            break;
        case 'echo':
            response = cmd.substring(5);
            break;
        case 'hire':
            response = isEs
                ? '¡Excelente elección! Iniciando secuencia de contratación...<br>Por favor contacta a <a href="mailto:contact.sergio.dev@gmail.com" style="color:#00ff00;text-decoration:underline;">contact.sergio.dev@gmail.com</a> para proceder.'
                : 'Great choice! Initiating hiring sequence...<br>Please reach out to <a href="mailto:contact.sergio.dev@gmail.com" style="color:#00ff00;text-decoration:underline;">contact.sergio.dev@gmail.com</a> to proceed.';
            break;
        case 'matrix':
            response = '<span style="color:#00ff00; font-weight:bold;">Wake up, Neo...</span><br>The Matrix has you.<br>Follow the white rabbit.';
            break;
        case 'clear':
            const welcomeText = isEs 
                ? "<p>Welcome to secastrogOS v1.0.0</p><p>Escribe 'help' para ver los comandos.</p>" 
                : "<p>Welcome to secastrogOS v1.0.0</p><p>Type 'help' to see available commands.</p>";
            terminalOutput.innerHTML = welcomeText;
            return;
        case 'exit':
            closeTerminal();
            return;
        case 'sudo':
        case 'su':
            response = '<span style="color:#ff5f56;">Access Denied: This incident will be reported.</span>';
            break;
        case '':
            return; // do nothing for empty command
        default:
            response = isEs 
                ? `Comando no encontrado: ${baseCmd}. Escribe 'help' para ver los comandos.`
                : `Command not found: ${baseCmd}. Type 'help' for available commands.`;
    }
    
    const responseLog = document.createElement('p');
    responseLog.innerHTML = response;
    terminalOutput.appendChild(responseLog);
}
