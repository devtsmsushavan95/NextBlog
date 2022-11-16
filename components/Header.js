import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  
  const router = useRouter();
  return (
    <>
      <header className="site-header py-5 shadow sticky top-0 z-40 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <Link href="/" className="site-header__logo inline-block">
              <img src="/images/logo.png" alt="logo" width="93" height="35" />
            </Link>

              <nav className="site-header__nav">
                <ul className="flex">
                  <li className={router.pathname == "/" ? "active mr-3 text-primary" : "mr-3"}>
                    <Link href="/" className="p-3 font-semibold hover:text-primary">Home</Link>
                  </li>
                  <li className={router.pathname == "/blog" ? "active mr-3 text-primary" : "mr-3"}>
                    <Link href="/blog" className="p-3 font-semibold hover:text-primary">Blog</Link>
                  </li>
                  <li className={router.pathname == "/contact" ? "active mr-3 text-primary" : "mr-3"}>
                    <Link href="/contact" className="p-3 font-semibold hover:text-primary">Contact</Link>
                  </li>
                </ul>
              </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
