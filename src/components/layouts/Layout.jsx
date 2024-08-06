
const Layout = ({ children }) => {
  return (
    <div className="m-5 max-w-[900px] mx-auto border-2 border-black p-5">
      <div className=" w-full flex  items-center flex-col ">
        <h1 className="my-6">Hurry up, LING seed round will end in:</h1>

        {/* times */}
        <div className="times my-5 w-full border-2 border-black p-5  grid grid-cols-4">
          {/* day */}
          <div className="day relative flex flex-col items-center justify-center ">
            <h2>10</h2>
            <p className="text-sm mt-4">DAY</p>
            <div className="absolute right-0 h-full flex items-start">
              <h1>:</h1>
            </div>
          </div>
          {/* hours */}
          <div className="day relative flex flex-col items-center justify-center ">
            <h2>02</h2>
            <p className="text-sm mt-4">HRS</p>
            <div className="absolute right-0 h-full flex items-start">
              <h1>:</h1>
            </div>
          </div>

          {/* mins */}
          <div className="day relative flex flex-col items-center justify-center ">
            <h2>23</h2>
            <p className="text-sm mt-4">MINN</p>
            <div className="absolute right-0 h-full flex items-start">
              <h1>:</h1>
            </div>
          </div>

          {/* seconds */}
          <div className="day relative flex flex-col items-center justify-center ">
            <h2>25</h2>
            <p className="text-sm mt-4">SEC</p>
          </div>
        </div>

        {/* texts */}
        <p className="text-xl">Until Ling Claim and lanch 🚀</p>
        <p className="text-xl mt-3">☑ Over $3.5M raised in advisor round.</p>

        {/* lines with center text */}
        <div className="my-5 w-full flex items-center justify-center">
          <div className="w-[44%] h-0.5 bg-black"></div>
          <p className="mx-10 text-xl">1 LING = $0.014</p>
          <div className="w-[44%] h-0.5 bg-black"></div>
        </div>

       
      </div>

      
      {/* children */}
      <div className=""> {children}</div>
    </div>
  );
};

export default Layout;
