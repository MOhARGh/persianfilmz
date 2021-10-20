const MainMenu = () => {

    const navigation = [
        { name: "خانه", href: "#", current: true },
        { name: "فیلم", href: "#", current: false },
        { name: "سریال", href: "#", current: false },
        { name: "خبر", href: "#", current: false },
        { name: "کلاب", href: "#", current: false },
      ];
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
      }

  return (
    <div className="hidden sm:flex justify-center text-center rtl">
      <div className="flex  ">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? "text-blue-500" : "text-white hover:text-blue-500",
              "px-3 py-2 rounded-md text-sm font-medium w-20"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
