import React from 'react';
import { Page, Navbar, Block, BlockTitle, Button, Col, Row } from 'framework7-react';
import MButton from '../../components/m_button'
import '../../css/mazda_style.css'

const InputFieldTestsPage = () => (
  <Page>
    <Navbar title="Button Test" backLink="Back" />
    <BlockTitle>Button Components</BlockTitle>
    <Block>
        <Col>
            <Button outline color="black">F7 Default</Button>
        </Col>
        <br />
        <Col>
            <Button outline color="black" className="mbutton">customized style</Button>
        </Col>
    </Block>
    <Block>
    <Row>
        <Col>
            <p>fw7 + custom style</p>
        </Col>
        <Col>
            <p>from scratch</p>
        </Col>
    </Row>
    <Row>
        <Col>
            <Button outline color="black" className="mbutton">Label</Button>
        </Col>
        <Col>
            <MButton onClick={() => 
                console.log("OK Google")
            }/>
        </Col>
    </Row>
    </Block>
  </Page>
);

export default InputFieldTestsPage;
