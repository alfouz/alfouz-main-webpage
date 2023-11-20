import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 164px;
  margin: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px 16px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid black;
`;

export const LinkStyled = styled.a`
  height: 24px;
`;

export const StyledImage = styled.img`
  object-fit: contain;
`;
