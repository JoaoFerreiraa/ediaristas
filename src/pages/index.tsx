import { Container } from "@material-ui/core";

import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <Container>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade!"
        }
      />
      <UserInformation
        name={"João"}
        picture={""}
        rating={3}
        description={"São Paulo"}
      />
    </Container>
  );
}
