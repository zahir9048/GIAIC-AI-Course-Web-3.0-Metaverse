import Link from "next/link";



export default function header(){
    return (
        <header>
          <nav>
            <ul className="links">
              <li> <Link href="/">Home</Link></li>
              <li> <Link href="/category">Category</Link></li>
              <li> <Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
    );
}