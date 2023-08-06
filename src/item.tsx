import { useEffect } from "react";
import { useItemContext } from "./context/ItemContext";

function Item() {
  const props = useItemContext();
  useEffect(() => console.log("data", props), []);
  return (
    <div className="item">
      <span>Hello World</span>
    </div>
  );
}
export default Item;
