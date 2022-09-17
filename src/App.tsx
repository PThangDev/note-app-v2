import { FC } from 'react';
import { Routes } from 'react-router-dom';
import { generateRoutes } from './routes';

interface Props {}

const App: FC<Props> = (props) => {
  return (
    <div className="app">
      <Routes>{generateRoutes()}</Routes>
    </div>
  );
};

export default App;
