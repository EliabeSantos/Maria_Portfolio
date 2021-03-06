import {
  HeaderContainer,
  Titles,
  MenuOptions,
  MenuOptionsContainer,
} from "./style";
import animateScrollTo from "animated-scroll-to";

const Header = () => {
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  const scroll1 = () => {
    animateScrollTo(0).then((hasScrolledToPosition) => {
      if (hasScrolledToPosition) {
        // page is scrolled to a desired position
      }
    });
  };
  const scroll2 = () => {
    animateScrollTo(vh).then((hasScrolledToPosition) => {
      if (hasScrolledToPosition) {
        // page is scrolled to a desired position
      }
    });
  };
  const scroll3 = () => {
    animateScrollTo(vh * 2).then((hasScrolledToPosition) => {
      if (hasScrolledToPosition) {
        // page is scrolled to a desired position
      }
    });
  };
  const scroll4 = () => {
    animateScrollTo(vh * 3).then((hasScrolledToPosition) => {
      if (hasScrolledToPosition) {
        // page is scrolled to a desired position
      }
    });
  };

  return (
    <>
      <HeaderContainer>
        <Titles>Maria</Titles>
        <MenuOptionsContainer>
          <MenuOptions onClick={scroll1}>Home</MenuOptions>
          <MenuOptions onClick={scroll2}>About</MenuOptions>
          <MenuOptions onClick={scroll3}>Resume</MenuOptions>
          <MenuOptions onClick={scroll4}>Portfolio</MenuOptions>
        </MenuOptionsContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
