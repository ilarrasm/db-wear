import DefaultLayout from "@/layouts/Default/Default.layout";
import { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";
import ProductActionSection from "@/sections/productDetail/ProductActionSection/ProductActionSection";
import ProductDetailsHeader from "@/sections/productDetail/ProductDetailsHeader/ProductDetailsHeader";
import ProductDescriptionSection from "@/sections/productDetail/ProductDescriptionSection/ProductDescriptionSection";
import {
  getProductSetDetail,
  getRunningQueriesThunkSetService,
  useGetProductSetDetailQuery,
} from "@/services/productSetServices/productSetServices";
import { wrapper } from "@/redux/store";
import handleSSRIsMobile from "@/utils/SSR/handleSSRIsMobile";
import useIsMobile from "@/hooks/useIsMobile";
import priceFormatter from "@/utils/helpers/priceFormatter";
import { Box, styled } from "@mui/material";
import Head from "next/head";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    handleSSRIsMobile(ctx.req, store);
    try {
      store.dispatch(
        getProductSetDetail.initiate((ctx.query.id as string) || "")
      );
      const query = getRunningQueriesThunkSetService();
      await Promise.all(store.dispatch(query));
      return { props: {} };
    } catch (error) {
      return {
        props: {},
      };
    }
  }
);

const StyledContainer = styled(`div`)(
  ({ theme }) => `
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-rows: 80vh repeat(2, auto);
  ${theme.breakpoints.up("lg")} {
  grid-template-rows: 80vh auto; 
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  text-align: justify;
  div:first-of-type {
    grid-area: 1 / 1 / 2 / 13;
  }
  div:nth-of-type(2) {
    grid-area: 2 / 10 / 3 / 13;
  }
  div:nth-of-type(3) {
    grid-area: 2 / 1 / 3 / 10;
  }
}`
);

const ProductDetails: NextPageWithLayout = () => {
  const { query } = useRouter();

  const { data } = useGetProductSetDetailQuery((query.id as string) || "", {
    skip: !query.id,
  });
  return (
    <>
      <Head>
        <title>{data?.name} - D&B costumes wear </title>
        <meta name="description" content={data?.description} />
      </Head>
      <Box display="flex" justifyContent="center" width="100%">
        <StyledContainer>
          <ProductDetailsHeader image={data?.images || []} />
          <ProductActionSection
            title={data?.name || ""}
            subTitle={data?.season || ""}
            price={priceFormatter(data?.price)} // crear formateador
            productId={data?.name || ""}
            colors={data?.colors || []}
            sizes={data?.size || []}
          />
          <ProductDescriptionSection>
            {data?.description || ""}
          </ProductDescriptionSection>
        </StyledContainer>
      </Box>
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
