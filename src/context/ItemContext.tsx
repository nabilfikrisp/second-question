import { createContext, useContext } from "react";

interface ItemProps {
  name: string;
  qty: number;
  price: number | string;
}

export const ItemContext = createContext<ItemProps | undefined>(undefined);

// error handler for undefined context
export function useItemContext() {
  const item = useContext(ItemContext);

  if (item === undefined) {
    throw new Error(
      "item context must be used with ItemContext.Provider with value"
    );
  }

  return item;
}
