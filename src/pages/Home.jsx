import Layout from "../components/layouts/Layout";
import sol from "../assets/sol.png";
import usdc from "../assets/usdc.png";
import eth from "../assets/eth.png";
import btc from "../assets/btc.png";

const Home = () => {
  return (
    <Layout>
      {/* buttons */}
      <div className="flex items-center my-6 w-full justify-between">
        <button className="px-10 py-2 border-2 flex items-center justify-center gap-3 border-black">
          <img src={sol} alt="sol" className="w-4 h-4" />
          SOL
        </button>
        <button className="px-10 py-2 border-2 flex items-center justify-center gap-3 border-black">
          <img src={usdc} alt="usdc" className="w-4 h-4" />
          USDC
        </button>
        <button className="px-10 py-2 border-2 flex items-center justify-center gap-3 border-black">
          <img src={eth} alt="eth" className="w-4 h-4" />
          ETH
        </button>
        <button className="px-10 py-2 border-2 flex items-center justify-center gap-3 border-black">
          <img src={btc} alt="sol" className="w-4 h-4" />
          BTC
        </button>
      </div>

      {/* inputs */}
      <div className="flex items-center justify-between w-full mt-8">
        <div className="w-[44%]">
          <input
            type="number"
            placeholder="0"
            className="w-full border-2 border-black px-2 py-1"
            value={0}
          />
        </div>
        <div className="w-[44%]">
          <input
            type="number"
            placeholder="0"
            className="w-full border-2 border-black px-2 py-1"
            value={0}
          />
        </div>
      </div>

      {/* agree checkbox */}
      <div className="flex items-center mt-5">
        <input type="checkbox" className="w-3 h-3" />
        <p className="ml-3">I agree to the terms and conditions</p>
      </div>

      {/* buy now button */}
      <button className="w-full py-2 mt-5  border-2 border-gray-400  text-gray-400">
        BUY NOW
      </button>
    </Layout>
  );
};

export default Home;
