import '../../styles/globals.css';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import { wrapper } from '../redux/store';
import Session from '../components/client/userSession';

function MyApp({ Component, pageProps }) {
  return (
    <Session comp={Component}>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </Session>
  );
}
export default wrapper.withRedux(MyApp);
