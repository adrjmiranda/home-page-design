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
