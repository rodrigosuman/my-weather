import React from "react";
import locationSVG from "../../assets/svg/location.svg";
import * as S from "./styles";

const PermissionDinedOrLocationError: React.FC = () => {
  return (
    <S.Container>
      <img src={locationSVG} alt="" />
      <span className="text-white">Ative sua localização para continuar</span>
    </S.Container>
  );
};

export default PermissionDinedOrLocationError;
