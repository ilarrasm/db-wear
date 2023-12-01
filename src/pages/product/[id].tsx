import DefaultLayout from "@/layouts/Default/Default.layout";
import { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";
import ProductActionSection from "@/sections/productDetail/ProductActionSection/ProductActionSection";
import ProductDetailsHeader from "@/sections/productDetail/ProductDetailsHeader/ProductDetailsHeader";
import ProductDescriptionSection from "@/sections/productDetail/ProductDescriptionSection/ProductDescriptionSection";
import { useProductSetDetailQuery } from "@/services/productSetServices/productSetServices";
import { wrapper } from "@/redux/store";
import handleSSRIsMobile from "@/utils/SSR/handleSSRIsMobile";
import useIsMobile from "@/hooks/useIsMobile";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    handleSSRIsMobile(ctx.req, store);
    return { props: {} };
  }
);

const ProductDetails: NextPageWithLayout = () => {
  const { query } = useRouter();
  const isMobile = useIsMobile();

  const { data, isSuccess } = useProductSetDetailQuery(
    (query.id as string) || "",
    {
      skip: !query.id,
    }
  );

  if (!isSuccess) {
    return null;
  }
  console.log({ isMobile });
  return (
    <>
      {/* 
      Head */}
      <ProductDetailsHeader
        title={data?.name || ""}
        price={`$ ${data?.price}`} // crear formateador
        image={"/headerHome.jpg"}
      />
      {/* ProductCustomizationSection */}
      <ProductActionSection
        productId={data?.id || ""}
        colors={data?.colors || []}
        sizes={data?.sizes || []}
      />
      {/* 
      ProductDescriptionSection
      */}
      <ProductDescriptionSection>
        {data?.description || ""}
      </ProductDescriptionSection>
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
