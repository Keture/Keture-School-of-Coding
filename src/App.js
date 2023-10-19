import mith from "./assets/images/mith.png";
function App() {
  return (
    <>
      <div className="container max-w-3xl mx-auto mt-20 text-slate-700">
        <div className=" text-center">
          <div className=" text-xl font-black tracking-wide">Keture</div>
          <div className="tracking-[.15em]">School of Coding</div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-slate-700 mx-4"></hr>
        <div className="md:grid grid-cols-4 mt-10">
          <div className=" flex align-middle justify-center">
            <span className="material-symbols-sharp text-9xl">terminal</span>
          </div>
          <div className="col-span-3 px-4">
            <div className="text-4xl font-black">Programming Basics</div>
            <div className=" mt-2 text-sm text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3 mt-10 gap-4">
          <div className="bg-lime-200">
            <div>
              <span className=" font-semibold">Level</span> : Beginner
            </div>
            <div>
              <span className=" font-semibold">Level</span> : Beginner
            </div>
            <div>
              <span className=" font-semibold">Level</span> : Beginner
            </div>
            <div>
              <span className=" font-semibold">Level</span> : Beginner
            </div>
          </div>
          <div className="col-span-2 md:grid grid-cols-4">
            <div className="col-span-3">
              <div className="text-xl">Meet the Instructor</div>
              <div className="text-xl font-black">
                Rajamiththiran Varatharajan
              </div>
              <div className="text-md">
                BSc (Honours) in Software Engineering
              </div>
              <div className="text-sm">Universtiy of Kelaniya Srilanka</div>
              <div className="text-md">rajamithiran.keture.com@gmai.com</div>
            </div>
            <div>
              <img
                className="block w-auto"
                src={mith}
                alt="Workflow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
