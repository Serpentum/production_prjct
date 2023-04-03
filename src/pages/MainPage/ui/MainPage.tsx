import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
  const {t} = useTranslation("pageMain")
  return (
    <div>
      {t("pageTitle")}
    </div>
  );
};

export default MainPage;
