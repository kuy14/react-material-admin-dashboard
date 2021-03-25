import { Route, Redirect } from "react-router-dom";

//AUTH related methods

export interface AppModel {
  component: any;
  layout: any;
  isAuthProtected: any;
  rest: any;
}

const AppRoute = ({
  //@ts-ignore
  component: Component,
  //@ts-ignore
  layout: Layout,
  //@ts-ignore
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      let user = {
        token: "xyz",
      };

      if (isAuthProtected && !user.token) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

export default AppRoute;
