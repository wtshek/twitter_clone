import { FC, useEffect, useLayoutEffect } from "react";
import { COLORS, DEFAULT_AVATAR_URL } from "##/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faEllipsis,
  faComment,
  faRetweet,
  faHeart,
  faArrowUpFromBracket,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import { GreyTextSpan, ThemedText, ThemedTextSpan } from "../Text/Text";
import moment from "moment";
import { TweetType } from "##/utils/types";

const AVATAR_DEFAULT_WIDTH = 48;
const AVATAR_DEFAULT_HEIGHT = 48;

const ICON_TEXT_SIZE = 0.8125;

export const Tweet: FC<TweetType> = ({
  name,
  avatar,
  username,
  tweet,
  isVerified,
  createdAt,
  commentsNum,
  likeNum,
  retweetNum,
}) => {
  const actions = [
    { icon: faComment, count: commentsNum },
    { icon: faRetweet, count: retweetNum },
    { icon: faHeart, count: likeNum },
  ];

  useLayoutEffect(() => {
    moment.updateLocale("en", {
      relativeTime: {
        past: "%s",
        hh: "%d h",
        h: "1 h",
      },
    });
  }, []);

  return (
    <div className="flex justify-between px-4 py-3 border-b-[1px] border-dark-border">
      <div className="mr-3 min-w-fit w-12">
        <img
          src={avatar || DEFAULT_AVATAR_URL}
          alt={`${username}-avatar`}
          width={AVATAR_DEFAULT_WIDTH}
          height={AVATAR_DEFAULT_HEIGHT}
          className="rounded-full "
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <ThemedTextSpan className="font-bold overflow-hidden text-ellipsis max-w-[24vw] whitespace-nowrap">
            {name}
          </ThemedTextSpan>
          {isVerified && <FontAwesomeIcon icon={faCertificate} inverse />}
          <GreyTextSpan className="text-ellipsis max-w-[24vw] whitespace-nowrap overflow-hidden">
            @{username}
          </GreyTextSpan>
          <GreyTextSpan>{moment(createdAt).fromNow(true)}</GreyTextSpan>
          <FontAwesomeIcon
            icon={faEllipsis}
            inverse
            style={{ color: COLORS.darkGrey }}
          ></FontAwesomeIcon>
        </div>
        <ThemedText dangerouslySetInnerHTML={{ __html: tweet }}></ThemedText>
        <div className="flex flex-row justify-between mt-3">
          {actions.map((action, index) => (
            <div key={`action-${index}`}>
              <FontAwesomeIcon
                icon={action.icon}
                style={{ color: COLORS.darkGrey }}
              ></FontAwesomeIcon>
              <GreyTextSpan className={`text-[${ICON_TEXT_SIZE}rem] px-2`}>
                {action.count}
              </GreyTextSpan>
            </div>
          ))}
          <div>
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              style={{ color: COLORS.darkGrey }}
            ></FontAwesomeIcon>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faWaveSquare}
              style={{ color: COLORS.darkGrey }}
            ></FontAwesomeIcon>
            <GreyTextSpan className={`text-[0.75 rem] px-2`}>Tip</GreyTextSpan>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
