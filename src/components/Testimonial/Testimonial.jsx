import Slider from "react-slick";  // Pastikan mengimpor Slider dari react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Makanan di restoran ini benar-benar otentik! Rasa kari ayamnya sangat lezat dan bumbunya pas di lidah. Saya pasti akan kembali lagi!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "John Doe",
    text: "Restoran ini adalah surga bagi pecinta makanan India. Setiap hidangan yang saya coba selalu memuaskan. Sangat direkomendasikan!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Smith",
    text: "Suasana restoran yang nyaman dan makanan yang lezat membuat pengalaman makan saya sangat menyenangkan. Terima kasih untuk pelayanan yang luar biasa!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
            Berikut adalah beberapa pengalaman dan pendapat dari pelanggan kami yang telah merasakan manfaat dari produk dan layanan kami.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;