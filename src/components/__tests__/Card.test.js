import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../Card";

describe("Card", () => {
  test("will pass", () => {
    render(<Card />);
    expect(true).toBeTruthy();
  });
});
