// import { useState } from "react";
// function cart() {
//     const [quantity, setQuantity] = useState(1);
//     const product = {
//     name: "Elegant Dress",
//     price: 6499,
//   };

//   const total = product.price * quantity;
//     return (
//       <main>
//         <section className="page-hero">
//           <p>YOUR SHOPPING BAG</p>

//           <h1>Cart</h1>
//             </section>

//                   <section className="cart-section section">

//         <h2>Your Items</h2>

//         <div className="cart-item">

//           <div>
//             <h3>{product.name}</h3>

//             <p>
//               Rs. {product.price}
//             </p>
//           </div>
// </div>
//                     <div className="quantity">

//             <button
//               onClick={() =>
//                 setQuantity(
//                   Math.max(1, quantity - 1)
//                 )
//               }
//             >
//               -
//             </button>

//             <span>{quantity}</span>

//             <button
//               onClick={() =>
//                 setQuantity(quantity + 1)
//               }
//             >
//               +
//             </button>

//           </div>

//         </div>

//       </section>

//       <section className="section">

//         <h2>Order Summary</h2>

//         <p>
//           Quantity: {quantity}
//         </p>

//         <h3>
//           Total: Rs. {total}
//         </h3>

//       </section>

//       <section className="section">

//         <h2>Delivery</h2>

//         <p>
//           Fast and reliable delivery available.
//         </p>

//       </section>

//       <section className="section">

//         <h2>Payment</h2>

//         <p>
//           Multiple payment options available.
//         </p>

//         <button>
//           Proceed To Checkout
//         </button>

//       </section>

//       <section className="newsletter section">

//         <h2>Thank You For Shopping With LUNÉA</h2>

//         <p>
//           We hope you love your new style.
//         </p>

//       </section>

//     </main>
//   );
// }

// export default Cart;

import { useState } from "react";

function Cart() {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Elegant Dress",
    price: 6499,
  };

  const total = product.price * quantity;

  return (
    <main>
      <section className="page-hero">
        <p>YOUR SHOPPING BAG</p>

        <h1>Cart</h1>
      </section>

      <section className="cart-section section">
        <h2>Your Items</h2>

        <div className="cart-item">
          <div>
            <h3>{product.name}</h3>

            <p>Rs. {product.price}</p>
          </div>

          <div className="quantity">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>

            <span>{quantity}</span>

            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Order Summary</h2>

        <p>Quantity: {quantity}</p>

        <h3>Total: Rs. {total}</h3>
      </section>

      <section className="section">
        <h2>Delivery</h2>

        <p>Fast and reliable delivery available.</p>
      </section>

      <section className="section">
        <h2>Payment</h2>

        <p>Multiple payment options available.</p>

        <button>Proceed To Checkout</button>
      </section>

      <section className="newsletter section">
        <h2>Thank You For Shopping With LUNÉA</h2>

        <p>We hope you love your new style.</p>
      </section>
    </main>
  );
}

export default Cart;