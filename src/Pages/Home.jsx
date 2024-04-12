import Navbar from '../features/Navbar/Navbar';
import ProductList from '../features/Product/ProductList.jsx';
// import Sujit from '../features/Product/Sujit.jsx';  // Sujit is the demo for the loading the Dummy api data
export default function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
}
