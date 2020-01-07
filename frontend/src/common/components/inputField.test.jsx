import React from 'react';
import renderer from 'react-test-renderer';

import InputField from './InputField';

describe('<InputField />', () => {
  it('Should render buildings and match the snapshot', () => {
    const component = renderer.create(<InputField />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});