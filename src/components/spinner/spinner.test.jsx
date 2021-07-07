import React from 'react';
import { shallow } from 'enzyme';
import Backdrop from '@material-ui/core/Backdrop';
import Spinner from './Spinner.jsx';

describe('Spinner component', () => {
  const MOCK_PROPS = {
    isLoading: true
  };

  const wrapper = shallow(<Spinner {...MOCK_PROPS} />);
  it('should render', () => {
    expect(wrapper.exists()).toMatchSnapshot();
  });

  it('should show backdrop when isLoading is true', () => {
    expect(wrapper.find(Backdrop).props().open).toBeTruthy();
  });

  it('should not show backdrop when isLoading is false', () => {
    const isLoading = false;
    const NEW_MOCK_PROPS = {
      isLoading
    };
    const newWrapper = shallow(<Spinner {...NEW_MOCK_PROPS} />);

    expect(newWrapper.find(Backdrop).props().open).toBeFalsy();
  });
});
