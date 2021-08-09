import "../styles/globals.css";

import Layout from "../components/layout/Layout";

// NOTE: this component is working as a route component
// for next

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
