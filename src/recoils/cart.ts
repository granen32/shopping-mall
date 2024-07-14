import { atom, selectorFamily } from "recoil";

const cartState = atom<Map<string, number>>({
  key: "cartState",
  default: new Map(),
});

export const useCartItem = selectorFamily({
  key: "cartItem",
  get:
    (id: string) =>
    ({ get }) => {
      const carts = get(cartState);
      return carts.get(id);
    },
});
