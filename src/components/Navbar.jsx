import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <header className="text-white dark:text-black bg-[#010101] dark:bg-white flex sticky top-0 h-16 items-center justify-end ">
      <div className="flex items-center px-[20px] relative w-full justify-end">
        <div className="flex items-center absolute left-0 right-0 m-auto justify-between w-[40%] p-[5px] border-[1px] border-[#ccc] rounded">
          <input
            placeholder="search"
            type="text"
            className="border-none bg-transparent outline-none w-full"
          />{" "}
          <SearchIcon />
        </div>
        <div className="">
          <button className="py-[5px] px-[15px] bg-transparent border-[1px] border-[#3ea6ff] rounded-[3px] font-medium cursor-pointer text-[#3ea6ff] flex gap-2 items-center">
            <AccountCircleIcon />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
