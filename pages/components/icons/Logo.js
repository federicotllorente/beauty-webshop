const Logo = props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 45" {...props}>
        <text
            transform="translate(0 34)"
            fill="#ff4d4d"
            fontSize={32}
            fontFamily="Poppins-SemiBold,Poppins"
            fontWeight={600}
        >
            <tspan x={0} y={0}>
                {"beauty"}
            </tspan>
            <tspan
                y={0}
                fill="#f1f1f1"
                fontFamily="Poppins-Regular,Poppins"
                fontWeight={400}
            >
                {"webshop"}
            </tspan>
        </text>
    </svg>
)

export default Logo