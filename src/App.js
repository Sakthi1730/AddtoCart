import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './card';
import { useState } from 'react';




function App() {
  
  
  const [values, setItem] = useState(0);
  let addToCart = () => {
    setItem(1 + values);
    

  }
  let removeFromCart = ()=>{
    setItem(values-1);
    
  }


  

  const productList = [
    {
      id:"1",
      Name: "iphone 11",
      price: "40,000",
      img:"https://img.giznext.com/assets/model/2/99/apple-iphone-11-4caba1e593728a55b9ebc730a9cc78.jpg?width=360"
    },
    {
      id:"2",
      Name: "iphone 13pro max",
      price: "1,20,000",
      img:"https://images.unsplash.com/photo-1690705229380-a32a8eb5017d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:"3",
      Name: "iphone 15pro max",
      price: "1,60,000",
      img:"https://images.unsplash.com/photo-1695822822491-d92cee704368?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:"4",
      Name: "Samsung ultra 22",
      price: "56,000",
      img:"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:"5",
      Name: "iphone 12",
      price: "50,000",
      img:"https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      
    },
    {
      id:"6",
      Name: "oneplus 10r",
      price: "36,000",
      img:"https://m.media-amazon.com/images/I/41pQ4gJMwEL._SX300_SY300_QL70_FMwebp_.jpg"
      
    },
    {
      id:"7",
      Name: "Samsung s24 ultra",
      price: "1,30,000",
      img:"https://m.media-amazon.com/images/I/41pQ4gJMwEL._SX300_SY300_QL70_FMwebp_.jpg"
      
    },
    {
      id:"8",
      Name: "Samsung note 10",
      price: "52,000",
      img:"https://m.media-amazon.com/images/I/71QIWoR7EZL._SX679_.jpg"
      
    }
  ]
  return (
    <div className="container">
      <div className="row">
        <div className='col-11'>
          <div><h4>Home About Shop</h4></div>
        </div>
        <div className='col-1'>
          <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">{values}</span>
          </button>
        </div>



        <div className='col-12'>
          <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
              <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Shop in style</h1>
                <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
              </div>
            </div>
          </header>
        </div>

        <div className='col-12'>
          <div className='row'>{
            productList.map((product,index) => {
              return <Card product={product} key={index} addToCart={addToCart} removeFromCart={removeFromCart} />
            })
          }

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
