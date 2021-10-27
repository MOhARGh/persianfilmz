import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { toast } from "react-toastify";
import { logoutApi } from "../../../../api/auth";
import Avatar from "../../../../public/img/avatar/512x512bb.jpg";

const UserProfile = () => {
  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl: Avatar,
  };

  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleLogout = () => {
    logoutApi(() => {
      
      return toast.success("خارج شدید", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  return (
    <Menu as="div" className="">
      <div className="relative">
        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
        </Menu.Button>
        
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
            <Menu.Item>
              <div
                onClick={handleLogout}
                className="block cursor-pointer px-4 py-2 text-sm text-gray-700"
              >
                خروج
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};
export default UserProfile;
