import MenuButton from './icons/MenuButton'

const BurgerMenuButton = ({ menuIsOpen, setMenuIsOpen }) => {
	const handleButton = () => {
		if (menuIsOpen) {
			setMenuIsOpen(false)
		} else {
			setMenuIsOpen(true)
		}
	}

	return (
		<button className="burger_menu_button" onClick={handleButton}>
			<MenuButton />
		</button>
	)
}

export default BurgerMenuButton