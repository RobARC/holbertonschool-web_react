import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotificationItem from './NotificationItem'
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

describe('Should test NotificationItem Component', () => {
    let wrapper = shallow(<NotificationItem />);

    beforeEach(() => {
        wrapper = shallow(<NotificationItem />);
    });

    test('should render component works without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("<NotificationItem /> render the correct HTML, by passing type and value props", () => {

        let props = {
            type: "default",
            value: "New resume",
            html: undefined
        }

        let component = shallow(<NotificationItem {...props} />);

        console.log(component);
        expect(component.contains(<li data-priority-type={props.type} dangerouslySetInnerHTML={undefined}></li>)).toEqual(false);


    })
});