import "./app.css";

const App = () => {
  return (
    <>
    <nav>
      <div className="logoBox">
        <p className="logo">site logo</p>
      </div>
      <ul className="mainNav">
        <li>Home</li>
        <li>Product</li>
        <li>Company</li>
        <li>Contact</li>
      </ul>
    </nav>
    <header>
      <p>Header Image</p>
    </header>
    <main>
      <section id="main1">
        <div className="main1Box">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ad labore ipsa ullam eveniet earum, libero reiciendis adipisci facilis minus ipsam sint, consequuntur nisi soluta expedita officia qui, perferendis eius.</p>
        </div>
        <div className="main1Box">
          <h1>Company</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ad labore ipsa ullam eveniet earum, libero reiciendis adipisci facilis minus ipsam sint, consequuntur nisi soluta expedita officia qui, perferendis eius.</p>
        </div>
        <div className="main1Box">
          <h1>Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ad labore ipsa ullam eveniet earum, libero reiciendis adipisci facilis minus ipsam sint, consequuntur nisi soluta expedita officia qui, perferendis eius.</p>
        </div>
      </section>

      <section id="main2">
        <div className="left">
          <h1>Content</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque est cupiditate maxime dignissimos nulla animi a iure. Accusantium earum voluptate delectus quae odio temporibus animi consequatur nisi, optio, a dicta.</p>
          <h2>Sub Header</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt facilis cum beatae enim omnis blanditiis veniam culpa ab molestias. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi animi dolore doloremque quod corporis, repudiandae pariatur nisi qui sint nesciunt!</p>
        </div>
        <div className="right">
          <h2>Navigation</h2>
          <ul className="navigation">
            <li>Home</li>
            <li>Product</li>
            <li>Company</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>
    </main>
    </>
  );
}


export default App;