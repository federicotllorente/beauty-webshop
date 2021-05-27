import MenuButton from './icons/MenuButton'

const BurgerMenuButton = ({ menuIsOpen, setMenuIsOpen }) => {
	const handleButton = () => {
		if (menuIsOpen) {
			setMenuIsOpen(false)
		} else {
			setMenuIsOpen(true)
		}
	}

	const buttonClassNames = menuIsOpen
		? 'burger_menu_button burger_menu_button--open'
		: 'burger_menu_button'

	return (
		<button className={buttonClassNames} onClick={handleButton}>
			<MenuButton />
		</button>
	)
}

export default BurgerMenuButton