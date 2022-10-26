import create from 'zustand';

interface priceProps {
  price: string;
  person: number;
  setPrice: (price: string) => void;
  increasePerson: () => void;
  decreasePerson: () => void;
}

const priceStore = create<priceProps>(set => ({
  price: '',
  person: 1,
  setPrice: price => set({ price }),
  increasePerson: () => set(state => ({ person: state.person + 1 })),
  decreasePerson: () => set(state => ({ person: state.person - 1 })),
}));

export default priceStore;
