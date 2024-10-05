import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main-parent">
      <h1 style={{ color: "green", paddingTop: "20px" }}>
        Welcome to the Home Page
      </h1>

      <div className="links-parent">
        <h2>Navigation By Anchor Tag</h2>
        <div className="links">
          <a href="/about">
            <h3>About Page</h3>
          </a>
          <a href="/contact">
            <h3>Contact Page</h3>
          </a>
          <a href="/cat">
            <h3>Category Page</h3>
          </a>
        </div>
      </div>

      <div className="links-parent">
        <h2>Navigation By Link Tag</h2>
        <div className="links">
          <Link href="/about">
            <h3>About Page</h3>
          </Link>
          <Link href="/contact">
            <h3>Contact Page</h3>
          </Link>
          <Link href="/cat">
            <h3>Category Page</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
