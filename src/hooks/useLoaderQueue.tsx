import { LoaderContext } from "##/components/Loader";
import { useContext } from "react";

export const useLoaderQueue = () => {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error("useIsLoaderShowing must be used within a LoaderProvider");
  }

  return context;
};

export default useLoaderQueue;
