interface Product {
  id: string;
  name: string;
  price: number;
  url: string;
  sizes?: string[];
  colors?: string[];
  description?: string;
  brand?: string;
  category?: string;
  stock?: number;
  // ...otras propiedades opcionales del producto
}
export default Product;
