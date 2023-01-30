import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react'
import { Profile } from './Profile'
import '@testing-library/jest-dom'
import { getUser } from '../../../services/userService/getUser';
import { PostStatus } from '../../../types/Post';
import { act } from 'react-dom/test-utils';


jest.mock('../../../services/userService/getUser', () => ({
    getUser: jest.fn()
}));

jest.mock('react-router-dom', () => ({
    useParams: () => ({
        userId: "1"
    }),
}));

jest.mock('../../../hooks/usePublications', () => ({
    usePublications: () => ({
        publications: [
            {
                image: "string",
                message: "string",
                likes: [],
                author: {},
                create_at: new Date(),
                location: "string",
                status: "deleted",
                user_id: 1,
                post_id: 1,
            }
        ]
    })
}));


describe("Profile suite test", () => {

    beforeEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("should render a publication", async () => {
        render(<Profile />);

        act(() => {
            waitFor(() => {
                const publications = screen.getAllByTestId("publication");
                expect(publications).toHaveLength(1)
            });
            expect(getUser).toBeCalled();
        })

    })



})