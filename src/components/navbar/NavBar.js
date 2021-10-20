import React from "react";
import Clock from "react-live-clock";
import { Disclosure } from "@headlessui/react";
import Sidebar from "./components/sidebar/Sidebar";
import "@reach/dialog/styles.css";
import MainMenu from "./components/mainMenu/MainMenu";
import Logo from "./components/logo/Logo";
import { Fragment } from "react";
import UserProfile from "./components/userProfile/UserProfile";
import Search from "./components/search/Search";

const NavBar = () => {
  const [opened, setOpened] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);

  const swip = React.useCallback(() => setOpened(true), []);
  const close = React.useCallback(() => setOpened(false), []);

  const searchSwip = React.useCallback(() => setOpenSearch(true), []);
  const closeSearch = React.useCallback(() => setOpenSearch(false), []);

  return (
    <Disclosure as="nav" className="bg-transparent absolute w-full z-10">
      {({ open }) => (
        <>
          <div className="main-menu flex items-center">
            <div className="pt-6 container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full items-center justify-center sm:items-stretch sm:justify-start">
                  {/* Drawer */}
                  <div className="flex h-full items-center place-self-start my-0 ml-4">
                    <div className="flex items-center">
                      <button
                        onClick={swip}
                        className="hamburger-menu flex items-center"
                      >
                        <div>
                          <div className="line bg-white mb-1" />
                          <div className="line bg-white ml-auto" />
                        </div>
                      </button>
                      <div
                        id="clock"
                        className="text-white px-3 py-2 rounded-md text-sm font-medium w-20"
                      >
                        <Clock
                          format={"HH:mm"}
                          ticking={true}
                          // onChange={(date) => console.log(date)}
                        />
                      </div>
                    </div>
                    <Sidebar swip={opened} onDismiss={close}>
                      This is in the drawer
                    </Sidebar>
                  </div>
                  {/* Drawer */}
                  {/* Logo */}
                  <Logo />

                  {/* Profile dropdown */}
                  <div className="flex items-center place-self-end">
                    <button
                      className="ml-5 fill-current text-white"
                      onClick={searchSwip}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 11.4783C1 15.8486 1.78302 18.3581 3.30283 19.8237C4.83125 21.2975 7.35021 21.9565 11.4783 21.9565C15.6063 21.9565 18.1253 21.2975 19.6537 19.8237C21.1735 18.3581 21.9565 15.8486 21.9565 11.4783C21.9565 7.10793 21.1735 4.59845 19.6537 3.13291C18.1253 1.65907 15.6063 1.00002 11.4783 1.00002C7.35021 1.00002 4.83125 1.65907 3.30283 3.13291C1.78302 4.59845 1 7.10793 1 11.4783Z"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.9565 22.9565L20.3478 20.3478"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <Search searchSwip={openSearch} onDismiss={closeSearch}>
                      This is in the Search
                    </Search>
                    <UserProfile />
                  </div>
                  {/* Profile dropdown */}
                </div>
              </div>
              <div className="mt-4">
                <MainMenu />
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
