import Head from 'next/head'
import { Container } from '@material-ui/core';

import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';


export default function Home() {
  return (
    <Container>
      <SafeEnvironment/>
      <PageTitle title={"Conheça os profissionais"}/>
    </Container>
  )
}
