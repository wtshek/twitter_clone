type LoaderQueue = {
  add(id: string): void;
  remove(id: string): void;
};

export interface LoaderContextInterface {
  isLoaderShown: boolean;
  loaderQueue: LoaderQueue;
}

export type LoaderActions = {
  showLoader: () => void;
  hideLoader: () => void;
};
