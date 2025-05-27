import Avatars from "../components/avatars";
import Navbar from "../components/navbar";
import Reviews from "../components/reviews";
const home = () => {
  return (
    <>
      <div className="gradient-box">
        <Navbar />
        <div className="flex  gap-y-4 gap-x-36 items-center m-12 my-24 mx-[200px] ">
          <div className="">
            <h1 className="text-5xl font-medium text-white max-w-xl leading-tight">
              Learn how to design creative interfaces from scratch
            </h1>

            <p className="text-gray-400 max-w-[500px] mt-4 text-lg ">
              At Landify, we blend artistry and strategy to create designs that
              not only captivate but also elevate.
            </p>
            <div className="flex gap-4 text-white mt-8">
              <button className="font-semibold bg-[#725CF7] px-4 md:px-6 py-2 rounded-md text-sm md:text-base">
                But the book
              </button>
              <button className="font-semibold bg-[#1B1B25] px-4 py-2 md:px-6 rounded-md text-sm md:text-base">
                Paid version
              </button>
            </div>
            <Avatars />
          </div>
          <div className="bg-[#5D3AEA] w-80 p-5 rounded-lg">
            <img src="public/spirrel.png" alt="" />
            <p className="text-2xl font-medium  text-white max-w-52">
              Designing creative user interfaces <br />
              <span className="text-sm opacity-50">by Dmytri Ivanov</span>
            </p>
          </div>
        </div>
        <Reviews />
      </div>
    </>
  );
};

export default home;
