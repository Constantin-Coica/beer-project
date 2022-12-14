import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Tests", ()=>{
  it("should render the app", ()=>{
      render(<App />)
      const app = screen.queryByTestId("app");
      
      expect(app).toBeInTheDocument();
  });

});