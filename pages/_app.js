import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import MainLayout from '../components/MainLayout'

function MyApp({ Component, pageProps }) {
    return <>
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    </>
}

export default MyApp
