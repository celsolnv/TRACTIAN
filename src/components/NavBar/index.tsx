import { DemoButton, NavBarContainer } from "./styles";
import Logo from "../../public/logo.svg";

export function NavBar() {
  return (
    <NavBarContainer>
      <div>
        <div>
          <img src="logo.svg" />
        </div>

        <ul>
          <li>Soluções</li>
          <li>Industria</li>
          <li>Sobre</li>
          <li>Materiais</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="dir-right">
        <p>Área do cliente</p>
        <DemoButton>Demonstração</DemoButton>
      </div>
    </NavBarContainer>
  );
}
