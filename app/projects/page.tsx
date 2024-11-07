'use client';

import React from 'react';
import Slider from 'react-slick';
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

export default function Projects() {
  const { t } = useTranslation();

  const settings = {
    dots: true, 
    infinite: true,
    autoplay: true,
    speed: 1000, 
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

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t('Projects')}
          </h1>
        </div>
        <Container>
          <StyledSlider {...settings}>
            {projectsData.map((d) => (
              <div key={d.title} className="px-4">
                <Card
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                  status={d.status}
                />
              </div>
            ))}
          </StyledSlider>
        </Container>
      </div>
    </>
  );
}

const Container = styled.div`

`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center; 

    @media (min-width: 1024px) {
    transform: translateX(-25%);
    }
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
