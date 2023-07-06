window.onload = function () {
    window.scrollTo(0, 0);
  }
  
window.addEventListener('scroll', function () {
    const educon = document.querySelectorAll('.edu-container');
    educon.forEach(educon => {
        const colDivPosition = educon.getBoundingClientRect().bottom;
        const screenHeight = window.innerHeight;
        if (colDivPosition < screenHeight) {
            educon.classList.add('active');
        }
    });
});

window.addEventListener('scroll', function () {
    const course1 = document.querySelectorAll('.course1');
    course1.forEach(course1 => {
        const colDivPosition = course1.getBoundingClientRect().bottom;
        const screenHeight = window.innerHeight;
        if (colDivPosition < screenHeight) {
            course1.classList.add('active');
        }
    });
});
window.addEventListener('scroll', function () {
    const course2 = document.querySelectorAll('.course2');
    course2.forEach(course2 => {
        const colDivPosition = course2.getBoundingClientRect().bottom;
        const screenHeight = window.innerHeight;
        if (colDivPosition < screenHeight) {
            course2.classList.add('active');
        }
    });
});
window.addEventListener('scroll', function () {
    const skill = document.querySelectorAll('.skill');
    skill.forEach(skill => {
        const colDivPosition = skill.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (colDivPosition < screenHeight) {
            skill.classList.add('active');
        }
    });
});

$(document).ready(function () {
    $('.anime').animate({
        opacity: 1,
        transform: 'translateY(0)'
    }, 1000);
});