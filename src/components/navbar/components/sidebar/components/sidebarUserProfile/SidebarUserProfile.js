import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef } from "react";
import Avatar from "../../../../../../public/img/avatar/512x512bb.jpg";
import "./styles.css";

const SidebarUserProfile = () => {
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

  const Accordion = ({ children }) => {
    let rfVal = useRef(null);

    useEffect(() => {
      handleClick();
    }, []);

    const handleClick = () => {
      const acc = rfVal.children;
      for (let i = 0; i < acc.length; i++) {
        let a = acc[i];
        a.children[0].onclick = () => a.classList.toggle("active");
      }
    };

    return <div ref={(a) => (rfVal = a)}>{children}</div>;
  };

  return (
    <Menu as="div" className="">
      <div className="relative">
        <Menu.Button className="w-full p-5 rounded-full flex items-center">
          <span className="w-full text-left">{user.name}</span>
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
          <Menu.Items className="origin-top-left absolute left-0 mt-2 w-full rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
          </Menu.Items>
        </Transition>
      </div>
      <div className="divider">
        <Accordion>
          <div className="accor  text-white">
            <div className="accor-head p-5 noselect">فیلم</div>
            <div className="accor-body">
              <ul className="flex flex-wrap">
                <li className="w-full flex">
                  <a className="w-full accor-menu-text px-6 py-3" href="s">تاریخ اکران</a>
                </li>
                <li className="w-full flex">
                  <a className="w-full accor-menu-text px-6 py-3" href="s">تاریخ ریلیز</a>
                </li>
                <li className="w-full flex">
                  <a className="w-full accor-menu-text px-6 py-3" href="s">250 فیلم برتر</a>
                </li>
                <li className="w-full flex">
                  <a className="w-full accor-menu-text px-6 py-3" href="s">محبوب ترین ها</a>
                </li>
                <li className="w-full flex">
                  <a className="w-full accor-menu-text px-6 py-3" href="s">ژانر</a>
                </li>
                <li className="w-full flex">
                  <a className="w-full accor-menu-text px-6 py-3" href="s">به زودی</a>
                </li>
              </ul>
            </div>
          </div>
        </Accordion>
      </div>
    </Menu>
  );
};
export default SidebarUserProfile;
