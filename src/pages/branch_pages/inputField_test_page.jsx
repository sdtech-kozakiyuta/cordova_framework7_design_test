import React from 'react';
import { Page, Navbar, Block, BlockTitle, Button, Col, Row, ListInput, List, Icon } from 'framework7-react';
import MButton from '../../components/m_button'
import '../../css/mazda_style.css'

const InputFieldsTestsPage = () => (
  <Page>
    <Navbar title="InputFields Test" backLink="Back" />
    <BlockTitle>InputField Components</BlockTitle>
    <Block className="grid-stle">
    <p>fw7 only</p>
    <List noHairlinesMd>
        <ListInput label="Name" type="text" placeholder="Your name" clearButton className="input-fields" floatingLabel color="black">
        </ListInput>
        <ListInput label="Name" type="text" placeholder="Your name" clearButton className="styte-test" floatingLabel>
        </ListInput>
    </List>
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
                console.log("OKK Google")
            }/>
        </Col>
    </Row>
    </Block>
  </Page>
);

export default InputFieldsTestsPage;
