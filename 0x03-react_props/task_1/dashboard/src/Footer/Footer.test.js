import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import Footer from './Footer';


Enzyme.configure({ adapter: new Adapter() });

describe('Should test login Component', () => {

    let wrapper = shallow(<Footer />); // undefined

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    })
    test('verify it renders without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Verify that the components at the very least render the text Copyright', () => {
        const msg = wrapper.find('p').text().trim().split(" ");
        expect(msg[0]).toBe("Copyright");
    })
})