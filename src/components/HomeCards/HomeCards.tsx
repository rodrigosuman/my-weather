import React from "react";
import LoadingIndicator from "../LoadingIndicator";
import * as S from "./styles";
import { HomeCardProps } from "./types";

const HomeCards: React.FC<HomeCardProps> = (props) => {
  const { content, icon, title, isLoading = false } = props;
  return (
    <S.Container>
      <S.CardHeader>
        <span className="text-light">{title}</span>
        {typeof icon === "function" && icon()}
      </S.CardHeader>
      <S.CardContent>
        {isLoading ? <LoadingIndicator /> : <h2>{content}</h2>}
      </S.CardContent>
    </S.Container>
  );
};

export default HomeCards;
