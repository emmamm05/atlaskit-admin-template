import React from 'react';
import BonoTitle from '../../components/Urbarium/BonoTitle';
import Input from '../../components/Urbarium/LabeledInput';
import { Column, Row } from '../../components/Structural/index';
import ButtonRound from '../../components/Urbarium/ButtonRound';
import Form, { submitForm } from '../../components/Form';
import {
  PageWrapper,
  PageHeader,
  PageContent,
  PageFooter,
} from '../../components/PageWrapper';
import {
  Anos,
  Modalidad,
  Caracteristica,
  EntidadesBancarias,
} from './options';

const formID = 'caso-de-bono-page-form';

const CasoDeBonoPage = ({ title, data, onSubmit }) => (
  <PageWrapper>
    <PageHeader>
      <BonoTitle>{title}</BonoTitle>
    </PageHeader>

    <PageContent>
      <Form onSubmit={onSubmit} id={formID}>
        <Column gap={40}>
          <Column gap={20}>
            <Input
              type="dropdown"
              label="Año"
              icon="calendar"
              options={Anos}
              placeholder="Año"
              data={data.ano}
              name="ano"
              required
            />
          </Column>
          <Input
            type="checkbox"
            label="Modalidad"
            icon="none"
            options={Modalidad}
            data={data.modalidad}
            name="modalidad"
            required
          />
          <Input
            type="radio"
            label="Característica Expecial"
            icon="none"
            options={Caracteristica}
            data={data.caracteristica}
            name="caracteristica"
            required
          />
          <Input
            type="dropdown"
            label="Entidad bancaria a cargo"
            icon="none"
            placeholder="Grupo Mutual"
            options={EntidadesBancarias}
            data={data.entidad}
            name="entidad"
            required
          />
        </Column>
      </Form>
    </PageContent>

    <PageFooter>
      <Row justify="end">
        <ButtonRound id={formID} onClick={(submitForm(formID))}>Guardar y continuar</ButtonRound>
      </Row>
    </PageFooter>
  </PageWrapper>
);

// default values for the page,
// you can edit this to test how it would look once rendered with different data
CasoDeBonoPage.defaultProps = {
  title: {},
  data: {
    ano: '',
    modalidad: [],
    caracteristica: '',
    entidad: '',
  },
  // eslint-disable-next-line no-console
  onSubmit(args) { console.table(args); },
};


export default CasoDeBonoPage;
