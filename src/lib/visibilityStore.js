
import { create } from 'zustand';

const useVisibilityStore = create((set) => ({
  isVisible: true,
  setIsVisible: (value) => set({ isVisible: value }),
  mousePosition :{ x: 0, y: 0 },
  setMousePosition: (pos) => set ({mousePosition : pos })
  
}));

export default useVisibilityStore;
