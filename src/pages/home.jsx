import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      {/* <NavTitle sliding>Mazda_ui_test_app</NavTitle> */}
      <NavTitleLarge>Mazda_ui_test_app</NavTitleLarge>
    </Navbar>

    {/* Page content */}
    <Block strong>
      <p>Mazda指定のデザインに沿ってFramework7のコンポーネントをカスタマイズできるか検証するためのサンプルプロジェクトです。</p>

      <p><a href="https://sdtech.rickcloud.jp/wiki/pages/viewpage.action?pageId=138943669">コンフルページ</a>にこの検証内容をまとめる。</p>
    </Block>
    <List>
      <ListItem link="/button-test/" title="Button Test"/>
      <ListItem link="/inputFields-test/" title="Input Fields Test"/>
      <ListItem link="/grid-test/" title="Grid Test"/>
      <ListItem link="/slider-test/" title="Slider Test"/>
      <ListItem link="/modal-test/" title="Modal Test"/>
    </List>
  </Page>
);
export default HomePage;