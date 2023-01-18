import styled from 'styled-components'
import sideBarBG from '../../assets/sideBarBG.png'

export const SideBarBackground = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.2);
`

export const SideBarContainer = styled.div`
  width: 68%;
  position: fixed;
  top: 0;
  right: 0;
  height: inherit;
  background: url(${sideBarBG});
  padding: 2.5rem 1.5rem 2.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  transition: all 0.3s linear;
  transform: translate(0);

  &.menuClose {
    transform: translate(100%);
  }

  .menuCloseBtn {
    text-align: right;
    font-size: 1.2rem;
    color: white;
    background: transparent;
    border: none;
  }

  a {
    font-size: 1.2rem;
  }

  .contactMe {
    width: 90%;
    background: transparent;
    padding: 0.5rem 1.5rem;
    border: 1px solid white;
    border-radius: 50px;
    text-align: center;

    &:focus {
      outline: none;
      border: none;
    }

    &:hover {
      background: white;
      color: #012f34;
    }
  }
`
