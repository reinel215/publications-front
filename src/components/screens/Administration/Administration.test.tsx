import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import { Administration } from './Administration'
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


describe("Administration suite test", () => {

    beforeEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it("should render a publication in the administration panel", async () => {
        render(<Router><Administration /></Router>);

        act(() => {
            waitFor(() => {
                const publications = screen.getAllByTestId("publication");
                expect(publications).toHaveLength(1)
            });
        })

    })



})