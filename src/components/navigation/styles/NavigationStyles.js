import styled from "styled-components"

export const NavigationStyles = styled.div`
  #nav-container {
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: red;
    color: white;

    @media (max-width: 1020px) {
      grid-template-columns: 50% 50%;
    }
  }

  #logo {
    img {
      margin: 0;
    }
  }

  #main-nav {
    display: flex;
    /* align-items: center; */
    list-style-type: none;

    p {
      margin: 0 1rem;
    }
    @media (max-width: 1020px) {
      display: none;
    }
  }

  #social-nav {
    display: flex;
    i {
      margin: 0 2rem;
    }
    @media (max-width: 1020px) {
      display: none;
    }
  }

  .fa-bars {
    display: none;
    justify-self: left;

    @media (max-width: 1020px) {
      display: block;
    }
  }

  #mobile-navigation {
    width: 300px;
    background-color: rgba(255, 0, 0, 0.5);
    padding: 1rem;
    margin-left: -325px;
    transition-duration: 0.5s;
    p {
      text-align: center;
    }

    #social-nav-mobile {
      display: flex;
      justify-content: space-evenly;
    }
  }
`
