import { createContext, useState } from "react";
import { LoaderContextInterface } from "./types";
import { LoaderQueue } from "./LoaderQueue";
import Loader from "./Loader";

export const LoaderContext = createContext<LoaderContextInterface | undefined>(
  undefined
);

export const LoaderProvider = ({ children }: { children: JSX.Element }) => {
  const [isLoading, setIsLoading] = useState(false);

  const loaderActions = {
    showLoader: () => setIsLoading(true),
    hideLoader: () => setIsLoading(false),
  };

  const loaderQueue = new LoaderQueue(loaderActions);

  return (
    <LoaderContext.Provider
      value={{
        isLoaderShown: isLoading,
        loaderQueue,
      }}
    >
      <Loader showLoader={!isLoading} />
      {children}
    </LoaderContext.Provider>
  );
};
