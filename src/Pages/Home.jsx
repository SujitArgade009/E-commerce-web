// import { Provider } from 'react-redux';
import Navbar from '../features/Navbar/Navbar';
import ProductList from '../features/Product/ProductList';
// import  {Store}  from "../app/Store.js";
import { Provider } from 'react-redux';
import store from '../app/store';

export default function Home() {
  return (
    <div>
       <Provider store={store}>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
      </Provider>
    </div>
  );
}
