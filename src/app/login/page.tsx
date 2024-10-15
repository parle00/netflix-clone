import Header from "@/components/Header/Header";
import HomeAndLoginLayout from "@/components/HomeAndLoginLayout";
import React from "react";

const Login = () => {
  return (
    <HomeAndLoginLayout header={<Header isLogin={true} />}>
      <div className="flex flex-col justify-center items-center h-[100vh] w-full p-[25px] gap-[20px] font-bold">
        <div className="max-w-[450px] w-full h-[735px] bg-[#000000ab] px-[68px] py-[48px]">
          <h1 className="text-[2rem] font-bold">Sign In</h1>
        </div>
      </div>
    </HomeAndLoginLayout>
  );
};

export default Login;
