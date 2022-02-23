/**
 * Mobile Menu
 */

const menuBtn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('hidden');
});





/**
 * FAQ Tabs
 */

const accordion = document.getElementsByClassName('accordion-title');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
        accordion[i].classList.toggle('active');
        const answer = accordion[i].nextElementSibling;

        answer.style.maxHeight 
            ? answer.style.maxHeight = null 
            : answer.style.maxHeight = answer.scrollHeight + 'px';
    });
}