import { Coins } from "lucide-react";
import { Card } from "@/components/ui/card";

interface PurpleCoinBalanceProps {
  balance?: number;
}

const PurpleCoinBalance = ({ balance = 1000 }: PurpleCoinBalanceProps) => {
  return (
    <Card className="bg-white p-2 flex items-center justify-between gap-2 w-[200px] h-[40px]">
      <div className="flex items-center gap-2">
        <Coins className="h-5 w-5 text-purple-600" />
        <span className="font-medium text-sm">Purple Coins</span>
      </div>
      <span className="font-bold text-purple-600">
        {balance.toLocaleString()}
      </span>
    </Card>
  );
};

export default PurpleCoinBalance;
