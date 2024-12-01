import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gavel } from "lucide-react";

interface BidModalProps {
  open?: boolean;
  onClose?: () => void;
  nft?: {
    id: string;
    name: string;
    image: string;
    price: number;
    collection: string;
  };
  onPlaceBid?: (amount: number) => void;
}

const defaultNFT = {
  id: "1",
  name: "Purple Punk #1",
  image: "https://dummyimage.com/400x400/6b46c1/ffffff&text=NFT",
  price: 1000,
  collection: "Purple Punks",
};

const BidModal = ({
  open = true,
  onClose = () => {},
  nft = defaultNFT,
  onPlaceBid = () => {},
}: BidModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white w-[400px] h-[300px] p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{nft.name}</h3>
              <p className="text-sm text-gray-500">{nft.collection}</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <Label htmlFor="bidAmount">Your Bid</Label>
              <span className="text-sm text-gray-500">
                Current Price: {nft.price.toLocaleString()} PC
              </span>
            </div>
            <Input
              id="bidAmount"
              type="number"
              placeholder="Enter bid amount in Purple Coins"
              className="w-full"
              min={nft.price}
              defaultValue={nft.price}
            />
            <p className="text-xs text-gray-500 mt-1">
              Minimum bid: {nft.price.toLocaleString()} PC
            </p>
          </div>

          <div className="flex gap-3 mt-auto">
            <Button variant="outline" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button
              className="flex-1 bg-purple-600 hover:bg-purple-700"
              onClick={() => onPlaceBid(nft.price)}
            >
              <Gavel className="h-4 w-4 mr-2" />
              Place Bid
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BidModal;
