import { FC } from 'react';
import PageRoutes from './routes/components/PageRoutes';

interface Props {}

const App: FC<Props> = (props) => {
  return (
    <div className="app">
      <PageRoutes />
    </div>
  );
};

export default App;
