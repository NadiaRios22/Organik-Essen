import React, { useState } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Kohl-1",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 110839.png",
      category: "gemüse",
    },
    {
      id: 2,
      name: "Birne-1",
      price: 5,
      popularity: 4,
      category: "obst",
      image: "../../public/products/Screenshot 2023-12-11 110925.png",
    },
    {
      id: 3,
      name: "Gurken",
      price: 5,
      popularity: 4,
      category: "gemüse",
      image: "../../public/products/Screenshot 2023-12-11 111104.png",
    },
    {
      id: 4,
      name: "Tomaten",
      price: 5,
      popularity: 4,
      category: "gemüse",
      image: ".././public/products/Screenshot 2023-12-11 111025.png",
    },
    {
      id: 5,
      name: "Brokkoli",
      price: 5,
      popularity: 4,
      category: "gemüse",
      image: "../../public/products/Screenshot 2023-12-11 110956.png",
    },
    {
      id: 6,
      name: "Himbeeren",
      price: 5,
      popularity: 4,
      category: "obst",
      image: "../../public/products/Screenshot 2023-12-11 111150.png",
    },
    {
      id: 7,
      name: "Eier-1",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 111305.png",
      category: "eier",
    },
    {
      id: 8,
      name: "Kirschen",
      price: 5,
      popularity: 4,
      category: "obst",
      image: "../../public/products/Screenshot 2023-12-11 111119.png",
    },
    {
      id: 9,
      name: "Kohl-2",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 111206.png",
      category: "gemüse",
    },
    {
      id: 10,

      name: "Pilze-2",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 111425.png",
      category: "pilze",
    },
    {
      id: 11,
      name: "Eier-2",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 111320.png",
      category: "eier",
    },
    {
      id: 12,
      name: "Pilze-1",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 111354.png",
      category: "pilze",
    },
    {
      id: 13,
      name: "Avocado",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 111135.png",
      category: "gemüse",
    },
    {
      id: 14,
      name: "Pilze-3",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 111551.png",
      category: "pilze",
    },
    {
      id: 15,
      name: "Apfel-1",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 111638.png",
      category: "obst",
    },
    // {
    //   id: 16,
    //   name: "Apfel-2",
    //   price: 5,
    //   popularity: 4,
    //   image: "../../public/products/Screenshot 2023-12-11 111703.png",
    //   category: "obst",
    // },
    {
      id: 17,
      name: "Apfel-3",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 111715.png",
      category: "obst",
    },
    {
      id: 18,
      name: "Birne-2",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 111804.png",
      category: "obst",
    },
    {
      id: 19,
      name: "Bohnen-1",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 111859.png",
      category: "bohnen",
    },
    {
      id: 20,
      name: "Bohnen-2",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 111922.png",
      category: "bohnen",
    },
    {
      id: 21,
      name: "Bohnen-3",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 111940.png",
      category: "bohnen",
    },
    {
      id: 22,
      name: "Bohnen-4",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 112005.png",
      category: "bohnen",
    },
    {
      id: 23,
      name: "Bohnen-5",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 112044.png",
      category: "bohnen",
    },
    {
      id: 24,
      name: "Bohnen-6",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 112106.png",
      category: "bohnen",
    },
    {
      id: 25,
      name: "Kartoffel-1",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 112156.png",
      category: "gemüse",
    },
    {
      id: 26,
      name: "Kartoffel-2",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 112223.png",
      category: "gemüse",
    },
    {
      id: 27,
      name: "Kartoffel-3",
      price: 5,
      popularity: 4,
      image: "../../public/products/Screenshot 2023-12-11 112254.png",
      category: "gemüse",
    },
  ]);
  const handleBuyClick = (productId) => {
    console.log(`Product with id ${productId} purchased`);
  };
  const [selectedCategory, setSelectedCategory] = useState("alles");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const filteredProducts =
    selectedCategory === "alles"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="products" id="products">
      <div className="products-teil1">
        <p>Be Healthy</p>
        <h3>Our Products</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quia
          modi non.
        </p>
      </div>
      <div className="products-teil2">
        <div className="buttons" onClick={() => handleCategoryClick("alles")}>
          <button>🥗</button>
          <p>Alles</p>
        </div>
        <div className="buttons" onClick={() => handleCategoryClick("obst")}>
          <button>🍒</button>
          <p>Obst</p>
        </div>
        <div className="buttons" onClick={() => handleCategoryClick("gemüse")}>
          <button>🥑</button>
          <p>Gemüse</p>
        </div>
        <div className="buttons" onClick={() => handleCategoryClick("bohnen")}>
          <button>🫛</button>
          <p>Bohnen</p>
        </div>
        <div className="buttons" onClick={() => handleCategoryClick("pilze")}>
          <button>🧄</button>
          <p>Pilze</p>
        </div>
        <div className="buttons" onClick={() => handleCategoryClick("eier")}>
          <button>🥚</button>
          <p>Eier</p>
        </div>
      </div>
      <div className="products-teil3-foto">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-img">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-price-name">
              <div className="products-name-price">
                <h3>{product.name}</h3>
                <p>{product.price} €/kg</p>
              </div>
              <div className="products-buy">
                {/* <p>{product.price} €/kg</p> */}
                <button onClick={() => handleBuyClick(product.id)}>🛒</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
