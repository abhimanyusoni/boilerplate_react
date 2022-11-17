import React, { PropsWithChildren } from "react";
import Header from "../../components/Common/Header";
import TopBar from "../../components/Common/TopBar";

interface AfterLoginProps {
  children: any;
}

const AfterLogin: React.FC<PropsWithChildren<AfterLoginProps>> = ({
  children,
}: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <Header />
      <div className="main_content">
        <TopBar />
        <div className="afterlogin_childs">{children}</div>
      </div>
    </div>
  );
};

export default AfterLogin;
