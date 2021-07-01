import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { OutlinedInput } from '@material-ui/core';
import Input from './Input';

describe('Input component test', () => {
  let wrapper;

  const MOCK_PROPS = {
    onChange: jest.fn(),
    allowClear: true
  };

  const MOCK_PROPS_NOT_CLEAR = {
    onChange: jest.fn(),
    allowClear: false
  };

  beforeEach(() => {
    wrapper = mount(<Input {...MOCK_PROPS} />);
  });

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should not fail without onChange prop', () => {
    const wrapperWithout = mount(<Input />);
    const e = { target: { value: 'test' } };
    act(() => {
      wrapperWithout
        .find(OutlinedInput)
        .first()
        .props()
        .onChange(e);
    });
    wrapperWithout.update();
    expect(
      wrapperWithout
        .find(OutlinedInput)
        .first()
        .props().value
    ).toEqual('test');
    expect(MOCK_PROPS.onChange).not.toHaveBeenCalledWith('test');
  });

  it('should changed value when user writes', () => {
    const e = { target: { value: 'test' } };
    act(() => {
      wrapper
        .find(OutlinedInput)
        .first()
        .props()
        .onChange(e);
    });
    wrapper.update();
    expect(
      wrapper
        .find(OutlinedInput)
        .first()
        .props().value
    ).toEqual('test');
    expect(MOCK_PROPS.onChange).toHaveBeenCalledWith('test');
  });

  it('should clear text when click in clear button', () => {
    const e = { target: { value: 'test' } };
    act(() => {
      wrapper
        .find(OutlinedInput)
        .first()
        .props()
        .onChange(e);
    });
    wrapper.update();

    act(() => {
      wrapper
        .find('#clearButton')
        .first()
        .simulate('click');
    });
    wrapper.update();
    expect(
      wrapper
        .find(OutlinedInput)
        .first()
        .props().value
    ).toEqual('');
  });

  it('should not allow clear when allowClear false', () => {
    const wrapperWithoutClear = mount(<Input {...MOCK_PROPS_NOT_CLEAR} />);

    expect(wrapperWithoutClear.find('#clearButton').exists()).toBeFalsy();
  });
});
