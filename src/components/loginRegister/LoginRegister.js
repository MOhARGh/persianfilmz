/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { loginApi } from "../../api/auth";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginRegister = () => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  // Login States
  const [userNameLogin, setUserNameLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();

  const handleLogin = () => {
    const user = {
      email: userNameLogin,
      password: passwordLogin,
    };
    loginApi(user, (isOk, data) => {
      if (isOk) {
        setOpen(false);
        window.location.reload();
        return toast.success("وارد شدید", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        return data;
      }
    });
  };

  // const validateLogin = (user) => {
  //     if(!user.email){
  //       return ""
  //     }
  // }

  return (
    <div as="div" className="">
      <button
        onClick={() => setOpen(true)}
        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      >
        <span className="sr-only">Open user menu</span>
        <div className="">ورود</div>
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-md w-full space-y-8">
                    <div>
                      <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
                      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                      </h2>
                      <p className="mt-2 text-center text-sm text-gray-600">
                        Or{" "}
                        <div className="font-medium text-indigo-600 hover:text-indigo-500">
                          start your 14-day free trial
                        </div>
                      </p>
                    </div>
                    <div className="mt-8 space-y-6">
                      <input
                        type="hidden"
                        name="remember"
                        defaultValue="true"
                      />
                      <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                          <label htmlFor="email-address" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                            value={userNameLogin}
                            onChange={(e) => setUserNameLogin(e.target.value)}
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            value={passwordLogin}
                            onChange={(e) => setPasswordLogin(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="remember-me"
                            className="ml-2 block text-sm text-gray-900"
                          >
                            Remember me
                          </label>
                        </div>

                        <div className="text-sm">
                          <div className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                          </div>
                        </div>
                      </div>

                      <div>
                        <button
                          disabled={!userNameLogin}
                          onClick={handleLogin}
                          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <div
                              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                              aria-hidden="true"
                            />
                          </span>
                          Sign in
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
export default LoginRegister;
