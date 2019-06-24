import React from 'react';
import Label from './Label';
import { Row, Column } from '../Structural/index';
import { colors } from './urbarium-styles';

const titleTheme = {
  label_color: '#23262',
  label_fontSize: '22px',
  label_fontWeight: 'bold',
};

const numberTheme = {
  label_color: colors.primary,
  label_fontSize: '21px',
  label_fontWeight: 'bold',
};

const headerNameTheme = {
  label_color: '#A0AAB4',
  label_fontSize: '10.45px',
  label_fontWeight: 'normal',
};

const headerValueTheme = {
  label_color: colors.primary,
  label_fontSize: '15px',
  label_fontWeight: 'bold',
};

const HeaderNames = ['MONTO DEL BONO', 'ÚLTIMA MODIFICACIÓN', 'FECHA CREACIÓN'];

export default ({
  nombre = 'Default',
  cedula = '12345678',
  numero = '12345',
  monto = '',
  modificacion = '',
  creacion = '00-00-00',
}) => {
  const HeaderValues = [monto, modificacion, creacion];
  return (
    <Row>
      <Column>
        <Label theme={titleTheme}>{`${nombre}-${cedula}`}</Label>
        <Label theme={numberTheme}>{`#${numero}`}</Label>
      </Column>
      
      <Row justify="end" gap={50}>
        {HeaderNames.map((name, index) => (
          <Column justify="end">
            <Label theme={headerNameTheme}>{name}</Label>
            <Label theme={headerValueTheme}>{HeaderValues[index]}</Label>
          </Column>
        ))}
      </Row>
    </Row>
  );
};
