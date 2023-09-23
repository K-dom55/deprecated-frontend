'use client';

import ShareKakao from '@/components/atoms/ShareKakao';
import React from 'react';
import Script from 'next/script';
import ShareTwitter from '@/components/atoms/ShareTwitter';
import ShareNative from '@/components/atoms/ShareNative';

export default function Result() {
  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
        integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        onLoad={() => {
          window.Kakao.init(process.env.NEXT_PUBLIC_JS_KEY);
        }}
      />
      <div>
        <ShareKakao />
        <ShareTwitter />
        <ShareNative />
      </div>
    </>
  );
}
