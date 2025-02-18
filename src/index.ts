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
