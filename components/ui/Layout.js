import Head from 'next/head';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{ props.title }</title>
                <link rel="icon" href="/favicon.ico" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7651353284098646"
                crossorigin="anonymous"></script>
            </Head>
            
            <div class="relative bg-white overflow-hidden">
                {props.children}
            </div>
            
            <footer className="container mx-auto p-4 flex justify-center">
                {/* <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel" className="w-24 pt-1" />
                </a> */}
            </footer>
        </div>
    )
}

export default Layout;