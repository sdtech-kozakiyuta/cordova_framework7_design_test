import React from 'react';
import { Page, Navbar, Block, BlockTitle, Button, Col, Row, ListInput, List, Icon } from 'framework7-react';
import MButton from '../../components/m_button'
import '../../css/mazda_style.css'
import OTPInput, { ResendOTP } from "otp-input-react";
import OtpInputCard from '../../components/opt_input_cart'

const InputFieldsTestsPage = (props) => (
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
    <p>fw7 + custom style</p>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
        <OtpInputCard title="number only Input" OPTLength={4} otpType="number" disabled={false} inputStyles={{
            border: "1px solid #000",
        }}
        resendOTP ={()=>console.log("OK Google")}/>
    </div>
    </Block>
  </Page>
);

export default InputFieldsTestsPage;
