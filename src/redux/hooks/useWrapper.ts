import { AppProps } from "next/app";
import { wrapper } from "../store";

const useWrapper = (rest: Omit<AppProps, "Component">) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return { store, props };
};

export default useWrapper;
