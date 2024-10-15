import React from "react";
import HomeAndLoginLayoutStyle from "./HomeAndLogin.module.css";

interface HomeAndLoginLayoutProps {
  header: JSX.Element | React.ReactNode;
  children?: JSX.Element | React.ReactNode;
}

const HomeAndLoginLayout = ({ header, children }: HomeAndLoginLayoutProps) => {
  return (
    <div className="select-none">
      {header}
      <img
        className={HomeAndLoginLayoutStyle.mainImage}
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/TR-tr-20241008-TRIFECTA-perspective_9530c08e-7c53-4c84-9b50-a1fccb0de635_large.jpg"
        srcSet="
https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/TR-tr-20241008-TRIFECTA-perspective_9530c08e-7c53-4c84-9b50-a1fccb0de635_small.jpg 959w,
https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/TR-tr-20241008-TRIFECTA-perspective_9530c08e-7c53-4c84-9b50-a1fccb0de635_medium.jpg 1279w,
https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/TR-tr-20241008-TRIFECTA-perspective_9530c08e-7c53-4c84-9b50-a1fccb0de635_large.jpg 2000w
"
        sizes="(max-width: 600px) 959px, (max-width: 1200px) 1279px, 2000px"
        alt="Responsive image"
      />
      <div className={HomeAndLoginLayoutStyle.main}>{children}</div>
      <div className={HomeAndLoginLayoutStyle.bottom} />
    </div>
  );
};

export default HomeAndLoginLayout;
