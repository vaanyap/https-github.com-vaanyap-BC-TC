import { useState } from "react";
import NFTCard from "./NFTCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface NFT {
  id: string;
  name: string;
  image: string;
  price: number;
  collection: string;
  rarity: string;
}

const defaultNFTs: NFT[] = [
  {
    id: "1",
    name: "Purple Punk #1",
    image: "https://dummyimage.com/280x280/6b46c1/ffffff&text=NFT+1",
    price: 100,
    collection: "Purple Punks",
    rarity: "Rare",
  },
  {
    id: "2",
    name: "Purple Punk #2",
    image: "https://dummyimage.com/280x280/6b46c1/ffffff&text=NFT+2",
    price: 150,
    collection: "Purple Punks",
    rarity: "Epic",
  },
  {
    id: "3",
    name: "Purple Punk #3",
    image: "https://dummyimage.com/280x280/6b46c1/ffffff&text=NFT+3",
    price: 200,
    collection: "Purple Punks",
    rarity: "Legendary",
  },
];

const NFTGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [nfts] = useState<NFT[]>(defaultNFTs);

  const filteredNFTs = nfts.filter(
    (nft) =>
      nft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nft.collection.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="bg-gray-50 w-full min-h-[800px] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search NFTs by name or collection..."
            className="pl-10 bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredNFTs.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>

        {filteredNFTs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No NFTs found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTGrid;
