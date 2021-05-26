const MenuButton = props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...props}>
        <defs>
            <style>
                {
                    ".prefix__a{fill:none;stroke:#f1f1f1;stroke-linecap:round;stroke-width:2px}"
                }
            </style>
        </defs>
        <path className="prefix__a" d="M1 1h12M1 7h12M1 13h12" />
    </svg>
)

export default MenuButton