import styled from 'styled-components';

export const ProductSkeleton = styled.li`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 225px;
  height: 305px;

  .skeleton__img {
    width: 150px;
    height: 150px;
    background: var(--color-gray);
    margin-top: 20px;
    border-radius: 8px;
  }
  .skeleton__btn {
    width: 100%;
    height: 32px;
    background: var(--color-gray);
    margin-top: 20px;
    border-radius: 0px 0px 8px 8px;
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`;
