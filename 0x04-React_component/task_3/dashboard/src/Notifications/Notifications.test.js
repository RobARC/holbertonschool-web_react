import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import NotificationItem from './NotificationItem';

Enzyme.configure({ adapter: new Adapter() });

describe('Should test NotificationItem component', () => {
    let wrapper = shallow(<NotificationItem />);

    beforeEach(() => {
        wrapper = shallow(<NotificationItem />);
    })

    test('should render component works without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should pass type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        const li = wrapper.props();
        expect(li).toMatchObject({
            "data-priority": "default",
            "children": "test"
        })
    })

    test('should pass html prop', () => {
        const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} />);
        const li = wrapper.props();
        expect(li).toMatchObject({
            "data-priority": "default",
            "dangerouslySetInnerHTML": {
                "__html": "<u>test</u>"
            }
        })
    })
})