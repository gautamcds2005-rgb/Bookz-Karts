import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Truck, Shield, MapPin, Phone } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import BookCover from '@/components/shared/BookCover';

const CheckoutPage = () => {
  const { user, navigateTo } = useAuth();
  const { cartItems, cartTotal, cartCount, updateQuantity, removeFromCart } = useCart();
  const [step, setStep] = useState('checkout'); // 'checkout' | 'payment' | 'success'
  const [address, setAddress] = useState({
    fullName: user?.name || '',
    phone: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [orderId] = useState(`BKZ-${Date.now().toString(36).toUpperCase()}`);

  const deliveryCharge = cartTotal >= 499 ? 0 : 49;
  const grandTotal = cartTotal + deliveryCharge;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setStep('success');
  };

  if (cartItems.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Add some books to get started!</p>
          <button onClick={() => navigateTo('home')} className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors">
            Browse Books
          </button>
        </div>
      </div>
    );
  }

  // ---- ORDER SUCCESS ----
  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full text-center animate-fade-in">
          <div className="text-7xl mb-6 animate-bounce-once">🎉</div>
          <h1 className="text-3xl font-black text-gray-900 mb-2">Order Placed!</h1>
          <p className="text-gray-500 mb-6">Thank you for shopping with Bookz, {user?.name}!</p>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6 text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">Order ID</span>
              <span className="font-mono font-bold text-sm bg-yellow-100 px-3 py-1 rounded-full">{orderId}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">Total Amount</span>
              <span className="font-bold text-lg text-green-600">₹{grandTotal}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">Payment</span>
              <span className="font-medium text-sm">{paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod === 'upi' ? 'UPI' : 'Card'}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 bg-green-50 rounded-xl p-3">
              <Truck className="h-4 w-4 text-green-600" />
              <span>Estimated delivery in <strong className="text-green-700">3-5 business days</strong></span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigateTo('home')}
              className="flex-1 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition-colors active:scale-[0.98]"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---- CHECKOUT FORM ----
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-yellow-400 py-4 px-4 md:px-8 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <button onClick={() => navigateTo('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-bold text-lg">Bookz</span>
          </button>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-700" />
            <span className="text-sm font-medium">Secure Checkout</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePlaceOrder}>
              {/* Delivery Address */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-yellow-500" />
                  Delivery Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text" required value={address.fullName}
                      onChange={(e) => setAddress({...address, fullName: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="tel" required value={address.phone}
                        onChange={(e) => setAddress({...address, phone: e.target.value})}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <input
                      type="text" required value={address.street}
                      onChange={(e) => setAddress({...address, street: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="House no, Building, Street, Area"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text" required value={address.city}
                      onChange={(e) => setAddress({...address, city: e.target.value})}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="City"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                      <input
                        type="text" required value={address.state}
                        onChange={(e) => setAddress({...address, state: e.target.value})}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                      <input
                        type="text" required value={address.pincode}
                        onChange={(e) => setAddress({...address, pincode: e.target.value})}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="6-digit pincode"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-yellow-500" />
                  Payment Method
                </h2>
                <div className="space-y-3">
                  {[
                    { id: 'cod', label: 'Cash on Delivery', icon: '💵', desc: 'Pay when you receive' },
                    { id: 'upi', label: 'UPI', icon: '📱', desc: 'Google Pay, PhonePe, Paytm' },
                    { id: 'card', label: 'Credit / Debit Card', icon: '💳', desc: 'Visa, Mastercard, RuPay' },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        paymentMethod === method.id
                          ? 'border-yellow-400 bg-yellow-50'
                          : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <input
                        type="radio" name="payment" value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-yellow-500 focus:ring-yellow-400"
                      />
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <p className="font-semibold text-sm">{method.label}</p>
                        <p className="text-xs text-gray-500">{method.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Place Order (Mobile) */}
              <div className="lg:hidden">
                <button
                  type="submit"
                  className="w-full py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors active:scale-[0.98] shadow-lg"
                >
                  Place Order — ₹{grandTotal}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-lg font-bold mb-4">Order Summary ({cartCount} items)</h2>

              <div className="space-y-4 max-h-[300px] overflow-y-auto mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-[50px] h-[70px] shrink-0 rounded overflow-hidden">
                      <BookCover coverData={item.coverData} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.author}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                        <span className="text-sm font-bold">₹{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Delivery</span>
                  <span className={deliveryCharge === 0 ? 'text-green-600 font-medium' : ''}>
                    {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                  </span>
                </div>
                {deliveryCharge === 0 && (
                  <p className="text-[11px] text-green-600">🎉 Free delivery on orders above ₹499</p>
                )}
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              {/* Place Order (Desktop) */}
              <button
                type="submit"
                onClick={handlePlaceOrder}
                className="hidden lg:block w-full mt-5 py-3.5 bg-yellow-400 text-black rounded-full font-bold text-base hover:bg-yellow-500 transition-colors active:scale-[0.98] shadow-md"
              >
                Place Order
              </button>

              <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 justify-center">
                <Shield className="h-3 w-3" />
                <span>Your payment information is secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
