import { Route } from 'react-router-dom';
import EmptyLayout from 'src/layouts/EmptyLayout';
import routes from './routes';

const generateRoutes = () => {
  return routes.map((route) => {
    const { path, component: Component, layout: Layout = EmptyLayout, outer: OuterRoute } = route;
    return (
      <Route
        key={path}
        path={path}
        element={
          <OuterRoute>
            <Layout>
              <Component />
            </Layout>
          </OuterRoute>
        }
      />
    );
  });
};
export default generateRoutes;
