import React from "react";
import Enzyme from "enzyme";
import { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import App from './App';


Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);
describe("App.tes.js", () => {
    it("Correct component rendering", () => {
        shallow(<App />);
    });

    it('renders Header', () => {
        expect(wrapper.find('Header').exists()).toEqual(false);
    });
    it('renders Login', () => {
        expect(wrapper.find('Login').exists()).toEqual(false);
    });
    it('renders Footer', () => {
        expect(wrapper.find('Footer').exists()).toEqual(false);
    });

});
