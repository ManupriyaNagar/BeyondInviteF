"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import Image from "next/image";

const CartPage = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    // Save cart items to localStorage whenever cartItems changes
    if (!loading) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems, loading]);

  const updateQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id, size, color) => {
    setCartItems((prev) => prev.filter((item) => 
      !(item.id === id && item.size === size && item.color === color)
    ));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalSavings = cartItems.reduce(
    (acc, item) =>
      acc + ((item.originalPrice || item.price + 50) - item.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const handleContinueShopping = () => {
    router.push('/wedding');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#37514D] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your cart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Continue Shopping
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-1">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <button
              onClick={handleContinueShopping}
              className="bg-[#37514D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a3d39] transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}-${index}`}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <div className="space-y-1 text-sm text-gray-600 mb-3">
                        <p>Size: {item.size}</p>
                        <p>Color: <span className="inline-block w-4 h-4 rounded-full ml-1" style={{backgroundColor: item.color}}></span></p>
                        {item.customText && <p>Custom Text: "{item.customText}"</p>}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, "dec")}
                            className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, "inc")}
                            className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#37514D]">₹{(item.price * item.quantity).toFixed(2)}</p>
                          {item.originalPrice && (
                            <p className="text-sm text-gray-500 line-through">₹{(item.originalPrice * item.quantity).toFixed(2)}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id, item.size, item.color)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg p-6 shadow-sm h-fit">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                {totalSavings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Total Savings</span>
                    <span>-₹{totalSavings.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-[#37514D] text-white py-4 rounded-lg font-semibold hover:bg-[#2a3d39] transition-colors mb-3"
              >
                Proceed to Checkout
              </button>
              
              <button 
                onClick={handleContinueShopping}
                className="w-full border-2 border-[#37514D] text-[#37514D] py-3 rounded-lg font-semibold hover:bg-[#37514D] hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold">Frequently Asked Questions (FAQs)</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Find out more about our digital invitation services, customization
          options, delivery process, and more.
        </p>
        <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg">
          Read Before Order
        </button>
      </div>
    </div>
  );
};

export default CartPage;
