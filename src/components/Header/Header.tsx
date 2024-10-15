import { Logo } from "@/assets/Icons";
import Link from "next/link";
import React from "react";

interface HeaderProps {
  isLogin?: boolean;
}

const Header = ({ isLogin = false }: HeaderProps) => {
  return (
    <div
      className="w-full bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.8000)_0.000%,_rgba(0,_0,_0,_0.7889)_8.333%,_rgba(0,_0,_0,_0.7556)_16.67%,_rgba(0,_0,_0,_0.7000)_25.00%,_rgba(0,_0,_0,_0.6222)_33.33%,_rgba(0,_0,_0,_0.5222)_41.67%,_rgba(0,_0,_0,_0.4000)_50.00%,_rgba(0,_0,_0,_0.2778)_58.33%,_rgba(0,_0,_0,_0.1778)_66.67%,_rgba(0,_0,_0,_0.1000)_75.00%,_rgba(0,_0,_0,_0.04444)_83.33%,_rgba(0,_0,_0,_0.01111)_91.67%,_rgba(0,_0,_0,_0.000)_100.0%)]
px-[50px] flex justify-center items-center pt-[24px] absolute top-0 left-0 z-[1300]"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1212px] w-full gap-[10px]">
        <Link href="/" title="Home">
          <Logo />
        </Link>
        {!isLogin && (
          <div>
            <Link
              className=" bg-[#e50914] border-0 py-[10px] px-[15px] rounded-[4px] transition-[background] duration-150  hover:bg-[#c11119]"
              href="/login"
              title="Sign In"
            >
              <span className="text-nowrap font-[600] text-[14px]">
                Sign In
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
