import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("before)", () => {
        const component = create(<ProfileStatus status="ollllegggha BASIC" />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });
    test("input to be null", () => {
        const component = create(<ProfileStatus status="ollllegggha BASIC" />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe('ollllegggha BASIC');
    });

    test("input to be", () => {
        const component = create(<ProfileStatus status="ollllegggha BASIC" />);
        const root = component.root;
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        
        expect(input.props.value).toBe('ollllegggha BASIC');
    });


});