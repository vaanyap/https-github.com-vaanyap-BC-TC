import { ShoppingCart, Gavel, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NFTCardActionsProps {
  onBuy?: () => void;
  onBid?: () => void;
  onTrade?: () => void;
  disabled?: boolean;
}

const NFTCardActions = ({
  onBuy = () => {},
  onBid = () => {},
  onTrade = () => {},
  disabled = false,
}: NFTCardActionsProps) => {
  return (
    <div className="bg-white w-[260px] h-[40px] flex items-center justify-between gap-2 p-1">
      <Button
        variant="outline"
        size="sm"
        className="flex-1 bg-white hover:bg-purple-50"
        onClick={onBuy}
        disabled={disabled}
      >
        <ShoppingCart className="h-4 w-4 mr-1" />
        Buy
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="flex-1 bg-white hover:bg-purple-50"
        onClick={onBid}
        disabled={disabled}
      >
        <Gavel className="h-4 w-4 mr-1" />
        Bid
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="flex-1 bg-white hover:bg-purple-50"
        onClick={onTrade}
        disabled={disabled}
      >
        <Repeat className="h-4 w-4 mr-1" />
        Trade
      </Button>
    </div>
  );
};

export default NFTCardActions;
