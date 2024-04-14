import Image from "next/image";
import Navbar from "./navbar";


export default function Home() {
  return (
    <main>
      {/* NAVBAR SECTION STARTS HERE */}
      <Navbar></Navbar>
      {/* NAVBAR SECTION ENDS HERE */}

      {/* ============================================================= */}
      {/* HERO SECTION STARTS HERE */}
      <div className="flex flex-col items-center justify-start pt-28 h-[85vh] bg-[#2b2d42ff] text-white  ">
        <h1 className="font-semibold text-2xl mb-4  border-b-4">
          Web Developer & Programmer
        </h1>
        <h1 className="font-bold text-6xl ">
          Howdy, this is Yasshoozer Joshua!
        </h1>
        <p className="w-3/4 text-center py-6 text-xl">
          Welcome to my portfolio of captivating digital experiences. <br />{" "}
          Explore my work and let's create something extraordinary together.
        </p>
        <div className="">
          <button className="btn text-white px-6 py-2 rounded-md border-[#ef233cff] bg-[#ef233cff] font-medium transition ease-in-out duration-300 delay-75 hover:bg-[#fca311ff] hover:scale-105 hover:text-[#2b2d42ff] mx-4">
            Explore Projects
          </button>
        </div>

        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </div>
      {/* HERO SECTION ENDS HERE */}

      {/* ============================================================= */}
      {/* ABOUT ME SECTION STARTS HERE */}
      <div className="flex justify-center items-center pt-14 pb-14 bg-[#e5e5e5ff] h-[70vh] flex-col">
        <h1 className="font-bold text-5xl ">About Me</h1>
        <p className="w-[70%] text-center py-6 text-xl ">
          Dedicated, skilled, and results-driven Web Developer/Programmer with
          almost three years of practicing with hands-on experience in creating
          dynamic and responsive websites. <br /> Skillful in a variety of
          programming languages and frameworks, including <br />
          <strong className="text-[#2b2d42ff] leading-9 text-xl">
            HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and TypeScript.
          </strong>
        </p>
        <div className="columns-3 text-center gap-12 mt-4">
          <h1 className="text-6xl font-bold text-[#ef233cff]">10</h1>
          <h3 className="text-3xl font-bold">Projects Done</h3>
          <h1 className="text-6xl font-bold text-[#ef233cff]">2+</h1>
          <h3 className="text-3xl font-bold">Years of Experience</h3>
          <h1 className="text-6xl font-bold text-[#ef233cff]">10+</h1>
          <h3 className="text-3xl font-bold">Clients Served</h3>
        </div>
      </div>
      {/* ABOUT ME SECTION ENDS HERE */}

      {/* ============================================================= */}
      {/* SERVICES SECTION STARTS HERE */}
      <div className="flex justify-center items-center h-[80vh] bg-[#2b2d42ff] text-white flex-col pb-16">
        <div className="flex justify-center items-center flex-col mt-20">
          <h1 className="text-5xl font-bold mb-5">Services</h1>
          <p className="w-[60%] text-center text-lg ">
            Explore my design services, from user interface and experience to
            prototyping and testing. Let's craft exceptional digital experiences
            together.
          </p>
        </div>
        <div className="columns-4 pt-10 px-9">
          <div className="text-center flex items-center flex-col p-4">
            <Image
              src={"./Design.svg"}
              width={40}
              height={40}
              alt={"design"}
            ></Image>
            <h2 className="text-xl font-bold p-4">Design</h2>
            <p>
              I specialize in web development and design, creating visually
              user-friendly digital experiences.
            </p>
          </div>
          <div className="text-center flex items-center flex-col p-4">
            <Image
              src={"./Brand.svg"}
              width={40}
              height={40}
              alt={"design"}
            ></Image>
            <h2 className="text-xl font-bold p-4">Branding</h2>
            <p>
              I specialize in web development and design, creating visually
              user-friendly digital experiences.
            </p>
          </div>
          <div className="text-center flex items-center flex-col p-4">
            <Image
              src={"./UX-search.svg"}
              width={40}
              height={40}
              alt={"design"}
            ></Image>
            <h2 className="text-xl font-bold p-4">UX Research</h2>
            <p>
              I specialize in web development and design, creating visually
              user-friendly digital experiences.
            </p>
          </div>
          <div className="text-center flex items-center flex-col p-4">
            <Image
              src={"./Testing.svg"}
              width={40}
              height={40}
              alt={"design"}
            ></Image>
            <h2 className="text-xl font-bold p-4">Usablity Testing</h2>
            <p>
              I specialize in web development and design, creating visually
              user-friendly digital experiences.
            </p>
          </div>
        </div>
      </div>
      {/* SERVICES SECTION ENDS HERE */}

      {/* ============================================================= */}
      {/* MY PORTFOLIO SECTION STARTS HERE */}
      <div className="flex justify-center items-center pb-16 flex-col">
        <div className="flex justify-center items-center flex-col mt-20">
          <h1 className="text-5xl font-bold mb-5">My Portfolio</h1>
          <p className="w-[60%] text-center text-lg pb-4 ">
            Explore my design services, from user interface and experience to
            prototyping and testing. Let's craft exceptional digital experiences
            together.
          </p>
        </div>
        <div className="flex justify-center items-center columns-3 ">
          <div className="flex justify-center items-center flex-col ">
            <Image
              className="rounded-md shadow-md "
              src={"/1.jpg"}
              width={250}
              height={250}
              alt={"design"}
            ></Image>
            <div className="pt-5 w-[30vw] text-center">
              <h2 className="font-bold">Project-1</h2>
              <a
                href="#"
                className="transition ease-in-out duration-300 hover:text-[#ef233cff] hover:border-b-[#ef233cff] "
              >
                Easy Bank Website Redesign
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col py-6">
            <Image
              className="rounded-md shadow-md "
              src={"/2.jpg"}
              width={350}
              height={350}
              alt={"design"}
            ></Image>
            <div className="pt-5 w-[30vw] text-center">
              <h2 className="font-bold">Project-2</h2>
              <a
                href="#"
                className="transition ease-in-out duration-300 hover:text-[#ef233cff] hover:border-b-[#ef233cff] "
              >
                Easy Bank Website Redesign
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col ">
            <Image
              className="rounded-md shadow-md "
              src={"/3.jpg"}
              width={300}
              height={300}
              alt={"design"}
            ></Image>
            <div className="pt-5 w-[30vw] text-center">
              <h2 className="font-bold">Project-3</h2>
              <a
                href="#"
                className="transition ease-in-out duration-300 hover:text-[#ef233cff] hover:border-b-[#ef233cff] "
              >
                Easy Bank Website Redesign
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center columns-3 ">
          <div className="flex justify-center items-center flex-col ">
            <Image
              className="rounded-md shadow-md"
              src={"/4.jpg"}
              width={240}
              height={250}
              alt={"design"}
            ></Image>
            <div className="pt-5 w-[30vw] text-center">
              <h2 className="font-bold">Project-4</h2>
              <a
                href="#"
                className="transition ease-in-out duration-300 hover:text-[#ef233cff] hover:border-b-[#ef233cff] "
              >
                Easy Bank Website Redesign
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col py-6">
            <Image
              className="rounded-md shadow-md "
              src={"/5.jpg"}
              width={330}
              height={300}
              alt={"design"}
            ></Image>
            <div className="pt-5 w-[30vw] text-center">
              <h2 className="font-bold">Project-5</h2>
              <a
                href="#"
                className="transition ease-in-out duration-300 hover:text-[#ef233cff] hover:border-b-[#ef233cff] "
              >
                Easy Bank Website Redesign
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col ">
            <Image
              className="rounded-md shadow-md "
              src={"/6.jpg"}
              width={300}
              height={300}
              alt={"design"}
            ></Image>
            <div className="pt-5 w-[30vw] text-center">
              <h2 className="font-bold">Project-6</h2>
              <a
                href="#"
                className="transition ease-in-out duration-300 hover:text-[#ef233cff] hover:border-b-[#ef233cff] "
              >
                Easy Bank Website Redesign
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* MY PORTFOLIO SECTION ENDS HERE */}

      {/* ============================================================= */}
      {/* CONTACT ME SECTION STARS HERE */}

      {/* CONTACT ME SECTION ENDS HERE */}
    </main>
  );
}
