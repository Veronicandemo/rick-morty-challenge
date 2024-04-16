import Image from "next/image";
import Search from "./components/search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 bg-white">
      <div className="flex justify-between">
        <h1>Characters</h1>
        <Search />
      </div>
      <div>
           <Image src='/characters.jpeg' alt='charaters page' width={200} height={100}/>
                
            </div>
    </main>
  );
}
