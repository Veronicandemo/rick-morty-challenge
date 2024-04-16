import Search from "./components/search";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import NavBar from "./components/NavBar";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-[#ffffff]">
      <div className="flex  p-16 justify-between">
        <GiPlagueDoctorProfile fontSize='5em' color="#01AFCA"/>
        <Search />
      </div>
      <div className="flex -mt-10 flex-col items-center">
        {/* <Image src='/face.png' width={200 } height={200} alt="char face" className=""/> */}
        <Image src='/chars.jpg'  width={500} height={100} alt="character page" className="rounded-3xl w-1/2" />
      </div>
      <div>
        <h1 className="font-semibold text-4xl text-[#01AFCA]">Characters</h1>
        <p className="text-xl text-orange-700 mt-4">Main Characters</p>
      </div>
      <div>
        <NavBar />
            </div>
    </main>
  );
}
