import { FaCode } from "react-icons/fa";

export default function Home() {
  return (
    <main className="h-screen flex  justify-evenly items-center">
     <section className="flex flex-col gap-8">
     <div className="flex flex-col gap-2">
     <h3 className="text-white">Hello World, I am</h3>
      <h1 className="text-5xl font-bold text-white">Nagendra Lamoria</h1>
      <h2 className="text-3xl flex gap-2 items-center text-blue-300"><FaCode />Front-end developer</h2>
     </div>
     <div className="flex flex-col gap-4">
     <p className="text-comment-text">// you can also see my github</p>
      <p>const github = "https//github.com"</p>
     </div>
     </section>
     <section className="flex flex-col gap-8">
     <div className="flex flex-col gap-2">
     <h3 className="text-white">Hello World, I am</h3>
      <h1 className="text-5xl font-bold text-white">Nagendra Lamoria</h1>
      <h2 className="text-3xl flex gap-2 items-center text-blue-300"><FaCode />Front-end developer</h2>
     </div>
     <div className="flex flex-col gap-4">
     <p className="text-comment-text">// you can also see my github</p>
      <p>const github = "https//github.com"</p>
     </div>
     </section>
    </main>
  );
}
