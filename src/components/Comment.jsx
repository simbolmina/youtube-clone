import fy from "../img/fy.png";

function Comment() {
  return (
    <div className="flex gap-3 mb-[20px]">
      <img
        src={fy}
        alt="fy"
        className="w-[50px] h-[50px] rounded-full mb-[20px]"
      ></img>
      <div className="flex flex-col  ">
        <div className="flex items-center gap-2">
          <h2 className="text-[13px] font-bold">User Name</h2>
          <span className="text-[#ccc] text-[12px]">3 months ago</span>
        </div>
        <p className="text-xs text-white mt-[6px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          soluta eum dolorum facilis tenetur expedita veritatis, nam, asperiores
          temporibus, quisquam voluptatum porro ipsum magnam sequi inventore
          assumenda esse dolores at.
        </p>
      </div>
    </div>
  );
}

export default Comment;
