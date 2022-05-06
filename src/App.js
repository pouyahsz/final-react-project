import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Layout } from './layout';
import { MoreInfo } from './more-info';
import { Products } from './products';
import { MyBasket } from './basket/index';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<MoreInfo />} />
        <Route path='/basket' element={<MyBasket/>} />
      </Routes>
    </Layout>
  );
}

export default App;
