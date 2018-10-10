import styled from "styled-components";
import ImageCute from "./images/cute.jpg";

export const ModuleOneStyled = styled.section`
  background: url(${ImageCute}) no-repeat;
  height: 375px;
  margin-top: 20px;
  padding: 20px;
  width: 500px;

  .title {
    color: #fff;
    font-size: ${props => props.theme.fonts.sizes.h3};
    margin: 0;
  }
`;
ModuleOneStyled.displayName = "ModuleOneStyled";
