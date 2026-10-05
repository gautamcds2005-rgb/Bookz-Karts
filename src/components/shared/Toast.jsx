import React from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Check } from 'lucide-react';

const Toast = () => {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] animate-toast-in">
      <div className="flex items-center gap-3 bg-gray-900 text-white px-5 py-3 rounded-full shadow-2xl">
        <div className="bg-green-500 rounded-full p-1">
          <Check className="h-3 w-3 text-white" />
        </div>
        <span className="text-sm font-medium">{toast}</span>
        <ShoppingCart className="h-4 w-4 text-yellow-400" />
      </div>
    </div>
  );
};

export default Toast;
