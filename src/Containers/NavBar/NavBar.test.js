import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe("Nav Bar tests", ()=>{

    it("should render the Navigation Bar", ()=>{
        render(<NavBar filterData={[]} />)
        const nav = screen.queryByTestId("navbar");
        
        expect(nav).toBeInTheDocument();
    });


})

