import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>About Page</h1>

      <div style={{ backgroundImage: "url('/image.jpg')", width: "100%", height: "400px", backgroundSize: "cover", backgroundPosition: "center", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "40px", color: "#db6746" }}>
        <h2>About Us</h2>
      </div>

      <img src="/image2.png" width="400px" height="400px" alt="" />

      <Image
        src="/image.jpg"
        width={300}
        height={300}
        alt="scenery"
      />
    </div>
  );
}
