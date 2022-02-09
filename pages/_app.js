//APP PAGE

//IMPORTING
import Layout from '../components/Layout';
import '../styles/globals.scss';

//MYAPP
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
