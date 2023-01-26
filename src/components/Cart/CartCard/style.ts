import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;

  background: var(--color-white);
  color: var(--color-black);

  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  .cart__card__info {
    display: flex;
    align-items: center;

    max-width: 40%;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .cart__card__numbers {
    display: flex;

    align-items: center;
    gap: 20px;
    justify-content: space-between;
  }
  .cart__card__amount {
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
  }
  .cart__card__amount button,
  .cart__card__amount span {
    border: none;
    background: transparent;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    padding: 8px;
  }
  button {
    cursor: pointer;
  }

  .cart__card__price {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    color: #000000;
  }

  @media (max-width: 520px) {
    flex-direction: column;

    .cart__card__info {
      flex-direction: column;
      max-width: 100%;
      margin-bottom: 15px;
    }
    img {
      width: 80px;
      height: 80px;
      margin-bottom: 15px;
    }
    .cart__card__price {
      display: block;
      padding: 8px 16px;
      background: #373737;
      border-radius: 5px;
      color: var(--color-white);
    }
  }
`;
