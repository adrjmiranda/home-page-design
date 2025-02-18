/**
 * Toggle Navbar Menu
 */
const toggleMenuButton = document.querySelector(
	'#toggle-menu'
) as HTMLButtonElement;
const navbarMenu = document.querySelector('.navbar-menu') as HTMLUListElement;

if (toggleMenuButton && navbarMenu) {
	toggleMenuButton.addEventListener('click', () => {
		navbarMenu.classList.toggle('show');

		toggleMenuButton.querySelectorAll('i').forEach((icon) => {
			icon.classList.toggle('hidden');
		});
	});
}

/**
 * Change Link Style After Click
 */
const navbarLinks = document.querySelectorAll(
	'.navbar-link'
) as NodeListOf<HTMLAnchorElement>;

const ACTIVE_CLASS: string = 'active';

if (navbarLinks.length) {
	const clearActiveClass = () => {
		navbarLinks.forEach((link) => link.classList.remove(ACTIVE_CLASS));
	};

	navbarLinks.forEach((link) => {
		link.addEventListener('click', () => {
			clearActiveClass();
			link.classList.add(ACTIVE_CLASS);
		});
	});
}

/**
 * Scroll Reveal Animation
 */
import ScrollReveal from 'scrollreveal';

ScrollReveal().reveal('.content-title', {
	reset: false,
	opacity: 0,
	origin: 'bottom',
	distance: '80%',
	easing: 'ease-in-out',
	duration: 1550,
	delay: 250,
});
ScrollReveal().reveal('.content-buttons', {
	reset: false,
	opacity: 0,
	origin: 'bottom',
	distance: '90%',
	easing: 'ease-in-out',
	duration: 1350,
	delay: 750,
});
