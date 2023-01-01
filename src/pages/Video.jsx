import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import fy from "../img/fy.png";
import Comments from "../components/Comments";
import CardSmall from "../components/CardSmall";

function Video() {
  return (
    <div className="flex gap-[24px] p-4">
      <div className="w-9/12">
        <iframe
          width="100%"
          height="540"
          src="https://www.youtube.com/embed/mJhHaGha9vQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="font-medium text-[18px] mt-[20px] mb-[10px]">
              Test Video
            </h1>
            <p className="text-[#ccc] dark:text-[#aaa]">
              56.947 views June 30 2022 React.js Real-World Projects
            </p>
          </div>
          <div className="flex gap-[20px] ">
            <button className="btn">
              <ThumbUpOffAltIcon /> 123
            </button>
            <button className="btn">
              <ThumbDownOffAltIcon />
              Dislike
            </button>
            <button className="btn">
              <ReplyIcon /> Share
            </button>
            <button className="btn">
              <SaveAltIcon /> Save
            </button>
          </div>
        </div>
        <div className="border-[0.5px] border-[#888] my-[15px]" />
        <div className="flex justify-between">
          <div className="grid grid-rows-2 grid-cols-1">
            <div className="flex gap-2 items-center ">
              <img
                src={fy}
                alt="fy"
                className="w-[50px] h-[50px] rounded-full"
              />
              <div>
                <h2 className="font-medium">Filozofun Yolu Podcast</h2>
                <p className="text-[#ccc] text-sm mb-[20px]">
                  {" "}
                  150K subscribers
                </p>
              </div>
            </div>
            <p className="text-[#ccc] text-xs ml-[60px] text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, deserunt doloribus autem ut at soluta minus consectetur
              adipisci? Iste odio et aliquam inventore illum fuga saepe
              pariatur, explicabo nulla accusamus.
            </p>
          </div>
          <button className="uppercase font-medium bg-red-600 border-[3px] border-none rounded h-min py-[10px] px-[20px] cursor-pointer">
            subscribe
          </button>
        </div>
        <div className="border-[0.5px] border-[#888] my-[15px]" />
        <Comments />
      </div>
      <div className="w-3/12">
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
      </div>
    </div>
  );
}

export default Video;
