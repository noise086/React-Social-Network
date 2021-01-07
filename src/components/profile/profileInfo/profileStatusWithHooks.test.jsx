import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatusWithHooks from './profileStatusWithHooks';


describe('ProfileStatus component', () => {
    // test('status should be in state', () => {
    //     const component = create(<ProfileStatusWithHooks status='каля-маля' />);
    //     const instance = component.getInstance();
    //     expect(instance.state.status).toBe('каля-маля');
    // })
    test('find span', () => {
        const component = create(<ProfileStatusWithHooks />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    })
    test('input not displayed', () => {
        const component = create(<ProfileStatusWithHooks />);
        const root = component.root;
        expect(() => {
            root.findByType('input');
        }).toThrow();
    })
    test('span to input then click', () => {
        const component = create(<ProfileStatusWithHooks status='каля-маля'/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onClick()
        let input = root.findByType('input');
        expect(input.props.value).toBe('каля-маля');
        expect(() => {
            root.findByType('span');
        }).toThrow();
    })
}); 

 