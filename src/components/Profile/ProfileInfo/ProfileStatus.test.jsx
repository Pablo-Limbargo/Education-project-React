import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from the props should be in the state', () => {
        const component = create(<ProfileStatus status='SocNet'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('SocNet');
    });

    test('<span> should be displayed after creation', () => {
        const component = create(<ProfileStatus status='SocNet'/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });

    test('<input> should not be displayed after creation', () => {
        const component = create(<ProfileStatus status='SocNet'/>);
        const root = component.root;

        expect(() => {
            let input = root.findByType('input')
        }).toThrow();
    });

    test('<span> should contains correct status after creation', () => {
        const component = create(<ProfileStatus status='SocNet'/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('SocNet');
    });

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='SocNet'/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('SocNet');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='SocNet' updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});