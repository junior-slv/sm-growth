import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import medidorph from "../../assets/medidorph.png";
import medidorphbottom from "../../assets/medidorphbottom.png";
import pointer from "../../assets/pointer.png";
import { WarningTwoIcon } from "@chakra-ui/icons";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

import "./pH.css";

const Ph = () => {
  return (
    <>
      <div className="main-app">
        <Sidebar />
        <div className="ph">
          <div className="ph-top">
            <p>Monitoramento detalhado PH</p>
          </div>
          <div className="ph-middle">
            <div className="ph-medidor">
              <img src={medidorph} alt="" />
            </div>
            <div className="ph-info">
              <img id="pointer" src={pointer} alt="" />
              <p>
                <WarningTwoIcon w={30} h={30} color="orange" />
                *O desenvolvimento ideal da alface ocorre em solo com pH entre 6
                e 7. Na última medição, foi observado que o pH do solo estava em
                4. Para corrigir o solo e neutralizar a acidez, será necessário
                utilizar calcário.
              </p>
            </div>
          </div>
          <div className="ph-medidor_bottom">
            <div>
              <p>Nível Atual: 5 pH</p>
              <Stat>
                <StatLabel>Variação</StatLabel>
                <StatNumber>Diária</StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  - 9.05%
                </StatHelpText>
              </Stat>
            </div>
            <img id="medidorphbottom" src={medidorphbottom} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ph;
