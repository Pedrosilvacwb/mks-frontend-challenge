import styled from 'styled-components';

export const AppHeader = styled.header`
  width: 100%;
  height: 100px;
  background: var(--color-primary);

  color: var(--color-white);

  .header__container {
    max-width: 90%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .header__logo h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
  }

  .header__logo span {
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
  }

  .header__cart__btn {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;

    padding: 7px 14px;
    display: flex;
    gap: 10px;
    align-items: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  .header__cart__btn:hover {
    background: var(--color-gray);
  }

  @media (max-width: 768px) {
    height: 50px;
    .header__logo h1 {
      font-size: 32px;
    }

    .header__logo span {
      font-size: 16px;
    }
    .header__cart__btn {
      font-size: 12px;
      padding: 5px 10px;
    }
  }
`;
