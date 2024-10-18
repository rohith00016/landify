import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "Landify understands content creation. A partner that crafts engaging copy, making my content strategy smarter.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "Incorporating Landify Framer into our web development process has streamlined collaboration.",
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "Landify unleashes creativity on a new level. Dynamic content generation in Figma? Yes, please!",
    rating: 3,
  },
  {
    id: 4,
    name: "Robert Brown",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Landify understands content creation. A partner that crafts engaging copy, making my content strategy smarter.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lucy Green",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    review:
      "Incorporating Landify Framer into our web development process has streamlined collaboration.",
    rating: 4,
  },
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  speed: 1000,
  cssEase: "linear",
};

const ReviewCarousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-[200px] py-24">
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col justify-center items-center p-4 w-full max-w-sm text-white  rounded-lg shadow-md"
          >
            <div className="flex my-4 space-x-1">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 w-4 h-4" />
              ))}
              {[...Array(5 - review.rating)].map((_, i) => (
                <FaStar key={i} className="text-gray-500 w-4 h-4" />
              ))}
            </div>
            <p className="text-lg text-gray-400">"{review.review}"</p>
            <div className="flex items-center mt-4 space-x-2">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-8 h-8 rounded-full"
              />
              <p className="text-md font-medium">{review.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
