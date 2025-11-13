import Image from "next/image";

export default function Home() {
  return (
    <header className="fixed pt-3 pb-3 w-full z-50 top-0 left-0">
      <div className="container flex m-0a justify-center">
        <div id="image">
          <img src="globe.svg" alt="Logo" className="h-20 rounded-4xl"/>
        </div>
        <div>
          <nav className="m-auto">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Porto</a>
          </nav>
        </div>
        <div id="sosmed"></div>
      </div>
    </header>
  );
}
