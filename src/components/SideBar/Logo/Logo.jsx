import css from '../Logo/Logo.module.css';

const Logo = () => {
  return (
    <>
      <div className={css.logo}>
        <svg width="12" height="16" className={css.logoIcon}>
          {/* <path d="M3.331 15.027c.245-1.272.453-2.61.747-3.949.145-.7-.031-1-.814-.946-.784.054-1.657.027-2.49 0-.833-.026-.982-.446-.503-1.044C2.634 6.17 5.024 3.288 7.405.415 7.672.089 7.98-.143 8.42.102c.44.246.349.55.276.915-.262 1.339-.48 2.677-.77 3.989-.149.678.046.919.752.892a21.143 21.143 0 0 1 2.128 0c.403 0 .932-.21 1.14.34.209.548-.23.78-.452 1.106a304.214 304.214 0 0 1-2.752 3.342 1552.648 1552.648 0 0 0-4.052 4.854c-.262.317-.556.571-1.005.41-.448-.16-.353-.54-.353-.923Z" /> */}
          <use href="../../../assets/img/logo.svg#logo"></use>
          {/* <use href="../../../assets/img/icon.svg#icon-Ellipse-5"></use> */}
        </svg>
        <p className={css.logoTitle}>Perfect Task</p>
      </div>
    </>
  );
};

export default Logo;

// href="/perfect-task/assets/icon.svg#logo2"
