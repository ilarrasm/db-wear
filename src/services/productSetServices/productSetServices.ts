import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import ProductDetail from "@/domain/models/ProductDetails";
import { HYDRATE } from "next-redux-wrapper";
import { db } from "../../../firebase";
const indexCollections = [
  "Adventure Collection",
  "Kyra's collection",
  "Wings Collection",
];
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
          const ProductSet = doc(db, "productSet", idSet);
          const documentoSnapshot = await getDoc(ProductSet);
          if (documentoSnapshot.exists()) {
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
        const ProductSet = collection(db, "productSet");
        const setSnapshot = await getDocs(ProductSet);
        const SetsList = setSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as ProductDetail[];
        const ListSorted = SetsList.sort(
          (a: ProductDetail, b: ProductDetail) => {
            const prioridadA = indexCollections.includes(a.season);
            const prioridadB = indexCollections.includes(b.season);

            if (prioridadA && !prioridadB) {
              return -1;
            } else if (!prioridadA && prioridadB) {
              return 1;
            }

            return a.season.localeCompare(b.season);
          }
        );
        return { data: ListSorted as ProductDetail[] };
      },
    }),
    postProduct: builder.mutation<ProductDetail, void>({
      query: async () => {
        const ProductSet = doc(db, "productSet");
        // colors[] description: string, images[{src: string, alt: string}],
        // name: string, price: number, season: string, size: string[]
        const newProduct = {
          name: "Set Regina",
          description: `Nuestro exitoso top es laminado y delicado,
          diseñado con un tejido suave que acaricia tu
          cuerpo en cada entrenamiento. Ofrece cobertura
          frontal y comodidad, con detalles laminados que
          realzan su elegancia. Las tiras en la parte
          posterior, dispuestos en forma de cruz, añaden un
          toque distintivo y ajustable. Siéntete una reina
          con este top que combina estilo y funcionalidad,
          elevando tu experiencia de entrenamiento a un
          nuevo nivel.
          Nuestros colores favoritos ahora cuentan con un
          laminado especial que te hará lucir elegante.
          Estas prendas presentan una cintura alta,
          aberturas en los laterales y un trasero ceñido para
          resaltar tu figura. Disponibles en cuatro colores
          diferentes, podrás encontrar la opción que se
          adapta perfectamente a tu estilo. Descubre la
          elegancia en cada movimiento con nuestra
          colección de colores laminados`,
          colors: ["Rojo", "Prueba", "Prueba"],
          images: [{ src: "", alt: "" }],
          price: 9,
          season: "",
          size: ["XS", "S", "M", "L", "XL"],
        };
        setDoc(ProductSet, newProduct);
        return;
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
