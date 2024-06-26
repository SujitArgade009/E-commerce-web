import Navbar from '../features/Navbar/Navbar';
import ProductDetails from '../features/Product/ProductDetails';
import { Provider } from 'react-redux';
import { store } from '/src/app/store.js';

export default function ProductDetailsPage() {
  return (
    <div>
      <Provider store={store}>
        <Navbar>
          <ProductDetails></ProductDetails>
        </Navbar>
      </Provider>
    </div>
  );
}
