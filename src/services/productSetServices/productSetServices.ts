import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import ProductDetail from "@/domain/models/ProductDetails";
import { HYDRATE } from "next-redux-wrapper";

export const productSetServices = createApi({
  baseQuery: fakeBaseQuery(),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProductSetDetail: builder.query<ProductDetail, string>({
      queryFn: async (idSet) => {
        try {
          const ProductSet = doc(db, "ProductSet", idSet);
          const documentoSnapshot = await getDoc(ProductSet);
          if (documentoSnapshot.exists()) {
            // El documento existe, puedes acceder a los datos
            const data = documentoSnapshot.data();
            return {
              data: {
                ...data,
                id: documentoSnapshot.id,
              } as ProductDetail,
            };
          } else {
            return {};
          }
        } catch (error: any) {
          console.error(error.message);
          return { error: JSON.stringify(error.message) };
        }
      },
    }),
    getListOfProducts: builder.query<ProductDetail[], void>({
      queryFn: async () => {
        const ProductSet = collection(db, "ProductSet");
        const setSnapshot = await getDocs(ProductSet);
        const SetsList = setSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as ProductDetail[];
        return { data: SetsList };
      },
    }),
  }),
});

export const {
  useGetProductSetDetailQuery,
  useGetListOfProductsQuery,
  endpoints: { getProductSetDetail, getListOfProducts },
  util: { getRunningQueriesThunk: getRunningQueriesThunkSetService },
} = productSetServices;

export default productSetServices;

/* 
 const setSnapshot = await getDocs(ProductSet);
          const cityList = setSnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          console.log({ cityList });

*/
