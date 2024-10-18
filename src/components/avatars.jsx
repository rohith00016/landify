import { FaStar } from "react-icons/fa";

const avatars = () => {
  return (
    <div className="flex items-center gap-4 mt-14">
      <div className="flex -space-x-4 ">
        <img
          className="w-10 h-10 rounded-full "
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Avatar 1"
        />
        <img
          className="w-10 h-10 rounded-full "
          src="https://randomuser.me/api/portraits/women/2.jpg"
          alt="Avatar 2"
        />
        <img
          className="w-10 h-10 rounded-full"
          src="https://randomuser.me/api/portraits/men/3.jpg"
          alt="Avatar 3"
        />
        <img
          className="w-10 h-10 rounded-full "
          src="https://randomuser.me/api/portraits/women/4.jpg"
          alt="Avatar 4"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 text-white ">
        <p className="text-sm font-medium">Trusted by 1M+ customers</p>
        <div className="flex space-x-1">
          {[...Array(5)].map((star, index) => (
            <FaStar
              key={index}
              className="w-4 h-4 
             text-yellow-500"
            />
          ))}
          <span className="text-white text-sm">
            4.2/5 <span className="text-gray-400">(45k reviews)</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default avatars;
