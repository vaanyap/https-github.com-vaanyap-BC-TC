import { Button } from "@/components/ui/button";
import PurpleCoinBalance from "./PurpleCoinBalance";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onNavigate?: (path: string) => void;
  purpleCoins?: number;
}

const Header = ({ onNavigate, purpleCoins = 1000 }: HeaderProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      navigate(path);
    }
  };

  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 px-4 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={() => handleNavigation("/")}
          >
            <span>Home</span>
          </Button>
          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={() => handleNavigation("/my-cards")}
          >
            <span>My Cards</span>
          </Button>
        </div>
        <PurpleCoinBalance balance={purpleCoins} />
      </div>
    </header>
  );
};

export default Header;
