import Image from "next/image";
import Card from "@/app/components/recent-post-card";

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">
                Hi, I am John, Creative Technologist
              </h1>
              <p className="main-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="resume-btn">Download Resume</button>
            </div>
            <div>
              <div>
                <Image
                  src="/person.png"
                  width={300}
                  height={300}
                  alt="person"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-post">
        <div className="container">

          <div className="main">
                  <div className="heading">
                    <h3>Recent Post</h3>
                    <button className="view-all-btn">View All</button>
                  </div>

                  <div className="card-parent">
                        <Card />
                        <Card />
                  </div>
          </div>


          
        </div>
      </div>
    </>
  );
}
