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
        expect(wrapper.find('Header').exists()).toEqual(true);
    });
    it('renders Login', () => {
        expect(wrapper.find('Login').exists()).toEqual(true);
    });
    it('renders Footer', () => {
        expect(wrapper.find('Footer').exists()).toEqual(true);
    });
    it('should not display CourseList', () => {
        const courseList = wrapper.find('CourseList');
        expect(courseList.length).toBe(0);
    });
    it('should verify that the Login component is not included', () => {
        const wrapper = shallow(<App isLoggedIn />);
        const logIn = wrapper.find('Login');
        expect(logIn.length).toBe(0);
    });

    it('should verify that the CourseList component is included', () => {
        const wrapper = shallow(<App isLoggedIn />);
        const courseList = wrapper.find('CourseList');
        expect(courseList.length).toBe(1);
    });

    it("when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
        const events = {};
        const logout = jest.fn();

        document.addEventListener = jest.fn((event, cb) => {
            events[event] = cb;
        });
        window.alert = jest.fn();

        shallow(<App logOut={logout} />);

        events.keydown({ key: "h", ctrlKey: true });

        expect(window.alert).toHaveBeenCalledWith("Logging you out");
        expect(logout).toHaveBeenCalled();

        jest.restoreAllMocks();
    });


});
