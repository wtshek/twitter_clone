import "./App.css";
import { LoaderContext } from "##/components/Loader/LoaderProvider";
import { useContext, useEffect } from "react";

function App() {
  const { loaderQueue } = useContext(LoaderContext);
  console.log(loaderQueue);

  useEffect(() => {
    loaderQueue.add("app-loading");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      loaderQueue.remove("app-loading");
    }, 1000);
  }, []);

  return <div className="bg-black w-screen h-screen"></div>;
}

export default App;
