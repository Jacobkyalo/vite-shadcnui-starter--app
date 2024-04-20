import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getFavoriteQuote } from "./lib/api";

export default function App() {
  const { data: quote, refetch } = useQuery({
    queryKey: ["quote"],
    queryFn: getFavoriteQuote,
    enabled: false,
  });

  return (
    <div className="container">
      <div className="flex flex-col justify-center h-screen items-center">
        <h2 className="mb-20 font-bold text-blue-600 text-4xl">Random Quote</h2>
        <div className="bg-blue-600 w-full max-w-3xl rounded-lg p-4 flex justify-center flex-col items-center">
          <p className="mb-6 text-center text-white text-lg font-semibold">
            {quote || "Click the button to get a random quote"}
          </p>
          <Button onClick={() => refetch()}>+ New</Button>
        </div>
      </div>
    </div>
  );
}
