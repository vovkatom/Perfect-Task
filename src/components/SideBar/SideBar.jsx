import css from '../SideBar/SideBar.module.css';
import Logo from './Logo/Logo';
import CreateNewBoard from './CreateNewBoard/CreateNewBoard';

const SideBar = () => {
  return (
    <div className={css.container}>
      <Logo />
      <h3 className={css.myBoardsTitle}>My boards</h3>
      <CreateNewBoard />
    </div>
  );
};

export default SideBar;