import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components'

const waveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(270%);
  }
  100% {
    transform: translateX(0);
  }
`;

// 로고 컨테이너에 대한 스타일
const LogoContainer = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  padding-top: 20%;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  margin-right : 10px;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

// 로고 이미지에 대한 스타일
const LogoImage = styled.img`
  width: auto;
  height: auto;
`;

const Wave = styled.div`
  width: 70px;
  height: 70px;
  padding-top: 20%;
  background: url(https://i.pinimg.com/originals/9a/45/d9/9a45d9cfc41af280fa36ae0d4b834e65.gif) repeat-x bottom;
  background-size: 100% 100%;  /* 배경 이미지 크기 조절 */
  animation: ${waveAnimation} 2s linear infinite;
`;

// 오버레이 텍스트에 대한 스타일
const OverlayText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 11px;
  color: #fff;
  padding: 10px;
  background-color: pink;
`;

const LogoComponent = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LogoContainer
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <LogoImage
        src={src}
        alt="Logo"
      />
      {isHovered && <Wave />}
    </LogoContainer>
  );
};

export default LogoComponent;
