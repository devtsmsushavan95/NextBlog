import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({children}) => {
    return (
        <>
        <Header />
        <main className="site-content">
            {children}
        </main>
        <Footer />
        </>
    )
}
export default Layout;