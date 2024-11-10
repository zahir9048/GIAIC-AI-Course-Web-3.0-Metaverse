import Link from "next/link";

export default function Nav() {
    return (
        <>
            <div className="Left-side">
                
                <Link href="/"><img  src="/zahir.jpg" alt="not found"/></Link>
                <ul>
                    <li><Link href="/SidePages/About">About</Link></li><hr/>
                    <li><Link href="/SidePages/Experience">Experience</Link></li><hr/>
                    <li><Link href="/SidePages/Skills">Skills</Link></li><hr/>
                    <li><Link href="/SidePages/Projects">Projects</Link></li><hr/>
                    <li><Link href="/SidePages/Education">Education</Link></li><hr/>
                    <li><Link href="/SidePages/Certificate">Certificates</Link></li><hr/>
                    <li><Link href="/SidePages/Interests">Interest</Link></li><hr />
                    <li><Link href="/SidePages/Resume">Resume</Link></li>
                </ul>
            </div>
        </>
    );
}
