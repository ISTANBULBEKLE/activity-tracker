import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

describe("App", () => {
    test("render", () => {
        const rendered = renderer.create(<App />).toJSON();
        expect(rendered).not.toBeNull();
    })


});