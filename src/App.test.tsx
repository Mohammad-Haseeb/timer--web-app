import React from "react";
import { shallow } from "enzyme";
import App from "./Component/App/App";

describe("App", () => {
	it("should render a <div />", () => {
		const container = shallow(<App />);
		expect(container.find("div").length).toBeGreaterThanOrEqual(1);
});
});