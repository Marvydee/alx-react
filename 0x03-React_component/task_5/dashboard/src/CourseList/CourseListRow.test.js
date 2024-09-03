import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Component", () => {
  it("renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="First Cell" />
    );
    const th = wrapper.find("th");
    expect(th).toHaveLength(1);
    expect(th.prop("colSpan")).toEqual("2");
    expect(th.text()).toEqual("First Cell");
  });

  it("renders two cells when textSecondCell is present and isHeader is true", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="First Cell"
        textSecondCell="Second Cell"
      />
    );
    const th = wrapper.find("th");
    expect(th).toHaveLength(2);
    expect(th.at(0).text()).toEqual("First Cell");
    expect(th.at(1).text()).toEqual("Second Cell");
  });

  it("renders correctly two td elements within a tr element when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="First Cell"
        textSecondCell="Second Cell"
      />
    );
    const td = wrapper.find("td");
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toEqual("First Cell");
    expect(td.at(1).text()).toEqual("Second Cell");
  });
});
