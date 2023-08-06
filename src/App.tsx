// main.tsx
/**
 * @author PT Docheck Bagi Indonesia
 * @copyright © All rights reserved. DoCheck 2022
 */
import Item from "./item";
import { ItemContext } from "./context/ItemContext";

function Main() {
  const item = {
    name: "Bread",
    qty: 20,
    price: "$3" as string,
  };
  
  
  return (
    <div id="main">
      <ItemContext.Provider value={item}>
        <Item />
      </ItemContext.Provider>
    </div>
  );
}
export default Main;
