import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="main-hero">
          <p>NEW COLLECTION 2026</p>

          <h1>
            Elegance That
            <br />
            Speaks For You
          </h1>

          <p>
            Discover beautiful fashion pieces designed for your special moments.
          </p>

          <Link to="/products">Shop Now</Link>
        </div>
        <div className="hero-image">
          <img src="/images/main -img.png" alt="LUNÉA Fashion" />
        </div>
      </section>

      <section className="intro section">
        <p>WELCOME TO LUNÉA</p>

        <h2>Fashion Made For You</h2>

        <p>
          Explore our carefully selected collection of elegant and modern
          fashion.
        </p>
      </section>

      <section className="categories section">
        <h2>Shop By Category</h2>

        <div className="category-grid">
                  <div className="category-box">
                      <img src="/images/casual3.jpg" alt="causal"/>
            <h3>Casual</h3>
            <p>Simple everyday fashion</p>
          </div>

          <div className="category-box">
            <img src="/images/dress 2.jpg"alt="party"/>
            <h3>Party Wear</h3>
            <p>Perfect for celebrations</p>
          </div>

          <div className="category-box">
            <img src="/images/formal3.jpg"alt="formal"/>
            <h3>Formal</h3>
            <p>Elegant formal looks</p>
          </div>

          <div className="category-box">
            <img src="/images/party4.jpg"alt="maxi"/>
            <h3>Maxi</h3>
            <p>Beautiful flowing styles</p>
          </div>
        </div>
      </section>

      <section className="featured section">
        <h2>Featured Collection</h2>

        <p>Discover styles selected specially for the LUNÉA woman.</p>
      </section>

      <section className="why-us section">
        <h2>Why Choose LUNÉA?</h2>

        <div className="features">
          <div>
            <h3>✨ Premium Style</h3>
            <p>Beautiful and modern designs.</p>
          </div>

          <div>
            <h3>🚚 Fast Delivery</h3>
            <p>Quick and reliable delivery.</p>
          </div>

          <div>
            <h3>💗 Quality</h3>
            <p>Quality products for every occasion.</p>
          </div>
        </div>
      </section>

      <section className="newsletter section">
        <h2>Join Our Fashion Community</h2>

        <p>Get updates about new collections.</p>

        <input type="email" placeholder="Enter your email" />

        <button>Subscribe</button>
      </section>
    </main>
  );
}

export default Home;