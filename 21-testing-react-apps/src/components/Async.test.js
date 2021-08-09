import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    // test("renders posts if request succeeds", () => {
    //     render(<Async />);
    //
    //     // search immediately
    //     const listItemElements = screen.getAllByRole("listitem");
    //
    //     // failed because, there is a http request to fetch data
    //     expect(listItemElements).not.toHaveLength(0);
    // });

    // test("renders posts if request succeeds", async () => {
    //     render(<Async />);
    //
    //     // .find.. return a promise, wait for request success
    //     const listItemElements = await screen.findAllByRole("listitem");
    //
    //     expect(listItemElements).not.toHaveLength(0);
    // });

    // using mockup data
    test("renders posts if request succeeds", async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [
                { id: "p1", tittle: "First post" },
                { id: "p2", tittle: "Second post" },
            ],
        });

        render(<Async />);

        // .find.. return a promise, wait for request success
        const listItemElements = await screen.findAllByRole("listitem");

        expect(listItemElements).not.toHaveLength(0);
    });
});
