import React from 'react';
import { Page, Navbar, Block, BlockTitle, List, ListItem, ListItemCell, Icon, Range } from 'framework7-react';
import MRangeSlider from '../../components/range_slider';
import '../../css/mazda_style.css'

const SliderTestsPage = () => (
  <Page>
    <Navbar title="InputFields Test" backLink="Back" />
    <BlockTitle>InputField Components</BlockTitle>
    <Block className="grid-stle">
    <List simpleList>
        <ListItem>
          <ListItemCell className="width-auto flex-shrink-0">
            <Icon ios="f7:speaker_fill" aurora="f7:speaker_fill" md="material:volume_mute" />
          </ListItemCell>
          <ListItemCell className="flex-shrink-3">
            <Range min={0} max={100} step={1} value={10} className='slider'/>
          </ListItemCell>
          <ListItemCell className="width-auto flex-shrink-0">
            <Icon ios="f7:speaker_3_fill" aurora="f7:speaker_3_fill" md="material:volume_up" />
          </ListItemCell>
        </ListItem>

        <ListItem>
          <ListItemCell className="width-auto flex-shrink-0">
            <Icon ios="f7:speaker_fill" aurora="f7:speaker_fill" md="material:volume_mute" />
          </ListItemCell>
          <ListItemCell className="flex-shrink-3">
            <MRangeSlider/>
          </ListItemCell>
          <ListItemCell className="width-auto flex-shrink-0">
            <Icon ios="f7:speaker_3_fill" aurora="f7:speaker_3_fill" md="material:volume_up" />
          </ListItemCell>
        </ListItem>

      </List>
    </Block>
  </Page>
);

export default SliderTestsPage;
