import twitterLogo from "##/icons/Twitter-logo.svg";
export const Loader = ({ showLoader }: { showLoader: boolean }) => {
  return (
    <div
      className={`${
        showLoader ? "hidden" : ""
      } absolute flex justify-center items-center w-screen h-screen`}
    >
      <img src={twitterLogo} className="w-16 h-16" alt="twitter-logo" />
    </div>
  );
};

export default Loader;
