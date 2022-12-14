import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FilterItem from "./FilterItem";

describe("FilterItem Tests", ()=>{
    it("should render the card", ()=>{
        render(<FilterItem />)
        const card = screen.queryByTestId("filteritem");
        
        expect(card).toBeInTheDocument();
    })
});