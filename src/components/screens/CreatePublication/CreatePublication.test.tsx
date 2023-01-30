import React from 'react';
import { render, screen, fireEvent, cleanup} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CreatePublication } from './CreatePublication'
import '@testing-library/jest-dom'
import { createPublication } from '../../../services/publicationService/creatPublication';

jest.mock('../../../services/publicationService/creatPublication', () => ({
    createPublication: jest.fn()
}));

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

describe("CreatePublication suite test", () => {

    beforeEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("should execute the create button and call the create service", async () => {
        render(<CreatePublication  />);
        const location = screen.getByTestId("location");
        fireEvent.change(location, { target: { value: 'location' } });


        const image = screen.getByTestId("image");
        fireEvent.change(image, { target: { value: 'image' } });

        const message = screen.getByTestId("message");
        fireEvent.change(message, { target: { value: 'message' } });


        const signupButton = screen.getByTestId("create-button");
        await userEvent.click(signupButton)

        expect(createPublication).toBeCalled();

    })


    it("should execute the signup button and not call the signup service", async () => {
        render(<CreatePublication  />);

        const signupButton = screen.getByTestId("create-button");
        await userEvent.click(signupButton)

        expect(createPublication).toBeCalledTimes(0);

    })
})