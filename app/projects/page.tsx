'use client';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import projectsData from '@/data/projectsData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { useStyledComponentsRegistry } from 'lib/StyledComponentsRegistry';

export default function Projects() {
  const { StyledComponentsRegistry, getStyleTags } = useStyledComponentsRegistry();
  const [styleTags, setStyleTags] = useState<string>('');

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  };

  useEffect(() => {
    const initialStyleTags = getStyleTags();

    if (!initialStyleTags) return;

    setStyleTags(initialStyleTags);
  }, [styleTags]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: styleTags }} />
      <StyledComponentsRegistry>
        <Container>
          <StyledSlider {...settings}>
            {projectsData.map((d) => (
              <div key={d.title} className="px-4">
                <ImageCard
                  bgSrc={d.imgSrc}
                  onClick={() => window.open(d.href, '_blank')}
                >
                  <Dimmed />
                  <Title> {d.title} </Title>
                </ImageCard>
              </div>
            ))}
          </StyledSlider>
        </Container>
      </StyledComponentsRegistry>
    </>
  );
}

const Container = styled.div`
  padding-top: var(--Spacing-9, 36px);
  padding-bottom: var(--Spacing-9, 36px);
  height: auto;
  border-radius: var(--Border-radius-2, 8px);
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center; 
  }

  .slick-slide > div {
    display: flex;
    width: 100%;
    justify-content: center;

}

  .slick-track {
    display: flex;
    align-items: center;
  }
`;

const ImageCard = styled.div<{ bgSrc }>`
  position: relative;
  background-image: url(${(props) => props.bgSrc});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;
  border-radius: var(--Border-radius-2, 8px);

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }

`;

const Dimmed = styled.div`
  position: absolute;
  width: 100%;
  height: 500px;
  background: var(--Color-Grayscale-dim-black-30);
  border-radius: var(--Border-radius-2, 8px);

`;

const Title = styled.h2`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px; 
  transition: all 0.5s;
  -webkit-text-stroke: 4px var(--Color-Grayscale-00);
  font-size: 4rem;
  text-align: center;
  color: transparent;
  font-family: "Meta", sans-serif;
  text-shadow: 10px 10px 0px #07bccc,
    15px 15px 0px #e601c0,
    20px 20px 0px #e9019a,
    25px 25px 0px #f40468,
    45px 45px 10px #482896;

  &:hover {
    text-shadow: none;
  }

  @media (max-width: 768px) {
    text-shadow: 10px 10px 0px #07bccc,
    15px 15px 0px #e601c0,
    20px 20px 0px #e9019a,
    25px 25px 0px #f40468,
    45px 45px 10px #482896;
    white-space: normal;
  }
`;