import { Route, Switch } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import routes from "./routes";

const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </Layout>
  );
};

export default App;
