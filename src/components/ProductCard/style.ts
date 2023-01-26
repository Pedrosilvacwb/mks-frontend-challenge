import styled from 'styled-components';

export const Card = styled.li`
  background: #ffffff;
  color: var(--color-black);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  .card__info {
    padding: 14px;
  }

  img {
    display: block;
    width: 150px;
    margin: 0 auto;
    margin-bottom: 14px;
  }
  .card__info__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card__info__main h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 14px;
    text-align: center;
  }
  .card__info__main span {
    display: block;
    align-self: flex-start;
    color: var(--color-white);
    background: var(--color-black);

    font-weight: 600;
    font-size: 15px;
    line-height: 15px;

    padding: 4px 8px;
    border-radius: 4px;
  }

  p {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
  }

  button {
    color: var(--color-white);
    background: var(--color-primary);
    border: none;
    border-radius: 0px 0px 8px 8px;

    width: 100%;

    display: flex;
    gap: 14px;
    justify-content: center;
    padding: 7px;

    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`;
