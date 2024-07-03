import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useProducts } from "../../context/cartContext";
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { cartQuantity } = useProducts();

  return (
    <Link to={'/cart'} >
      <Badge count={cartQuantity}>
        <ShoppingCartOutlined style={{ fontSize: "40px" }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
