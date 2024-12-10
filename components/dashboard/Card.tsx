"use client";
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Card = ({ title, description, content, size = 'large' }: {
  title?: string;
  description?: string;
  content?: any;
  size?: string;
}) => {
  const { t } = useTranslation();
  const getCharOrder = (currentNum: number) => String.fromCharCode(currentNum + 65);
  const isArray = Array.isArray(content);

  return (
    <CardContainer>
      <Title>{t(title || '')}</Title>
      <Description>{t(description || '')}</Description>
      <Content isArray={isArray} size={size}>
        {isArray
          ? content.map((row: string, index: number) => (
            <p key={`${index}_${row}`}>
              {index + 1}...  
              <a href='#'> {row} </a>
            </p>
          ))
          : content}
      </Content>
    </CardContainer>
  );
};

export default Card;


const CardContainer = styled.div`
  background-color: var(--Color-Grayscale-dim-black-50);
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: var(--Shadow-box);
`;

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--Color-Retro-Pink-06);
`;

const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: right;
  color: var(--Color-Grayscale-04);
`;

const Content = styled.div<{ isArray: boolean, size: string }>`
  color: var(--Color-Grayscale-03);
  text-align: ${({ isArray }) => (isArray ? 'left' : 'center')};
  font-size: ${({ size }) => (
    { large: '3rem', medium: '2rem', small: '1rem' }[size]
  )};
  font-weight: ${({ size }) => (size === 'large' ? '500' : '400')};
`;