import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const FooterStyled = styled("footer")`
  padding: 45px 0;
`;

export const TitleStyled = styled(Typography)`
  text-align: center;
`;

export const SubtitleStyled = styled(Typography)`
  text-align: center;
  margin: 0;
  font-size: ${({ theme }) => theme.typography.subtitle2.fontSize};
  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;