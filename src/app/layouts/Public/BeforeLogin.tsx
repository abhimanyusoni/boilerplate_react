import React, { PropsWithChildren } from "react";
import LoginImage from "../../assets/images/loginleftimg.jpg";
import LoginImage2 from "../../assets/images/loginleftimg2.jpg";

interface HeaderProps {
  children: any;
}

const BeforeLogin: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
}: React.PropsWithChildren<{}>) => {
  return (
    <>
      <div className="row m-0">
        <div className="col-8 p-0">
          <img
            // src={LoginImage}
            src={LoginImage2}
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </div>
        <div className="col-4 p-0">
          <div className="d-flex h-100 align-items-center justify-content-center p-5">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeLogin;
