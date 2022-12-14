import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Card from "./Card";

describe("Card Tests", ()=>{
    it("should render the card", ()=>{
        render(<Card imageURL={null} name={"test"} description={"description"} abv={"2.0"} firstBrewed={"2010"} ph={"ph"}  />)
        const card = screen.queryByTestId("card");
        
        expect(card).toBeInTheDocument();
    })
});