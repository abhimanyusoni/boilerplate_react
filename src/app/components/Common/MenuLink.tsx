import React, { forwardRef } from "react";
import {
  Link,
  NavLinkProps,
  useLocation,
  useResolvedPath,
} from "react-router-dom";
import { Location, Path } from "history";

type TMenuLinkProps = NavLinkProps & {
  isActive?: (location: Location, path: Path) => boolean;
};

const MenuLink = forwardRef<HTMLAnchorElement, TMenuLinkProps>(
  ({ to, isActive, className: classNameProp = "", ...rest }, ref) => {
    let location = useLocation();
    let path = useResolvedPath(to);

    let locationPathname = location.pathname;
    let toPathname = path.pathname;

    let isLinkActive = isActive
      ? isActive(location, path)
      : locationPathname.startsWith(toPathname);

    const className = [classNameProp, isLinkActive ? "active-menu" : null]
      .filter(Boolean)
      .join(" ");
    return (
      <Link {...rest} style={{}} ref={ref} className={className} to={to} />
    );
  }
);

export default MenuLink;
