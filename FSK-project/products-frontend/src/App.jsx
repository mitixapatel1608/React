import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import product from '../../products-api/models/product'

function App() {
  const [products, setproducts] = useState([]);
  useEffect(()=>{
    fetchProducts();
  },[]);

  const fetchProducts = async ()=>{
    try{
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setproducts(data);
    }catch(error){
      console.log("Error fetching products:",error);
    }
  };
  //const[formData,setFormData]=useState

  return (
    <>
      <div className='container'>
        <h1>Product Management system</h1>
        <div className='="table container'>
          <h2> Product List</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0?(
              ):(
              products.map((product)=>(
                <tr key={product.id}
              ))  
              )}
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
