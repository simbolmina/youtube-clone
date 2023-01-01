import thumbnail from "../img/thumbnail.png";
import fy from "../img/fy.png";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Link to="/video/test" className="no-underline">
      <div className="flex justify-between flex-wrap w-[360px] mb-[45px]  cursor-pointer flex-col">
        <img src={thumbnail} alt="" className="w-full h-[202px] bg-[#999]" />
        <div className="flex gap-[12px] mt-[16px] ">
          <img
            src={fy}
            alt=""
            className="w-[36px] h-[36px] rounded-[50%] bg-[#999]"
          />
          <div>
            <h1 className="text-[16px] font-medium">Title</h1>
            <h2 className="text-[14px] text-white dark:text-black mt-[6px] ">
              Channel Name
            </h2>
            <p className="text-[14px] ext-[#ccc] dark:text-black">
              660,223 views - 1 day ago
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
