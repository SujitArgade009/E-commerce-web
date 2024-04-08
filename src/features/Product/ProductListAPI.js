async function fetchAllProducts() {
  try {
    const response = await fetch('http://localhost:8000/products');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // This will also be a promise rejection when called from an async function.
  }
}

export default fetchAllProducts;
