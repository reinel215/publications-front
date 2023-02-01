import React from 'react';
import { render, screen, fireEvent, cleanup} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Login } from './Login'
import '@testing-library/jest-dom'
import { login } from '../../../services/userService/login';

jest.mock('../../../services/userService/login', () => ({
    login: jest.fn()
}));

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

describe("Login suite test", () => {

    beforeEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("should execute the login button and call the login service", async () => {
        render(<Login testing />);
        const usernameElement = screen.getByTestId("username");
        fireEvent.change(usernameElement, { target: { value: 'username' } });


        const loginButton = screen.getByTestId("login-button");
        await userEvent.click(loginButton)

        expect(login).toBeCalled();

    })


    it("should execute the login button and not call the login service", async () => {
        render(<Login testing />);

        const loginButton = screen.getByTestId("login-button");
        await userEvent.click(loginButton)

        expect(login).toBeCalledTimes(0);

    })
})