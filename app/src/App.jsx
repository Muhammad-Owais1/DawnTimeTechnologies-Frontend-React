import Logo from "./imgs/longlogo.png";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col gap-10">
        <div className="bg-[#ffffff4e] w-full flex items-center justify-center py-4 ">
          <img className="w-[250px]" src={Logo} alt="" />
        </div>
        <h1 className="font-bold text-[40px] text-center font-sans text-white">
          WEBSITE COMING SOON
        </h1>
      </div>
    </>
  );
}

export default App;
