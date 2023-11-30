import DefaultLayout from "@/layouts/Default/Default.layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";
import ProductActionSection from "@/sections/productDetail/ProductActionSection/ProductActionSection";
import ProductDetailsHeader from "@/sections/productDetail/ProductDetailsHeader/ProductDetailsHeader";
import ProductDescriptionSection from "@/sections/productDetail/ProductDescriptionSection/ProductDescriptionSection";

const ProductDetails: NextPageWithLayout = () => {
  const { query } = useRouter();
  const description = "de prueba";
  return (
    <>
      {/* 
      Head */}
      <ProductDetailsHeader
        title="Temporada que se yo"
        price="$ 1.000"
        image="/headerHome.jpg"
      />
      {/* ProductCustomizationSection */}
      <ProductActionSection
        productId={query.id as string}
        colors={[]}
        sizes={[]}
      />
      {/* 
      ProductDescriptionSection
      */}
      <ProductDescriptionSection>{description}</ProductDescriptionSection>
    </>
  );
};

ProductDetails.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default ProductDetails;

/* 
id: string;
Header -> imagen, titulo y precio.
Main -> talle, color y boton de consultar(whatsapp).
Footer -> descripción del producto. 


ProductDetails:{


  id,
  imagenes, 
  titulo,
  precio,
  talle,
  color

}


Tareas 
-- Logica --
1- Levantar RTK y RTK Query
2- Crear slice App {
  isMobile
}
3- Tipar Image
4- Tipar El ProductDetails JSON

-- UI --
1- Header ->

Crear variante title h1 en mui para tipography
Crear variante price para Typography
Adaptar Imagen

2- main->

Tipar ProductDetailsPage 
Crear State ProductActionsState {talle, color }
Crear componente para cambiar los colores
Crear component para cambiar el talle
Crear componente que se encargue de mandar la consulta



3- description ->
Crear variante h2
Crear variante description



*/
