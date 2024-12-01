import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Coins } from "lucide-react";

interface InsufficientFundsAlertProps {
  open?: boolean;
  onClose?: () => void;
  requiredAmount?: number;
  currentBalance?: number;
}

const InsufficientFundsAlert = ({
  open = true,
  onClose = () => {},
  requiredAmount = 1000,
  currentBalance = 500,
}: InsufficientFundsAlertProps) => {
  const shortfall = requiredAmount - currentBalance;

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="bg-white w-[400px] h-[200px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-red-600">
            <Coins className="h-5 w-5" />
            Insufficient Purple Coins
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600">
            You need {shortfall.toLocaleString()} more Purple Coins to complete
            this purchase. Current balance: {currentBalance.toLocaleString()} PC
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200"
          >
            Close
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={onClose}
          >
            Get More Coins
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default InsufficientFundsAlert;
