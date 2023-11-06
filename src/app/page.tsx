import { StoreProvider } from "@/components/StoreProvider";
import NewsFeed from "@/components/NewsFeed";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-100 pb-8">
      <StoreProvider>
        <NewsFeed />
        <div className="">
          <Button>К предыдущим записям</Button>
        </div>
      </StoreProvider>
    </div>
  );
}
