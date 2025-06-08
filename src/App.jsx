import { useState } from "react";
import { ShoppingCart, Gift, Mail } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Birthday Bliss Box",
    description: "Celebrate someone special with curated treats and joyful keepsakes.",
    price: "$45.00",
    image: "https://tyswarts.github.io/Embrace-Bloom/stock-box-1.png"
  },
  {
    id: 2,
    name: "Thinking of You Box",
    description: "Send love, comfort, and thoughtfulness in a beautiful package.",
    price: "$38.00",
    image: "https://tyswarts.github.io/Embrace-Bloom/stock-box-1.png"
  },
  {
    id: 3,
    name: "New Baby Box",
    description: "Welcome a new life with gifts for baby and thoughtful items for parents.",
    price: "$60.00",
    image: "https://tyswarts.github.io/Embrace-Bloom/stock-box-1.png"
  }
];

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight">Embrace & Bloom</h1>
        <p className="text-xl text-gray-600 mt-4">Thoughtful Gift Boxes for Every Occasion</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{product.name}</h2>
              <p className="text-base text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">{product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center px-4 py-2 text-sm font-medium bg-black text-white rounded hover:bg-gray-800 transition"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        <div className="flex items-center justify-center space-x-4">
          <Gift className="w-4 h-4" />
          <span>Perfect for birthdays, thank-yous, new babies, and more</span>
        </div>
        <div className="mt-4">
          <Mail className="inline-block w-4 h-4 mr-1" /> Contact us: hello@embraceandbloom.com
        </div>
        <p className="mt-2">© {new Date().getFullYear()} Embrace & Bloom</p>
      </footer>
    </div>
  );
}
