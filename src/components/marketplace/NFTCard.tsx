import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NFTCardActions from "./NFTCardActions";

interface NFTCardProps {
  id?: string;
  name?: string;
  image?: string;
  price?: number;
  collection?: string;
  rarity?: string;
  onBuy?: () => void;
  onBid?: () => void;
  onTrade?: () => void;
  onClick?: () => void;
}

const NFTCard = ({
  id = "1",
  name = "Purple Punk #1",
  image = "https://dummyimage.com/280x280/6b46c1/ffffff&text=NFT",
  price = 100,
  collection = "Purple Punks",
  rarity = "Rare",
  onBuy = () => {},
  onBid = () => {},
  onTrade = () => {},
  onClick = () => {},
}: NFTCardProps) => {
  return (
    <Card
      className="bg-white w-[280px] h-[400px] flex flex-col overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative w-full h-[280px]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <Badge
          className="absolute top-2 right-2 bg-purple-600"
          variant="secondary"
        >
          {rarity}
        </Badge>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-500">{collection}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Price</p>
            <p className="font-bold text-purple-600">
              {price.toLocaleString()} PC
            </p>
          </div>
        </div>

        <NFTCardActions onBuy={onBuy} onBid={onBid} onTrade={onTrade} />
      </div>
    </Card>
  );
};

export default NFTCard;
