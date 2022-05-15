import { SignInButton } from "./SignInButton";
import "./styles.scss";

export function Header() {
  return (
    <>
      <header className="container">
        <img src="../../public/Logo.svg" alt="logo" />
        <nav className="content">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Recompensas</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Lojas</a>
            </li>
          </ul>
        </nav>
        <SignInButton />
      </header>
    </>
  );
}
