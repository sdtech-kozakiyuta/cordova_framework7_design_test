import React, { useState, useRef } from 'react';
import {
  Navbar,
  Block,
  Button,
  Popup,
  NavRight,
  Link,
  Toolbar,
  Page,
} from 'framework7-react';
import '../css/mazda_style.css'

const MPopup = () => {
  const [popupOpened, setPopupOpened] = useState(false);
  const popup = useRef(null);

    return (
        <>
        
        <Button outline color="black" className="mbutton" popupOpen=".demo-popup">Open Popup</Button>

        {/* Popup領域 */}
        <Popup
          className="demo-popup mazda-modal-style"
          opened={popupOpened}
          onPopupClosed={() => setPopupOpened(false)}
        >
            <Page>
            <Navbar title="Popup Title">
            </Navbar>
            <Toolbar position='bottom'>
                <Link popupClose>Close</Link>
            </Toolbar>
            <Block>
              <p>
                Test.
              </p>
            </Block>
            </Page>
        </Popup>
      </>
    );
};

export default MPopup;