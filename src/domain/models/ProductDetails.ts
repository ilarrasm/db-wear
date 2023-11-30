import Product from "./Product";

interface ProductDetail extends Product {
  description: string;
  sizes: string[];
  colors: string[];
}
export default ProductDetail;
