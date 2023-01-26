import styled from 'styled-components';

export const ProductDisplay = styled.ul`
  max-width: 960px;
  margin: 120px auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 980px) {
    margin: 80px auto;
    padding: 0 80px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 700px) {
    margin: 40px auto;
    padding: 0 60px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    padding: 0 60px;
    grid-template-columns: 1fr;
  }
`;
