import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import Timer from '../Timer/Timer';

describe('App', () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => (container = shallow(<App />)));

  it('should render a <div />', () => {
    const container = shallow(<App />);
    expect(container.find('div').length).toEqual(1);
  });

  it('should render the Timer component', () => {
    const appComponent = shallow(<App />)
    expect(appComponent.containsMatchingElement(<Timer />)).toEqual(true);
  });
});