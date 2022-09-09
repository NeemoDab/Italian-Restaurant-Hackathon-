

import React from "react";
import {getByRole, render, screen} from "@testing-library/react";
import {test, expect, jest} from "@jest/globals";
import Footer from "./index.js";

//this will test whether the component renders using .toBeInTheDocument matcher



//Write test 
test("tests that the footer renders", function () {
    //Arrange
    render(<Footer/>) //buttonText?
    //Act 
      
    //Assert 
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
});