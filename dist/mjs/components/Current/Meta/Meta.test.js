import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "@testing-library/react";
import Meta from ".";
describe("<Meta>", () => {
    let renderResult;
    const props = {
        title: "HUMIDITY",
        value: 12,
    };
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        renderResult = render(_jsx(Meta, { ...props }));
    });
    it("should render day", () => {
        const { getByText } = renderResult;
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText(props.title)).not.toBeNull();
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText(props.value)).not.toBeNull();
    });
});
