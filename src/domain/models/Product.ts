import Image from "./Image";

interface Product {
  id: string;
  name: string;
  price: number | null;
  images: Image[];
  sizes?: string[];
  colors?: string[];
  description?: string;
  category?: string;
  stock?: number;
  // ...otras propiedades opcionales del producto
}
export default Product;
