import styled from 'styled-components';

interface ICartProps {
  openCart: boolean;
}
export const SideBar = styled.div<ICartProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;

  width: 450px;
  min-height: 100vh;

  background: var(--color-primary);
  color: var(--color-white);
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transform: ${(props) =>
    props.openCart ? 'translateX(0)' : 'translateX(100%)'};
  transition: all 0.6s;

  .cart__header {
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart__header h3 {
    font-weight: 600;
    font-size: 27px;
    line-height: 33px;
  }

  .cart__header button {
    background: #000000;
    color: var(--color-white);
    padding: 12px;
    border-radius: 50%;

    font-weight: 400;
    font-size: 28px;
    line-height: 15px;
    cursor: pointer;
  }

  .cart__main {
    padding: 40px;
    height: 500px;
    overflow-y: auto;
  }
  .cart__main::-webkit-scrollbar {
    width: 12px;
  }

  .cart__main::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: var(--color-white);
  }

  .cart__main::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  .cart__footer {
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
  }

  .cart__footer__total {
    padding: 40px;
    display: flex;
    justify-content: space-between;
  }

  .cart__footer button {
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    padding: 40px;
    color: var(--color-white);
    width: 100%;
    background: #000000;
    cursor: pointer;
  }
  @keyframes openCart {
    to {
      right: 0;
    }
  }

  .open {
    animation: openCart 0.6s forwards;
  }

  @media (max-width: 520px) {
    width: 90%;
    .cart__main {
      height: 250px;
    }
  }
`;
