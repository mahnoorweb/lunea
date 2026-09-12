// import { Link } from "react-router-dom";
// function catagories() {
//   const Catagories=[
//     {
//       name: "Casual",
//       description: "Comfortable everyday styles",
//     },
//     {
//       name: "Party Wear",
//       description: "Beautiful outfits for celebrations",
//     },
//     {
//       name: "Formal",
//       description: "Elegant looks for special occasions",
//     },
//     {
//       name: "Maxi",
//       description: "Flowing and graceful styles",
//     },
//     {
//       name: "New In",
//       description: "Fresh styles and latest arrivals",
//     },

//   ];
//   return (
//     <main>
//       <section className="page-hero">
//         <p>FIND YOUR STYLE</p>

//         <h1>Categories</h1>
//       </section>

//       <section className="section">
//         <h2>Explore Collections</h2>

//         <p>Choose a category and discover beautiful styles.</p>
//       </section>

//         <section className="category-grid-section section">
//           <div className="catagory-grid">
//             {catagories.map((catagory) => (
//               <div className="catagory-box" key={catagory.name}>
//                 <h2>{category.name}</h2>

//                 <p>{category.description}</p>

//                 <Link to="/products">Explore</Link>
//               </div>
//             ))}
//           </div>

//   </section>

//       <section className="section">

//         <h2>Trending Now</h2>

//         <p>
//           Discover styles that are loved this season.
//         </p>

//       </section>

//       <section className="section">

//         <h2>Made For Every Occasion</h2>

//         <p>
//           From everyday outfits to special events,
//           find something that feels right for you.
//         </p>

//       </section>

//       <section className="newsletter section">

//         <h2>Join LUNÉA</h2>

//         <p>
//           Get the latest fashion updates.
//         </p>

//         <input
//           type="email"
//           placeholder="Email address"
//         />

//         <button>Subscribe</button>

//       </section>

//     </main>
//   );
// }

// export default Catagories;

import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
image:"/images/hero casual.jpg",
      name: "Casual",
      description: "Comfortable everyday styles",
    },
    {
      image:"/images/new-in img.jpg",
      name: "Party Wear",
      description: "Beautiful outfits for celebrations",
    },
    {
      image:"/images/midnight mouse img.webp",
      name: "Formal",
      description: "Elegant looks for special occasions",
    },
    {
      image:"/images/party5.jpg",
      name: "Maxi",
      description: "Flowing and graceful styles",
    },
    {
      image:"/images/hero party.jpg",
      name: "New In",
      description: "Fresh styles and latest arrivals",
    },
  ];

  return (
    <main>
      <section className="page-hero">
        <p>FIND YOUR STYLE</p>
        <h1>Categories</h1>
      </section>

      <section className="section">
        <h2>Explore Collections</h2>

        <p>Choose a category and discover beautiful styles.</p>
      </section>

      <section className="category-grid-section section">
        <div className="category-grid">
          {categories.map((category) => (
            <div className="category-box" key={category.name}>
              <img src={category.image} alt={category.name} />

              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <Link to="/products">Explore</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Trending Now</h2>

        <p>Discover styles that are loved this season.</p>
      </section>

      <section className="section">
        <h2>Made For Every Occasion</h2>

        <p>
          From everyday outfits to special events, find something that feels
          right for you.
        </p>
      </section>

      <section className="newsletter section">
        <h2>Join LUNÉA</h2>

        <p>Get the latest fashion updates.</p>

        <input type="email" placeholder="Email address" />

        <button>Subscribe</button>
      </section>
    </main>
  );
}

export default Categories;