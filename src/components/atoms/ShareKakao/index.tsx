/* eslint-disable*/
"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect } from "react";
// kakao 기능 동작을 위해 넣어준다.

const Button = styled.button`
  width: 24px;
  height: 24px;
`;

export default () => {
  const { Kakao } = window;
  // 배포한 자신의 사이트
  const realUrl = "http:localhost:3001";
  // 로컬 주소 (localhost 3000 같은거)
  const resultUrl = "http:localhost:3000";

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "오늘의 디저트",
        description: "아메리카노, 빵, 케익",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <>
      <Button onClick={shareKakao}>
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
        />
      </Button>
    </>
  );
};
