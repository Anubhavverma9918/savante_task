import React from 'react'
import styled from 'styled-components'
import { brands } from '../../data/constants';
import BrandCard from '../Cards/BrandCard';


const Container = styled.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0px 100px 0;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    grid-auto-rows: minmax(100px, auto);
    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;


const Brands = () => {

  return (
    <Container id="brands">
        <Wrapper>
            <Title>BRANDS WE WORK WITH</Title>
            <Desc>
            Savante partners with leading brands across diverse industries, from tech startups to global enterprises. Our tailored approach ensures each brand finds the right influencers for their unique goals. Join top-notch brands who trust Savante to elevate their influencer marketing strategies.
            </Desc>

            <CardContainer>
                {brands.map((brand) => (
                    <BrandCard brand={brand} />
                ))}  
            </CardContainer>
        </Wrapper>
    </Container>
  );
};

export default Brands;
