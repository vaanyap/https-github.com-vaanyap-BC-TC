import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface CollectionNFT {
  id: string;
  name: string;
  image: string;
  owned: boolean;
}

interface CollectionStatusProps {
  collectionName?: string;
  totalCards?: number;
  ownedCards?: number;
  relatedNFTs?: CollectionNFT[];
}

const defaultNFTs: CollectionNFT[] = [
  {
    id: "1",
    name: "Purple Punk #1",
    image: "https://dummyimage.com/80x80/6b46c1/ffffff&text=NFT+1",
    owned: true,
  },
  {
    id: "2",
    name: "Purple Punk #2",
    image: "https://dummyimage.com/80x80/6b46c1/ffffff&text=NFT+2",
    owned: false,
  },
  {
    id: "3",
    name: "Purple Punk #3",
    image: "https://dummyimage.com/80x80/6b46c1/ffffff&text=NFT+3",
    owned: true,
  },
  {
    id: "4",
    name: "Purple Punk #4",
    image: "https://dummyimage.com/80x80/6b46c1/ffffff&text=NFT+4",
    owned: false,
  },
];

const CollectionStatus = ({
  collectionName = "Purple Punks",
  totalCards = 10,
  ownedCards = 4,
  relatedNFTs = defaultNFTs,
}: CollectionStatusProps) => {
  const completionPercentage = (ownedCards / totalCards) * 100;

  return (
    <Card className="bg-white w-[560px] h-[160px] p-4">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="font-semibold text-lg">{collectionName}</h3>
          <p className="text-sm text-gray-500">
            {ownedCards} of {totalCards} cards collected
          </p>
        </div>
        <Badge
          variant="secondary"
          className="bg-purple-100 text-purple-600 hover:bg-purple-200"
        >
          {completionPercentage.toFixed(0)}% Complete
        </Badge>
      </div>

      <Progress
        value={completionPercentage}
        className="h-2 mb-4"
        indicatorClassName="bg-purple-600"
      />

      <ScrollArea className="h-[60px]">
        <div className="flex gap-2">
          {relatedNFTs.map((nft) => (
            <div
              key={nft.id}
              className={`relative flex-shrink-0 w-[60px] h-[60px] rounded-md overflow-hidden ${nft.owned ? "opacity-100" : "opacity-50"}`}
            >
              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-full object-cover"
              />
              {!nft.owned && (
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">Locked</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default CollectionStatus;
