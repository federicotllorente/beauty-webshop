import Head from 'next/head'

const CustomHead = ({ children }) => (
    <Head>
        {children}
        <meta name="description" content="Beauty Webshop – Atida's Technical Test Project by Federico Tejedor Llorente" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
)

export default CustomHead