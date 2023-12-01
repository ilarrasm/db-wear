import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import ProductDetail from "@/domain/models/ProductDetails";

export const productSetServices = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    ProductSetDetail: builder.query<ProductDetail, string>({
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
  }),
});

export const { useProductSetDetailQuery } = productSetServices;

export default productSetServices;

/* 
 const setSnapshot = await getDocs(ProductSet);
          const cityList = setSnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          console.log({ cityList });

*/
