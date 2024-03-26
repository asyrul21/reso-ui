import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";

import FlexContainer from "../../components/component-containers/flex-container/flex-container";
import Footer from "../../components/footer/footer";
import NavLink from "../../components/nav-link/nav-link";
import SidebarNavHeader from "../../components/sidebar-nav-header/sidebar-nav-header";

import {
  HomeIcon,
  AboutIcon,
  DashboardIcon,
  ProfileIcon,
  ProductsIcon,
  SettingsIcon,
  UsersIcon,
  LoaderIcon,
  OrdersIcon,
  CartIcon,
} from "../../icons";
import { useLocation } from "react-router-dom";
import { getCartItems } from "../../state/cart/actions";
import { NavigationContext } from "../../context/navigation";

const Sidebar = ({ mobileView, show, toggleSideBar = () => {} }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { pathname } = location;
  const currentLocation = pathname.split("/").pop();

  const { disableNavigation } = useContext(NavigationContext);

  const authLoginReducer = useSelector((state) => state.authLogin);
  const { isAuthenticated, loggedInUser } = authLoginReducer;

  const cartReducer = useSelector((state) => state.cart);
  const { cartItems } = cartReducer;

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch, loggedInUser]);

  const navLinkItemBaseClasses = classnames({
    container_sidebar_link: true,
    component_disabled: disableNavigation,
  });

  const renderAdminActions = () => {
    return (
      <>
        <li
          className="container_sidebar_li"
          onClick={() => {
            toggleSideBar();
          }}
        >
          <NavLink
            className={navLinkItemBaseClasses}
            activeClassName="container_sidebar_link_active"
            to="/admin/dashboard"
            location={currentLocation}
            SvgIcon={DashboardIcon}
          >
            Dashboard
          </NavLink>
        </li>
        <li
          className="container_sidebar_li"
          onClick={() => {
            toggleSideBar();
          }}
        >
          <NavLink
            className={navLinkItemBaseClasses}
            activeClassName="container_sidebar_link_active"
            to="/profile"
            location={currentLocation}
            SvgIcon={ProfileIcon}
          >
            Profile
          </NavLink>
        </li>
        <li
          className="container_sidebar_li"
          onClick={() => {
            toggleSideBar();
          }}
        >
          <NavLink
            className={navLinkItemBaseClasses}
            activeClassName="container_sidebar_link_active"
            to="/admin/orders"
            location={currentLocation}
            SvgIcon={OrdersIcon}
          >
            Orders
          </NavLink>
        </li>
        <li
          className="container_sidebar_li"
          onClick={() => {
            toggleSideBar();
          }}
        >
          <NavLink
            className={navLinkItemBaseClasses}
            activeClassName="container_sidebar_link_active"
            to="/admin/products"
            location={currentLocation}
            SvgIcon={ProductsIcon}
          >
            Products
          </NavLink>
        </li>
        <li
          className="container_sidebar_li"
          onClick={() => {
            toggleSideBar();
          }}
        >
          <NavLink
            className={navLinkItemBaseClasses}
            activeClassName="container_sidebar_link_active"
            to="/admin/users"
            location={currentLocation}
            SvgIcon={UsersIcon}
          >
            Users
          </NavLink>
        </li>

        <li
          className="container_sidebar_li"
          onClick={() => {
            toggleSideBar();
          }}
        >
          <NavLink
            className={navLinkItemBaseClasses}
            activeClassName="container_sidebar_link_active"
            to="/admin/settings"
            location={currentLocation}
            SvgIcon={SettingsIcon}
          >
            Personalize
          </NavLink>
        </li>
      </>
    );
  };

  const renderNormalUsersActions = () => {
    return (
      <>
        <li
          className="container_sidebar_li"
          onClick={() => {
            toggleSideBar();
          }}
        >
          <NavLink
            className={navLinkItemBaseClasses}
            activeClassName="container_sidebar_link_active"
            to="/profile"
            location={currentLocation}
            SvgIcon={ProfileIcon}
          >
            Profile
          </NavLink>
        </li>
        <li
          className="container_sidebar_li"
          onClick={() => {
            toggleSideBar();
          }}
        >
          <NavLink
            className={navLinkItemBaseClasses}
            activeClassName="container_sidebar_link_active"
            to="/orders"
            location={currentLocation}
            SvgIcon={OrdersIcon}
          >
            Orders
          </NavLink>
        </li>
        <li
          className="container_sidebar_li container_sidebar_li_cart"
          onClick={() => {
            toggleSideBar();
          }}
        >
          <NavLink
            className={navLinkItemBaseClasses}
            activeClassName="container_sidebar_link_active"
            to="/cart"
            location={currentLocation}
            SvgIcon={CartIcon}
          >
            Cart
          </NavLink>
          {cartItems && cartItems.length > 0 ? (
            <div className="container_sidebar_cart_count">
              {cartItems.reduce((prev, curr) => prev + curr.quantity, 0)}
            </div>
          ) : null}
        </li>
      </>
    );
  };

  const containerClasses = classnames({
    not_printable: true,
    container_sidebar_container: true,
    container_sidebar_container_mobile: mobileView,
    slideFromLeft: mobileView,
    container_sidebar_container_mobile_show: mobileView && show,
  });

  const backdropClasses = classnames({
    container_sidebar_mobile_backdrop: true,
    appear: true,
    container_sidebar_mobile_backdrop_show: mobileView && show,
  });
  console.log(`Disable navigation on sidebar: ${disableNavigation}`);
  return (
    <>
      <div
        className={backdropClasses}
        onClick={() => {
          toggleSideBar();
        }}
      />
      <FlexContainer
        className={containerClasses}
        direction="column"
        justify="space-between"
        align="center"
      >
        {/* <Icon SvgIcon={LoaderIcon} height="50" width="50" /> */}
        <div className="container_sidebar_content" role="navigation">
          <ul className="container_sidebar_ul">
            <li
              className="container_sidebar_li"
              onClick={() => {
                toggleSideBar();
              }}
            >
              <NavLink
                className={navLinkItemBaseClasses}
                activeClassName="container_sidebar_link_active"
                to="/"
                location={currentLocation}
                SvgIcon={HomeIcon}
              >
                Home
              </NavLink>
            </li>
            <li
              className="container_sidebar_li"
              onClick={() => {
                toggleSideBar();
              }}
            >
              <NavLink
                className={navLinkItemBaseClasses}
                activeClassName="container_sidebar_link_active"
                to="/about"
                location={currentLocation}
                SvgIcon={AboutIcon}
              >
                About Us
              </NavLink>
            </li>
            {isAuthenticated && (
              <>
                <li
                  className="container_sidebar_li"
                  onClick={() => {
                    toggleSideBar();
                  }}
                >
                  <SidebarNavHeader className="container_sidebar_link container_sidebar_header">
                    Manage
                  </SidebarNavHeader>
                </li>
                {loggedInUser.isAdmin
                  ? renderAdminActions()
                  : renderNormalUsersActions()}
              </>
            )}
          </ul>
        </div>
        <Footer />
      </FlexContainer>
    </>
  );
};

export default Sidebar;
