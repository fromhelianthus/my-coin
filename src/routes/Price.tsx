import React from "react";
import styled from "styled-components";
import { isDarkAtom } from "./atoms";
import { darkTheme, lightTheme } from "../theme";
import { useRecoilValue } from "recoil";

interface PriceProps {
  price: number;
  volume24h: number;
  marketCap: number;
  percentChange24h: number;
}

const PriceContainer = styled.div`
  color: ${({ theme }) => (theme.isDark ? lightTheme : darkTheme)};
`;

const Price: React.FC<PriceProps> = ({ price, volume24h, marketCap, percentChange24h }) => {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <PriceContainer>
      <h2>Price Information</h2>
      <div>
        <span>Price: ${price}</span>
      </div>
      <div>
        <span>Volume 24h: {volume24h}</span>
      </div>
      <div>
        <span>Market Cap: {marketCap}</span>
      </div>
      <div>
        <span>Percent Change 24h: {percentChange24h}%</span>
      </div>
    </PriceContainer>
  );
};

export default Price;
