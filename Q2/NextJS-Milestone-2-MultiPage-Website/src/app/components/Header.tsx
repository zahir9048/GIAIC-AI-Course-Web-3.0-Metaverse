import Link from "next/link";

interface HeaderProps {
  font: {
    className: string;
  };
}

export default function Header({ font }: HeaderProps) {
    return (
      <>
        <header className= {`${font.className} links-parent`}>
            <ul className="links">
                <li className="link"><Link href="/">Home</Link></li>
                <li className="link"><Link href="/#works-sec">Works</Link></li>
                <li className="link"><Link href="/#recent-card">Blog</Link></li>
                <li className="link"><Link href="/contact">Contact</Link></li>
            </ul>
        </header>
      </>
    );
  }