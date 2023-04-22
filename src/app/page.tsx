import data from "../app/assets/data.json";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar user={data}/>
        <Main user={data} />
      </div>
        <Footer playing={data.playing} />
    </div>
  );
}
