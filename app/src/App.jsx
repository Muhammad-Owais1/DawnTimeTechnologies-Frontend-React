import Logo from "./imgs/longlogo.png";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col gap-10">
        <img className="w-[250px]" src={Logo} alt="" />
        <h1 className="font-bold text-[40px] text-center font-sans">
          WEBSITE COMMING SOON
        </h1>
      </div>
    </>
  );
}

export default App;
