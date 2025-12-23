// components/Modal.js
import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto-close after 3 seconds
      return () => {
        document.body.style.overflow = 'unset';
        clearTimeout(timer);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      <div className="relative z-10 w-full max-w-md bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl overflow-hidden border border-purple-500/30 shadow-xl">
        <div className="p-8 text-center">
          {children}
        </div>
        
        {/* Animated progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500/30">
          <div 
            className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
            style={{ animation: 'progress 3s linear forwards' }}
          />
        </div>
      </div>
    </div>
  );
}