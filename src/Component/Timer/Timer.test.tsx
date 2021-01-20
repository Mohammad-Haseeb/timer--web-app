 import React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import Timer from './Timer';

describe('Timer', () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => (container = shallow(<Timer />)));

  it('should render instances of the TimerButton component', () => {
    expect(container.find('TimerButton').length).toBeGreaterThanOrEqual(1);
  });
});