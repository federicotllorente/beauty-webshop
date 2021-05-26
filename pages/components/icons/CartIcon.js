const CartIcon = props => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16.5 17.713"
        {...props}
    >
        <defs>
            <style>
                {
                    ".prefix__b,.prefix__e{fill:none}.prefix__b{stroke-linecap:round;stroke:#f1f1f1;stroke-width:2px}.prefix__c{stroke:none}"
                }
            </style>
        </defs>
        <g strokeLinecap="round" fill="none">
            <path className="prefix__c" d="M0 4.713h15l-2 10H2z" />
            <path
                d="M2.44 6.713l1.2 6h7.72l1.2-6H2.44m-2.44-2h15l-2 10H2l-2-10z"
                fill="#f1f1f1"
            />
        </g>
        <g className="prefix__b" transform="translate(3 15.713)">
            <circle className="prefix__c" cx={1} cy={1} r={1} />
            <circle className="prefix__e" cx={1} cy={1} />
        </g>
        <g className="prefix__b" transform="translate(10 15.713)">
            <circle className="prefix__c" cx={1} cy={1} r={1} />
            <circle className="prefix__e" cx={1} cy={1} />
        </g>
        <path className="prefix__b" d="M11.5 5.213l1-4M15.5 1.213h-3" />
    </svg>
)

export default CartIcon