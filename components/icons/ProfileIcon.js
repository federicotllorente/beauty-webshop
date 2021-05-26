const ProfileIcon = props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.999 16" {...props}>
        <defs>
            <style>{".prefix__c{stroke:none}"}</style>
        </defs>
        <g strokeLinecap="round" fill="none">
            <g transform="translate(3)" stroke="#f1f1f1" strokeWidth={2}>
                <circle className="prefix__c" cx={5} cy={5} r={5} />
                <circle cx={5} cy={5} r={4} />
            </g>
            <path
                className="prefix__c"
                d="M16 16H0a8.009 8.009 0 018-8 8.009 8.009 0 018 8z"
            />
            <path
                d="M13.657 14A6.01 6.01 0 008 10a6.01 6.01 0 00-5.657 4h11.314M16 16H0c0-4.412 3.59-8 8-8s8 3.588 8 7.999z"
                fill="#f1f1f1"
            />
        </g>
    </svg>
)

export default ProfileIcon