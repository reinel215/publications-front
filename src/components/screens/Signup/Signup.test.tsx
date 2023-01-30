import React from 'react';
import { render, screen, fireEvent, cleanup} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Signup } from './Signup'
import '@testing-library/jest-dom'
import { signup } from '../../../services/userService/signup';

jest.mock('../../../services/userService/signup', () => ({
    signup: jest.fn()
}));

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

describe("Signup suite test", () => {

    beforeEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("should execute the signup button and call the signup service", async () => {
        render(<Signup  />);
        const usernameElement = screen.getByTestId("username");
        fireEvent.change(usernameElement, { target: { value: 'username' } });

        const name = screen.getByTestId("name");
        fireEvent.change(name, { target: { value: 'name' } });

        const avatar = screen.getByTestId("avatar");
        fireEvent.change(avatar, { target: { value: 'avatar' } });

        const surname = screen.getByTestId("surname");
        fireEvent.change(surname, { target: { value: 'surname' } });


        const signupButton = screen.getByTestId("signup-button");
        await userEvent.click(signupButton)

        expect(signup).toBeCalled();

    })


    it("should execute the signup button and not call the signup service", async () => {
        render(<Signup  />);

        const signupButton = screen.getByTestId("signup-button");
        await userEvent.click(signupButton)

        expect(signup).toBeCalledTimes(0);

    })
})