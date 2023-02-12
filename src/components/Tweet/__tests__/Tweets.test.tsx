import { render } from "@testing-library/react";
import Tweets from "../Tweet";

describe("Tweets Test", () => {
  it("should render the basic layout of a Tweets", async () => {
    const mockTweets = {
      avatar: "https://deafult_avatar.com",
      name: "Charlie Brown",
      username: "charlieBrown",
      isVerified: true,
      createdAt: new Date().getTime(),
      tweet: "<div>the first tweet</div>",
      commentsNum: 10,
      likeNum: 10,
      retweetNum: 122,
      id: "id",
    };

    const { container } = render(<Tweets {...mockTweets} />);
    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="flex justify-between px-4 py-3 border-b-[1px] border-dark-border"
  >
    <div
      class="mr-3 min-w-fit w-12"
    >
      <img
        alt="charlieBrown-avatar"
        class="rounded-full "
        height="48"
        src="https://deafult_avatar.com"
        width="48"
      />
    </div>
    <div>
      <div
        class="flex items-center justify-between"
      >
        <span
          class="text-white font-bold overflow-hidden text-ellipsis max-w-[24vw] whitespace-nowrap"
        >
          Charlie Brown
        </span>
        <svg
          aria-hidden="true"
          class="svg-inline--fa fa-certificate fa-inverse "
          data-icon="certificate"
          data-prefix="fas"
          focusable="false"
          role="img"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.3-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"
            fill="currentColor"
          />
        </svg>
        <span
          class="text-dark-grey text-ellipsis max-w-[24vw] whitespace-nowrap overflow-hidden"
        >
          @
          charlieBrown
        </span>
        <span
          class="text-dark-grey"
        >
          a few seconds
        </span>
        <svg
          aria-hidden="true"
          class="svg-inline--fa fa-ellipsis fa-inverse "
          data-icon="ellipsis"
          data-prefix="fas"
          focusable="false"
          role="img"
          style="color: rgb(113, 118, 123);"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 256a56 56 0 1 1 112 0A56 56 0 1 1 0 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div
        class="text-white"
      >
        <div>
          the first tweet
        </div>
      </div>
      <div
        class="flex flex-row justify-between mt-3"
      >
        <div>
          <svg
            aria-hidden="true"
            class="svg-inline--fa fa-comment "
            data-icon="comment"
            data-prefix="fas"
            focusable="false"
            role="img"
            style="color: rgb(113, 118, 123);"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
              fill="currentColor"
            />
          </svg>
          <span
            class="text-dark-grey text-[0.8125rem] px-2"
          >
            10
          </span>
        </div>
        <div>
          <svg
            aria-hidden="true"
            class="svg-inline--fa fa-retweet "
            data-icon="retweet"
            data-prefix="fas"
            focusable="false"
            role="img"
            style="color: rgb(113, 118, 123);"
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z"
              fill="currentColor"
            />
          </svg>
          <span
            class="text-dark-grey text-[0.8125rem] px-2"
          >
            122
          </span>
        </div>
        <div>
          <svg
            aria-hidden="true"
            class="svg-inline--fa fa-heart "
            data-icon="heart"
            data-prefix="fas"
            focusable="false"
            role="img"
            style="color: rgb(113, 118, 123);"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
              fill="currentColor"
            />
          </svg>
          <span
            class="text-dark-grey text-[0.8125rem] px-2"
          >
            10
          </span>
        </div>
        <div>
          <svg
            aria-hidden="true"
            class="svg-inline--fa fa-arrow-up-from-bracket "
            data-icon="arrow-up-from-bracket"
            data-prefix="fas"
            focusable="false"
            role="img"
            style="color: rgb(113, 118, 123);"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div>
          <svg
            aria-hidden="true"
            class="svg-inline--fa fa-wave-square "
            data-icon="wave-square"
            data-prefix="fas"
            focusable="false"
            role="img"
            style="color: rgb(113, 118, 123);"
            viewBox="0 0 640 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M128 64c0-17.7 14.3-32 32-32H320c17.7 0 32 14.3 32 32V416h96V256c0-17.7 14.3-32 32-32H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H512V448c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V96H192V256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h96V64z"
              fill="currentColor"
            />
          </svg>
          <span
            class="text-dark-grey text-[0.75 rem] px-2"
          >
            Tip
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
`);
  });
});
