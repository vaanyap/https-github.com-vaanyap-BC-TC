import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 space-y-6 bg-white">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-purple-900">
            Welcome to NFT Marketplace
          </h1>
          <p className="text-gray-500">
            Sign in to start trading NFTs with Purple Coins
          </p>
        </div>

        <Button
          onClick={() => loginWithRedirect()}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          size="lg"
        >
          Sign In / Sign Up
        </Button>

        <p className="text-xs text-center text-gray-500">
          New users receive 1000 Purple Coins upon registration!
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
