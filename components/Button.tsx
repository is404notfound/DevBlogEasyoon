import React from 'react';
import styled from 'styled-components';

const Button = ({
    text
    , type = 'primary'
    , size = 'M'
    , disabled = false
    , startIcon = null
    , endIcon = null
    , onClick = () => {} 
}: {
    text: string
    type?: 'primary' | 'secondary' | 'tertiary'
    size?: 'S' | 'M' | 'L'
    disabled?: boolean
    startIcon?: React.ReactNode 
    endIcon?: React.ReactNode
    onClick?: () => void
}) => (
  //@ts-ignore
  <StyledButton type={type} size={size} disabled={disabled} onClick={onClick}>
    {startIcon && <span className="icon">{startIcon}</span>}
    <span>{text}</span>
    {endIcon && <span className="icon">{endIcon}</span>}
  </StyledButton>
);

const StyledButton = styled.button<{ type: 'primary' | 'secondary' | 'tertiary', size: 'S' | 'M' | 'L', disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${({ size }) => 
    size === 'S' ? '0.5rem 1rem' : 
    size === 'L' ? '1rem 2rem' : 
    '0.75rem 1.5rem'};
  font-size: ${({ size }) => 
    size === 'S' ? '0.875rem' : 
    size === 'L' ? '1.125rem' : 
    '1rem'};
  font-weight: bold;
  color: #fff;
  background-color: ${({ type }) => 
    type === 'secondary' ? 'var(--Color-Grayscale-06)' :
    type === 'tertiary' ? 'transparent' : 'var(--Color-Retro-Blue-01)'};
  border: ${({ type }) => type === 'tertiary' ? '1px solid var(--Color-Grayscale-04)' : 'none'};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background-color: ${({ type }) => 
      type === 'secondary' ? 'var(--Color-Grayscale-04)'
        : type === 'tertiary' ? 'var(--Color-Grayscale-04)' : 'var(--Color-Retro-Blue-02)'};
  }
  
  .icon {
    display: inline-flex;
    align-items: center;
    width: ${({ size }) => 
      size === 'S' ? '0.5rem' : 
      size === 'L' ? '1.5rem' : 
      '1rem'};
    height: ${({ size }) => 
      size === 'S' ? '0.5rem' : 
      size === 'L' ? '1.5rem' : 
      '1rem'};
  }
`;

export default Button;
