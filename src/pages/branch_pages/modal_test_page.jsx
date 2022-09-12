import React from 'react';
import { Page, Navbar, Block, BlockTitle, Row, } from 'framework7-react';
import '../../css/mazda_style.css'
import '../../components/m_popup'
import MPopup from '../../components/m_popup';

const PopupTestPage = () => (
  <Page>
    <Navbar title="Modal Sheet Test" backLink="Back" />
    <BlockTitle>Modal Sheet Components</BlockTitle>
    <Block>
      <Row>
        <MPopup/>
      </Row>
    </Block>
  </Page>
);

export default PopupTestPage;
