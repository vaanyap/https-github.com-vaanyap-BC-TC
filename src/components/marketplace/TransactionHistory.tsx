import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowDownRight, ArrowUpRight, Repeat } from "lucide-react";

interface Transaction {
  id: string;
  type: "buy" | "sell" | "trade";
  date: string;
  price: number;
  from: string;
  to: string;
}

interface TransactionHistoryProps {
  transactions?: Transaction[];
}

const defaultTransactions: Transaction[] = [
  {
    id: "1",
    type: "buy",
    date: "2024-03-20",
    price: 1000,
    from: "0x1234...5678",
    to: "0x8765...4321",
  },
  {
    id: "2",
    type: "sell",
    date: "2024-03-19",
    price: 900,
    from: "0x8765...4321",
    to: "0x2468...1357",
  },
  {
    id: "3",
    type: "trade",
    date: "2024-03-18",
    price: 800,
    from: "0x2468...1357",
    to: "0x1357...2468",
  },
];

const TransactionHistory = ({
  transactions = defaultTransactions,
}: TransactionHistoryProps) => {
  const getTransactionIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "buy":
        return <ArrowDownRight className="h-4 w-4 text-green-500" />;
      case "sell":
        return <ArrowUpRight className="h-4 w-4 text-red-500" />;
      case "trade":
        return <Repeat className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <Card className="bg-white w-[560px] h-[200px] p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Transaction History</h3>
        <span className="text-sm text-gray-500">
          {transactions.length} transactions
        </span>
      </div>

      <ScrollArea className="h-[132px]">
        <div className="space-y-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
            >
              <div className="flex items-center gap-3">
                {getTransactionIcon(transaction.type)}
                <div>
                  <p className="text-sm font-medium capitalize">
                    {transaction.type}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-medium">
                  {transaction.price.toLocaleString()} PC
                </p>
                <p className="text-xs text-gray-500">
                  {transaction.type === "trade" ? "Traded with" : "From"}:{" "}
                  {transaction.from}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default TransactionHistory;
