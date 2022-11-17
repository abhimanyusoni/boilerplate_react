import React from "react";
import { BiHome } from "react-icons/bi";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const BreadCrumb = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      {breadcrumbs.map(({ breadcrumb }) => {
        return (
          <>
            {breadcrumb} <span className="seperator"> / </span>
          </>
        );
      })}
    </>
  );
};

export default BreadCrumb;
