import Head from "next/head";
import Image from "next/image";
import { Box, Typography, styled } from "@mui/material";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import DefaultLayout from "@/layouts/Default/Default.layout";
import CardProduct from "@/features/CardProduct/CardProduct";
import { GetServerSideProps } from "next";
import { wrapper } from "@/redux/store";
import {
  getListOfProducts,
  getRunningQueriesThunkSetService,
  useGetListOfProductsQuery,
} from "@/services/productSetServices/productSetServices";
import handleSSRIsMobile from "@/utils/SSR/handleSSRIsMobile";
import priceFormatter from "@/utils/helpers/priceFormatter";
import transformAmountcolorsToText from "@/utils/helpers/transformAmountColorsToText";

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    handleSSRIsMobile(ctx.req, store);
    try {
      store.dispatch(getListOfProducts.initiate());
      const query = getRunningQueriesThunkSetService();
      await Promise.all(store.dispatch(query));
      return { props: {} };
    } catch (error) {
      return {
        props: {},
      };
    }
  });

const StyledCardListContainer = styled("div")(
  ({ theme }) => `
display: grid;
grid-template-columns: 1fr; 
padding-top: 1rem;
gap: 1rem;
${theme.breakpoints.up("lg")}{
  grid-template-columns: 1fr 1fr 1fr; 
}
`
);

const Home: NextPageWithLayout = () => {
  const { data } = useGetListOfProductsQuery();
  return (
    <>
      <Head>
        <title>DB costumes wear</title>
        <meta name="description" content="Ropa de pole dance para hombres y mujeres." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box mb="32px">
        <Typography variant="h1" color="black" p="1rem">
          Ropa de pole dance para hombres y mujeres.
        </Typography>
        <Box height="80vh" width="100%" position="relative" top="0">
          <Image
            src="/headerHome.jpeg"
            fill
            alt=""
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="rgba(0, 0, 0, 0.7)"
            p="0 .5rem"
            position="absolute"
            top="0%"
            zIndex="999"
            width="100%"
          >
            <Typography variant="h2" align="center" color="white" p="1rem">
              Temporada Autumn Winter
            </Typography>
          </Box>
        </Box>
        <Typography variant="h2" align="center" p="1rem">
          Nuestros Sets
        </Typography>
        {!!data?.length && (
          <StyledCardListContainer>
            {data.map((set) => (
              <CardProduct
                id={set.id}
                title={set.name}
                price={priceFormatter(set.price)}
                img={set.images[0]} // arreglar imagen
                info={transformAmountcolorsToText(set.colors.length)} // e.colors => formatear texto
                subTitle={set.season} // temporada
                key={set.name}
              />
            ))}
          </StyledCardListContainer>
        )}
      </Box>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
