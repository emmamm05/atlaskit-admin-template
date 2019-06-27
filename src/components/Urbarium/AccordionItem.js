import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Label from './Label';
import Arrow from './ButtonArrow';
import InputState from './InputState';
import { Row } from '../Structural/index';
import { FrameStyle as style, colors } from './urbarium-styles';

const contentTheme = {
  label_fontSize: '12px',
  label_fontWeight: 'bold',
  label_color: '#354052',
  option_fontSize: '12px',
  option_fontWeight: 'normal',
  option_color: '#838383',
};

const headerTheme = {
  label_fontSize: '12px',
  label_fontWeight: 'normal',
  label_color: '#8A96A0',
};

const indexTheme = {
  label_fontSize: '15px',
  label_fontWeight: 'bold',
  label_color: colors.primary,
};

const titleTheme = Object.assign({}, indexTheme, { label_color: '#354052' });

const masmenosTheme = Object.assign({}, headerTheme, { label_color: '#0077FF' });


const AccordionFrame = styled.div`
    border: ${style.border};
    border-radius: ${style.borderRadius};    
    max-width: ${style.maxWidth};
    box-sizing: border-box;
    padding: 10px;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: row;
`;

const AccordionContent = styled.div`    
    display: grid;
    grid-template-columns: ${props => props.columns};
    overflow: hidden;
    max-height: 0px;
    //transition: max-height 0.5s ease;

    &[data-opened=true] {
        max-height: 100%;
        padding: 15px 25px;
        padding-bottom: 0px;
    }
`;

const AccordionStateOptions = [
  { name: 'Por hacer', value: 'por_hacer', style: 'gray' },
  { name: 'En proceso', value: 'en_proceso', style: 'blue' },
  { name: 'Finalizado', value: 'finalizado', style: 'green' },
];

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  handleClick() {
    this.setState(prev => ({ opened: !prev.opened }));
  }

  render() {
    const {
      data, title, index, columns, children,
    } = this.props;
    const {
      startDate, endDate, user, state,
    } = data;
    const { opened } = this.state;
    return (
      <AccordionFrame>

        <Row columns="5fr 2fr 2fr 2fr 2fr 1fr" align="center">
          <Flex>
            <Label theme={indexTheme}>{`${index}.  `}</Label>
            <Label theme={titleTheme}>{title}</Label>
          </Flex>
          <Label theme={headerTheme}>{startDate}</Label>
          <Label theme={headerTheme}>{endDate}</Label>
          <Label theme={headerTheme}>{user}</Label>
          <InputState data={state} options={AccordionStateOptions} />
          { children
            ? (
              <Row>
                <Label theme={masmenosTheme}>{opened ? 'Menos' : 'Más'}</Label>
                <Arrow onClick={() => this.handleClick()} />
              </Row>
            )
            : null
          }
        </Row>

        <ThemeProvider theme={contentTheme}>
          <AccordionContent columns={columns} data-opened={opened}>
            {children}
          </AccordionContent>
        </ThemeProvider>

      </AccordionFrame>
    );
  }
}

AccordionItem.defaultProps = {
  columns: '1fr',
  index: 0,
  title: 'Titulo',
  data: {
    startDate: '-',
    endDate: '-',
    user: '-',
    state: 'por_hacer',
  },
};

export default AccordionItem;
