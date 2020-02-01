import React, { useState } from 'react';
import { Wrapper, Text, SVG } from './styles/Refund-style';
import RefundFlyout from './RefundFlyout';

const Refund = ({ price }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      { toggle
        ? <RefundFlyout />
        : <></> }
      <Text onClick={() => setToggle(!toggle)}>
        Bluefin Refund: $
        { Math.floor(price * 0.0037) }
      </Text>
      <SVG width="13pt" height="13pt" viewBox="0 0 1000 1000" onClick={() => setToggle(!toggle)}>
        <g transform="translate(0, 1000) scale(0.13000,-0.13000)" stroke="none">
          <path d="M3225 6770 c-106 -10 -297 -37 -360 -51 -369 -83 -557 -149 -865
          -303 -592 -297 -1126 -833 -1421 -1425 -101 -204 -148 -320 -202 -491 -83
          -266 -120 -454 -147 -745 -23 -253 0 -667 51 -890 46 -201 92 -370 115 -422 8
          -17 14 -37 14 -45 0 -7 6 -25 14 -40 8 -14 20 -43 26 -65 25 -73 157 -348 218
          -450 95 -160 230 -347 348 -484 151 -174 396 -399 564 -519 200 -142 323 -212
          605 -345 120 -57 356 -136 530 -179 172 -41 197 -46 315 -62 521 -70 968 -32
          1470 123 152 47 290 104 480 198 368 181 711 449 999 780 120 139 135 158 256
          335 147 214 287 503 376 774 114 348 168 680 168 1036 0 346 -47 650 -156
          1000 -34 108 -85 247 -118 315 -134 283 -195 391 -348 608 -162 231 -510 579
          -738 738 -74 51 -231 153 -283 183 -138 80 -501 246 -538 246 -5 0 -24 6 -41
          14 -52 23 -212 67 -422 115 -215 49 -655 74 -910 51z m880 -1105 c178 -79 281
          -232 280 -420 -2 -239 -179 -426 -421 -442 -182 -12 -356 91 -434 260 -54 114
          -51 277 7 391 54 106 190 211 306 236 74 16 195 4 262 -25z m134 -1280 c17
          -20 31 -44 31 -53 0 -20 -21 -75 -94 -247 -26 -60 -65 -153 -87 -205 -22 -52
          -44 -104 -49 -115 -5 -11 -30 -69 -55 -130 -26 -60 -50 -119 -55 -130 -5 -11
          -30 -69 -55 -130 -25 -60 -61 -146 -80 -190 -19 -44 -52 -125 -75 -180 -43
          -105 -87 -212 -126 -305 -104 -252 -114 -305 -61 -344 51 -38 297 -32 445 10
          43 13 59 14 82 4 46 -19 59 -50 76 -187 9 -70 18 -143 21 -161 7 -44 -16 -76
          -85 -115 -62 -35 -160 -77 -179 -77 -7 0 -39 -8 -70 -18 -187 -60 -426 -96
          -643 -97 -171 0 -176 1 -226 27 -60 32 -107 82 -125 135 -19 52 -17 231 3 313
          9 36 25 99 36 140 51 185 65 239 77 290 7 30 22 90 34 133 12 42 30 112 42
          155 12 42 27 102 35 132 23 95 84 325 104 390 25 86 5 154 -58 193 -83 52
          -185 72 -452 88 -101 6 -193 15 -203 20 -10 6 -22 21 -27 35 -13 34 -13 320 0
          344 17 31 48 43 170 61 63 10 176 27 250 39 74 12 176 28 225 35 50 8 149 24
          220 35 72 11 186 29 255 40 69 10 184 28 255 40 72 12 175 28 229 36 55 8 102
          16 104 19 3 3 22 5 43 5 30 0 43 -7 68 -35z"
          />
        </g>
      </SVG>
      <div>Savings when you buy with a Bluefin Agent</div>
    </Wrapper>
  );
};

export default Refund;
