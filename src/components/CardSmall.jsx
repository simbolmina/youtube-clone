import thumbnail from "../img/thumbnail.png";
import fy from "../img/fy.png";
import { Link } from "react-router-dom";

function CardSmall() {
  return (
    <Link to="/video/test" className="no-underline">
      <div className="flex justify-between w-full cursor-pointer mb-[10px] gap-[10px]">
        <div className=" rounded-2 w-1/2">
          <img src={thumbnail} alt="" className="w-full h-[100px] rounded-2" />
        </div>
        <div className="">
          <h1 className="text-[14px] font-medium">Title</h1>
          <h2 className="text-[12px] text-white dark:text-black mt-[6px] ">
            Channel Name
          </h2>
          <p className="text-[10px] ext-[#ccc] dark:text-black">
            660,223 views - 1 day ago
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CardSmall;
