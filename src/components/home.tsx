import { useAuth0 } from "@auth0/auth0-react";
import Header from "./marketplace/Header";
import NFTGrid from "./marketplace/NFTGrid";

function Home() {
  const { user } = useAuth0();

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
