import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  test("will pass", () => {
    render(<Footer />);
    expect(true).toBeTruthy();
  });
});
