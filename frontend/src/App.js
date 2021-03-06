import './App.css';
import data from './data';


function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
           <a  className="brand"href="index.html"> amazona</a>
        </div>  
        <div>
           <a href="cart.html">Cart</a>
           <a href="signin.html">Sign In</a>
        </div>    
   </header>
   <main> 
       <div className="row center">
         { 
          data.products.map(product=>(
                                  <div key={product._id} className="card">
                                     <a href={`/product/${product._id}`}>                 
                                        <img className="medium" src= {product.image} alt={product.description} /> </a>
                                    <div className="card-body">
                                     <a href="product.html">
                                       <h2>{product.name}</h2></a>
                                      <div className="rating">
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                    </div>
                                    <div className="price">{product.price}</div>
                                    </div>                
                                  </div>  
         ))}                                     
      </div>       
   </main>
   <footer className="row center">
     All copy rights reserved
   </footer>
</div>
  );
}

export default App;
