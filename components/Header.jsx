import { Tabs } from "@/config";
import TabItem from "./TabItem";

const Header = () => {
  return (
    <div className="fixed top-0 z-10 flex justify-center items-center w-full pt-8 px-8">
      <div className="bg-gray-950/10 w-full max-w-md 2xl:max-w-lg px-4 md:px-5 py-3 rounded-xl border-zinc-700 border border-solid backdrop-blur-md shadow-md grid grid-cols-4 font-medium text-center text-zinc-400 text-xs md:text-base 2xl:text-lg">
        {Tabs && Tabs.map((tab, i) => <TabItem key={i} tab={tab} />)}
      </div>
    </div>
  );
};

export default Header;
