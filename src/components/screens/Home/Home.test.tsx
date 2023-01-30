import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react'
import { Home } from './Home'
import '@testing-library/jest-dom'
import { BrowserRouter as Router,} from "react-router-dom";

import { act } from 'react-dom/test-utils';



jest.mock('../../../hooks/usePublications', () => ({
    usePublications: () => ({
        publications: [{
            image: "string",
            message: "string",
            likes: [],
            author: {},
            create_at: new Date(),
            location: "string",
            status: "deleted",
            user_id: 1,
            post_id: 1,
        }]
    })
}));


describe("Home suite test", () => {

    beforeEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("should render a publication in the home", async () => {
        render(<Router><Home /></Router>);

        act(() => {
            waitFor(() => {
                const publications = screen.getAllByTestId("publication");
                expect(publications).toHaveLength(1)
            });
        })

    })



})