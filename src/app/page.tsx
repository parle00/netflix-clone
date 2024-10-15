import Header from "@/components/Header/Header";
import HomeAndLoginLayout from "@/components/HomeAndLoginLayout";

const Home = () => {
  return (
    <HomeAndLoginLayout header={<Header />}>
      <div className="flex flex-col justify-center items-center h-[100vh] w-full p-[25px] gap-[20px] font-bold">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[2.5rem]  max-w-[508px] text-center">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-[1rem] font-[400] text-center">
            Starts at 149.99 TL. Cancel anytime.
          </p>
        </div>
      </div>
    </HomeAndLoginLayout>
  );
};

export default Home;
