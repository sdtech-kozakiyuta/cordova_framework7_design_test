import React from 'react';
import { Page, Navbar, Block, BlockTitle, Col, Row } from 'framework7-react';
import '../../css/mazda_style.css'

const GridTestsPage = () => (
  <Page className='grid-demo'>
    <Navbar title="Button Test" backLink="Back" />
    <BlockTitle>Button Components</BlockTitle>
    <Block>
    <BlockTitle>Default Grid</BlockTitle>
        <Row>
            <Col>50% (.col)</Col>
            <Col>50% (.col)</Col>
        </Row>
        <Row>
            <Col>25% (.col)</Col>
            <Col>25% (.col)</Col>
            <Col>25% (.col)</Col>
            <Col>25% (.col)</Col>
        </Row>
    </Block>
    <Block className='custom-grid-demo'>
        <BlockTitle>Custom Grid</BlockTitle>
        <p>
            changing the space between colmns and padding of Block
        </p>
        <Row>
            <Col>50% (.col)</Col>
            <Col>50% (.col)</Col>
        </Row>
        <Row>
            <Col>25% (.col)</Col>
            <Col>25% (.col)</Col>
            <Col>25% (.col)</Col>
            <Col>25% (.col)</Col>
        </Row>
    </Block>
  </Page>
);

export default GridTestsPage;
