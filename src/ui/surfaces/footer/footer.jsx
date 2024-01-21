import { FooterStyled, TitleStyled, SubtitleStyled } from "./footer.styled";

function Footer() {
    return (
      <FooterStyled>
        <TitleStyled>Footer</TitleStyled>
        <SubtitleStyled paragraph variant= "subtitle2" >Dolore minim labore enim laboris</SubtitleStyled>
        <SubtitleStyled>
          Copyright <span>Seu Website</span> 2022
        </SubtitleStyled>
      </FooterStyled>
    );
}

export default Footer;