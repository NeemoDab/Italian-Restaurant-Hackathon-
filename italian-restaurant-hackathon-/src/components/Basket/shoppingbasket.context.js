import { useContext, createContext, useState } from "react";

const ShoppingBasketContext = createContext({ items: [], setItems: () => {} });

const useShoppingBasketContext = () => useContext(ShoppingBasketContext);

const localItems =
  JSON.parse(localStorage.getItem("shoppingBasketContents")) ?? [];

const ShoppingBasketContextProvider = ({ children }) => {
  const [items, setItems] = useState(localItems);

  const setShoppingBasketItems = (shoppingBasketContents) => {
    localStorage.setItem(
      "shoppingBasketContents",
      JSON.stringify(shoppingBasketContents)
    );
    setItems(shoppingBasketContents);
  };

  return (
    <>
      <ShoppingBasketContext.Provider
        value={{ items, setItems: setShoppingBasketItems }}
      >
        {children}
      </ShoppingBasketContext.Provider>
    </>
  );
};

export { ShoppingBasketContextProvider, useShoppingBasketContext };
