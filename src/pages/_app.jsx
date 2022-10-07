import '../style.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorBoundary from '../components/ErrorBoundary';

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ErrorBoundary>
        <Header />
        <Component {...pageProps} />
       <Footer />
    </ErrorBoundary>
  )
}
export default App
