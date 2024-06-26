import Image from "next/image";
import Characters from "./components/Characters";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-[#ffffff]">
       <div className="flex items-center justify-center">
        <Image src='/logo.png' width={500} height={500} alt="Rick and morty logo"/>
            </div>
      <div className="flex mt-8 flex-col items-center">
        <Image src='/chars.jpg'  width={500} height={100} alt="character page" className="rounded-3xl w-1/2 animate-pulse m-auto " />
      </div>
      <div className="flex flex-col ">
        <h1 className="font-semibold text-4xl text-center py-10 text-[#01AFCA]">Browse Characters</h1>
        <Characters />
      </div>
    </main>
  );
}
