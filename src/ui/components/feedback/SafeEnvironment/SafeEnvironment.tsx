import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      Ambiente Seguro <i className={"twf-lock"} />
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
