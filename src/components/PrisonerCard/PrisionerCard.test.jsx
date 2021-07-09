import React from 'react';
import { shallow } from 'enzyme';
import PrisionerCard from './PrisionerCard.jsx';

describe('PrisionerCard component', () => {
  const MOCK_PROPS = {
    card: {
      id: 'id',
      title: 'title',
      creator: {}
    }
  };

  const wrapper = shallow(<PrisionerCard {...MOCK_PROPS} />);
  it('should render', () => {
    expect(wrapper.exists()).toMatchSnapshot();
  });
});
