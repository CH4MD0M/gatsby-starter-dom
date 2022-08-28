import styled from "styled-components";

export const Wrapper = styled.div`
  /* Sidebar */
  .sidebar-links {
    padding-top: 10rem;
    .page-link {
      font-size: 3rem;
      margin: 3rem 0;
      display: block;
      font-weight: 700;
      transition: 0.2s linear;
      &:hover {
        transform: translateY(-5px);
        background: none;
        box-shadow: none;
      }
    }
    ul {
      padding: 1.5rem 0.5rem 5rem;
    }
  }

  /* Navbar */
  .nav-links {
    display: flex;
    align-items: center;

    .page-link {
      position: relative;
      padding: 1rem 2rem;
      margin-right: 1rem;
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
          background: linear-gradient(90deg, transparent, var(--linkColor));
        }
        &:nth-child(2) {
          top: -100%;
          right: 0;
          width: 2.2px;
          height: 100%;
          background: linear-gradient(180deg, transparent, var(--linkColor));
        }
        &:nth-child(3) {
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 2.2px;
          background: linear-gradient(270deg, transparent, var(--linkColor));
        }
        &:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 2.2px;
          height: 100%;
          background: linear-gradient(270deg, transparent, var(--linkColor));
        }
      }
      &:hover {
        color: var(--textColor);
        background: var(--linkColor);
        box-shadow: var(--boxShadow);
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
