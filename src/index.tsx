import React from 'react';
import {
  FloatingWindow,
  FlexBox,
  Button,
  Text,
} from '@invisionapp/studio-api/components';
import { core, document, logger } from '@invisionapp/studio-api';
import ExampleCopy from './ExampleCopy';

class App extends React.PureComponent {
  createArtboard = () => {
    logger.info('creating the artboard...');
    const name = 'example artboard';
    const node = document.createNode('artboard');
    const page = document.getCurrentPage();
    const width = 700;
    const height = 350;
    const xPos = 0;
    const newNode = {
      ...node,
      name,
      width: { unit: 'pixel', value: width },
      height: { unit: 'pixel', value: height },
      x: { unit: 'pixel', value: xPos },
      children: [...ExampleCopy],
      fills: [],
    };
    page.append(newNode);
  };

  render() {
    return (
      <FlexBox
        width="300px"
        height="300px"
        justifyContent="center"
        alignItems="center"
      >
        <FlexBox flexDirection="column" style={{ marginBottom: '15px' }}>
          <Text text="Example creating artboard node." />
          <Button
            text="Create artboard"
            onClick={this.createArtboard}
            style={{ marginTop: '10px' }}
            type="active"
          />
        </FlexBox>
      </FlexBox>
    );
  }
}

core.onWillShow(event => {
  event.render(
    <FloatingWindow>
      <App />
    </FloatingWindow>,
  );
});
