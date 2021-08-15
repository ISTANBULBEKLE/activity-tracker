import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';


describe("App", () => {
    test("Should render correctly", () => {
        render(<App />)
    })
});