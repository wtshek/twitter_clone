import { TwitterLogo } from "##/icons/Twitter-logo";

export const Loader = ({ showLoader }: { showLoader: boolean }) => {
  return (
    <div
      className={`${
        showLoader ? "hidden" : ""
      } absolute flex justify-center items-center w-screen h-screen`}
      data-testid="twitter-logo-loader"
    >
      <TwitterLogo className="w-16 h-16" />
    </div>
  );
};

export default Loader;
