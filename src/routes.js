import HomePage from "./pages/home/HomePage";
import AboutUsPage from "./pages/aboutUs/AboutUsPage";
import ContactUsPage from "./pages/contactUs/ContactUsPage";
import SinglePage from "./pages/single/SinglePage";
import NotFound from "./pages/notFound/NotFoundPage";

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/about-us", component: AboutUsPage },
  { path: "/contact-us", component: ContactUsPage },
  { path: "/title/:slug", component: SinglePage },
  { component: NotFound },
];

export default routes;
