const SearchIcon = props => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13.914 13.914"
        {...props}
    >
        <defs>
            <style>
                {
                    ".prefix__a{fill:none;stroke:#f1f1f1;stroke-linecap:round;stroke-width:2px}"
                }
            </style>
        </defs>
        <g className="prefix__a">
            <circle cx={5} cy={5} r={5} />
            <circle cx={5} cy={5} r={4} fill="none" />
        </g>
        <path className="prefix__a" d="M8.5 8.5l4 4" />
    </svg>
)

export default SearchIcon