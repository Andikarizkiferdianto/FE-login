// eslint-disable-next-line no-unused-vars
import React from "react";
import Img from "../../assets/pngtree-cappuccino-ice-with-cup-png-image_12777363-removebg-preview (1).png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani3.png";
import StarRatings from "react-star-ratings";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Biryani",
    description:
      "Nasi biryani adalah makanan India dari nasi, dan rempah pilihan.",
  },
  {
    id: 2,
    img: Img3,
    name: "Chiken kari",
    description:
      "Ayam kari adalah makanan khas India yang pedas dan gurih.",
  },
  {
    id: 3,
    img: Img,
    name: "Cold Cofee",
    description:
      "Kopi dingin adalah minuman segar dari kopi dan susu yang diseduh air dingin.",
  },
];
const Services = () => {
  return (
    <>
      <span id="menu"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Menu
            </p>
            <h1 className="text-3xl font-bold">Menu</h1>
            <p className="text-xs text-gray-400">
            Restoran ini memiliki tiga menu andalan yaitu: Biryani, Chiken Kari, dan Cold Coffee.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              // eslint-disable-next-line react/jsx-key
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    <StarRatings
                      rating={5}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      // starSelectingHoverColor
                      starDimension="15px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;