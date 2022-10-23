import Image from "next/image";
import { DemoButton } from "../NavBar/styles";
import { PanelContainer } from "./styles";
import WorkerImage from "./workers.svg";
export function Panel() {
  return (
    <PanelContainer>
      <div className="description">
        <h1>Monitoramento Online e Gestão de Ativos em um só lugar</h1>

        <h4>
          Evite falhas nas suas máquinas e deixe o tempo de inatividade no
          passado com o melhor sistema preditivo do mercado.
        </h4>

        <DemoButton>Demonstração</DemoButton>

        <p>
          Já é cliente? <a> Acesse aqui.</a>
        </p>
      </div>
      <div className="gif-work">
        <img src="/workers.svg" alt="" />
      </div>
    </PanelContainer>
  );
}
