import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 20px;
  }

  img {
    align-items: center;
    max-width: 250px;
  }

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  button {
    background: #bf4040;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: background 0.2s;

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);
    }

    svg {
      margin-right: 5px;
    }
  }
  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
  h1 {
    color: #bf4040;
  }
`;
export const Button = styled.div`
  button {
    background: #bf4040;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
    overflow: hidden;
    text-decoration: none;
  }
`;
