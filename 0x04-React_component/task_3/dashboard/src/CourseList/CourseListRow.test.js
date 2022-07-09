import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import CourseListRow from './CourseListRow';

Enzyme.configure({ adapter: new Adapter() });

describe("<CourseListRow />", () => {
    it("CourseListRow renders without crashing", () => {
        const wrapper = shallow(<CourseListRow textFirstCell="test" />);
        expect(wrapper.exists()).toEqual(true);
    });
    it("When isHeader is true renders one cell with colspan = 2 when textSecondCell does not exist", () => {
        const wrapper = shallow(
            <CourseListRow isHeader={true} textFirstCell="test" />
        );
        wrapper.update();
        const item = wrapper.find("th");

        expect(item).toHaveLength(2);
        expect(item.contains("colSpan")).toEqual(false);
    });
    it("When isHeader is true renders two cells when textSecondCell is present", () => {
        const wrapper = shallow(
            <CourseListRow
                isHeader={true}
                textFirstCell="test"
                textSecondCell="second"
            />
        );
        wrapper.update();
        const item = wrapper.find("th");

        expect(item).toHaveLength(2);
        expect(item.first().text()).toEqual("test");
        expect(item.at(1).text()).toEqual("");
    });
    it("When isHeader is false renders correctly two td elements within a tr element", () => {
        const wrapper = shallow(
            <CourseListRow
                isHeader={false}
                textFirstCell="test"
                textSecondCell="second"
            />
        );
        wrapper.update();
        const item = wrapper.find("tr");

        expect(item).toHaveLength(0);
        expect(item.children("td")).toHaveLength(2);
    });
});