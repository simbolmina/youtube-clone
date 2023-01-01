import Comment from "./Comment";
import fy from "../img/fy.png";

function Comments() {
  return (
    <div>
      <div className="flex gap-3 items-center mb-[20px]">
        <img src={fy} alt="fy" className="w-[50px] h-[50px] rounded-full" />
        <input
          type="text"
          placeholder="comment here"
          className="w-full bg-transparent  outline-none border-b-[1px] border-[#ccc] p-2 text-sm min-h-[14px] text-[#ccc] h-full"
        />
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default Comments;
