import React from 'react';
import { shallow } from 'enzyme';
import { CartIcon } from './cart-icon.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

describe('CartIcon component', () => {
	let wrapper;
	let mockToggleCartHidden;

	beforeEach(() => {
		mockToggleCartHidden = jest.fn();

		const mockProps = {
			itemCount: 0,
			toggleCartHidden: mockToggleCartHidden
		};

		wrapper = shallow(<CartIcon {...mockProps} />);
	});

	it('should render CartIcon component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call toggleCartHidden when icon is clicked', () => {
		wrapper.find('CartContainer').simulate('click');
		expect(mockToggleCartHidden).toHaveBeenCalled();
	});

	it('should render the itemCount as a text', () => {
		const itemCount = parseInt(wrapper.find('ItemCountContainer').text());
		expect(itemCount).toBe(0);
	});
});
