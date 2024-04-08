import Navbar from '../features/Navbar/Navbar';
import ProductList from '../features/Product/ProductList.jsx';

export default function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
}
