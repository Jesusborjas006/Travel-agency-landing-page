import icon1 from "../travel-images/icon1.svg";
import icon2 from "../travel-images/icon2.svg";
import icon3 from "../travel-images/icon3.svg";
import { PiLeafFill } from "react-icons/pi";
import { BsMap } from "react-icons/bs";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { GoHeart } from "react-icons/go";

const Book = () => {
  return (
    <section className="max-w-[1640px] mx-auto p-10 mt-10">
      <div className="grid md:grid-cols-2 justify-items-center gap-8">
        <div>
          <h4 className="text-gray-600 text-sm font-semibold lg:text-base mb-5">
            Easy and Fast
          </h4>
          <h2 className="text-gray-800 font-serif text-3xl font-bold lg:text-4xl">
            Book Your Next Trip
          </h2>
          <h2 className="text-gray-800 font-serif text-3xl font-bold lg:text-4xl mb-5">
            In 3 Easy Steps
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex">
              <img className="mr-5" src={icon1} alt="icon" />
              <div>
                <h4 className="text-gray-600 text-sm font-bold lg:text-base">
                  Choose Destination
                </h4>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="flex">
              <img className="mr-5" src={icon2} alt="icon" />
              <div>
                <h4 className="text-gray-600 text-sm font-bold lg:text-base">
                  Make Payment
                </h4>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="flex">
              <img className="mr-5" src={icon3} alt="icon" />
              <div>
                <h4 className="text-gray-600 text-sm font-bold lg:text-base">
                  Reach Airport on Selected Date
                </h4>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-3xl p-5 max-w-[370px] text-gray-600  max-h-[430px]">
          <img
            className="rounded-3xl"
            src="https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Greece"
          />
          <h5 className="font-semibold my-4 text-black">Trip To Greece</h5>
          <p className="">14-29 June</p>
          <div className="flex space-x-3 my-5">
            <div className="bg-gray-100 rounded-full p-2">
              <PiLeafFill size={20} />
            </div>
            <div className="bg-gray-100 rounded-full p-2">
              <BsMap size={20} />
            </div>
            <div className="bg-gray-100 rounded-full p-2">
              <IoPaperPlaneSharp
                size={20}
                className="bg-gray-100 rounded-full"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p>24 people going</p>
            <GoHeart size={22} className="text-blue-800" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
