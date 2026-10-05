import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import BookCover from '@/components/shared/BookCover';

const CartDrawer = () => {
  const { cartItems, isCartOpen, toggleCart, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();
  const { requireAuth } = useAuth();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-[60] transition-opacity" onClick={toggleCart} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-yellow-400">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="font-bold text-lg">Your Cart ({cartCount})</h2>
          </div>
          <button onClick={toggleCart} className="p-1 hover:bg-yellow-500 rounded-full transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
              <ShoppingBag className="h-16 w-16 opacity-30" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <button onClick={toggleCart} className="text-sm bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                  <div className="w-[60px] h-[85px] shrink-0 rounded overflow-hidden">
                    <BookCover coverData={item.coverData} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{item.title}</h4>
                    <p className="text-xs text-gray-500 mb-2">{item.author}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-white rounded-full border px-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-bold w-5 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-bold text-sm">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="self-start p-1 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold text-lg">₹{cartTotal}</span>
            </div>
            <button
              onClick={() => { toggleCart(); requireAuth('checkout'); }}
              className="w-full py-3 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors active:scale-[0.98]"
            >
              Checkout →
            </button>
            <button onClick={toggleCart} className="w-full py-2 mt-2 text-sm text-gray-500 hover:text-black transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
