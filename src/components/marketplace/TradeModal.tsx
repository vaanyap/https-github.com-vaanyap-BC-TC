import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Repeat, X } from "lucide-react";

interface NFT {
  id: string;
  name: string;
  image: string;
  price: number;
  collection: string;
}

interface TradeModalProps {
  open?: boolean;
  onClose?: () => void;
  selectedNFT?: NFT;
  userNFTs?: NFT[];
  onTrade?: (selectedNFT: NFT, tradedNFT: NFT) => void;
}

const defaultNFT: NFT = {
  id: "1",
  name: "Purple Punk #1",
  image: "https://dummyimage.com/400x400/6b46c1/ffffff&text=NFT",
  price: 1000,
  collection: "Purple Punks",
};

const defaultUserNFTs: NFT[] = [
  {
    id: "2",
    name: "Purple Punk #2",
    image: "https://dummyimage.com/400x400/6b46c1/ffffff&text=NFT+2",
    price: 1200,
    collection: "Purple Punks",
  },
  {
    id: "3",
    name: "Purple Punk #3",
    image: "https://dummyimage.com/400x400/6b46c1/ffffff&text=NFT+3",
    price: 800,
    collection: "Purple Punks",
  },
];

const TradeModal = ({
  open = true,
  onClose = () => {},
  selectedNFT = defaultNFT,
  userNFTs = defaultUserNFTs,
  onTrade = () => {},
}: TradeModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white w-[800px] h-[600px] p-0">
        <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Trade NFT</h2>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-6 grid grid-cols-2 gap-8 h-[calc(100%-73px)]">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Selected NFT</h3>
            <Card className="p-4 bg-white">
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src={selectedNFT.image}
                  alt={selectedNFT.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{selectedNFT.name}</h4>
                <p className="text-sm text-gray-500">
                  {selectedNFT.collection}
                </p>
                <p className="font-bold text-purple-600 mt-2">
                  {selectedNFT.price.toLocaleString()} PC
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Your NFTs</h3>
            <ScrollArea className="h-[calc(100%-32px)]">
              <div className="grid gap-4">
                {userNFTs.map((nft) => (
                  <Card
                    key={nft.id}
                    className="p-4 bg-white hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={nft.image}
                          alt={nft.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold">{nft.name}</h4>
                        <p className="text-sm text-gray-500">
                          {nft.collection}
                        </p>
                        <p className="font-bold text-purple-600 mt-2">
                          {nft.price.toLocaleString()} PC
                        </p>
                      </div>
                      <Button
                        className="self-center bg-purple-600 hover:bg-purple-700"
                        onClick={() => onTrade(selectedNFT, nft)}
                      >
                        <Repeat className="h-4 w-4 mr-2" />
                        Trade
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TradeModal;
