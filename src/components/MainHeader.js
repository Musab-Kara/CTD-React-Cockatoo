import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./MainHeader.module.css";

function MainHeader({ onAddTodo }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        {/* <MdMessage /> */}
        My ToDo List
      </h1>
      <p>
        <button className={classes.button} onClick={onAddTodo}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
