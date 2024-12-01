import Header from "./marketplace/Header";
import NFTGrid from "./marketplace/NFTGrid";

function Home() {
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        <NFTGrid />
      </div>
    </div>
  );
}

export default Home;
