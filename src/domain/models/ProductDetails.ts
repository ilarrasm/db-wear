import Product from "./Product";

interface ProductDetail extends Product {
  description: string;
  size: string[];
  colors: string[];
}
export default ProductDetail;
