import styled from "styled-components";

export const Wrapper = styled.div`
  /* 사이드바 */
  .sidebar-links {
    .page-link {
      font-size: 3rem;
      margin: 3rem 0;
    }
    ul {
      padding: 1.5rem 0.5rem 5rem;
    }
  }

  /* 네비게이션바 */
  .nav-links {
    display: flex;
    align-items: center;

    .page-link {
      position: relative;
      padding: 1rem 2rem;
      margin-right: 1rem;
      color: ${(props) => props.theme.colors.white};
      font-size: 2.4rem;
      font-weight: 500;
      letter-spacing: ${(props) => props.theme.text.spacing};
      cursor: pointer;
      border-radius: 3px;
      overflow: hidden;
      transition: 0.2s;

      span {
        position: absolute;
        display: block;
        &:nth-child(1) {
          top: 0;
          left: -100%;
          width: 100%;
          height: 2.2px;
          background: linear-gradient(90deg, transparent, #2196f3);
        }
        &:nth-child(2) {
          top: -100%;
          right: 0;
          width: 2.2px;
          height: 100%;
          background: linear-gradient(180deg, transparent, #2196f3);
        }
        &:nth-child(3) {
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 2.2px;
          background: linear-gradient(270deg, transparent, #2196f3);
        }
        &:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 2.2px;
          height: 100%;
          background: linear-gradient(270deg, transparent, #2196f3);
        }
      }
      &:hover {
        background: #2196f3;
        color: ${(props) => props.theme.colors.background};
        box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
        transition-delay: 0.55s;
        span:nth-child(1) {
          left: 100%;
          transition: 0.6s;
        }
        span:nth-child(2) {
          top: 100%;
          transition: 0.4s;
          transition-delay: 0.1s;
        }
        span:nth-child(3) {
          right: 100%;
          transition: 0.4s;
          transition-delay: 0.2s;
        }
        span:nth-child(4) {
          bottom: 100%;
          transition: 0.4s;
          transition-delay: 0.3s;
        }
      }
    }
  }
`;
