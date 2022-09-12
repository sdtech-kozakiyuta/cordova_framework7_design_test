import React, { useState } from "react";
import OTPInput from "otp-input-react";

const OtpInputCard = ({ title, resendOTP, ...rest }) => {
    const [OTP, setOTP] = useState("");
    return (
      <div
        style={{
          padding: 12,
        }}
      >
        <div style={{ marginBottom: 12 }}>{title}</div>
        <OTPInput value={OTP} onChange={setOTP} {...rest} />
      </div>
    );
  };

  export default OtpInputCard;