import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <header className="p-8 flex justify-between items-center">
        <div className="cursor-pointer">
          <h1 className="text-4xl font-semibold">Focus</h1>
          <span className="text-orange">Urban Photographer</span>
        </div>
        <div>
          <Button />
        </div>
      </header>

      <section>
        <div className="home-grid grid grid-cols-2 w-full">

        <div className="flex items-center pt-20 flex-col">
          <h1 className="text-orange text-5xl p-8 font-medium">Captures timeless moments with a passion for storytelling and an eye for detail, turning each image into a lasting memory.</h1>
          <Link href="/work" className="bg-black text-white p-4 rounded border border-black text-xl transition-colors hover:bg-transparent hover:text-black">See my work</Link>

          <p className="mt-4 text-xl">Or</p>
          
          <div className="inline-flex mt-7">  
              <Image src="/instagram.svg" alt="Instagram"
              width={30} height={30} className="mr-8 cursor-pointer"/>
              <Image src="/twitter.svg" alt="Twitter"
              width={30} height={30} className="mr-8 cursor-pointer"/>
              <Image src="/unsplash.svg" alt="Unsplash"
              width={30} height={30} className="cursor-pointer"/>
          </div>
        </div>

        <div className="img-container"></div>
        
        </div>
      </section>
    </main>
  );
}
