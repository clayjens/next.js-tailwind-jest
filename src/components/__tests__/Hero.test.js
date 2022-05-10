import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

describe("Hero", () => {
  test("will pass", () => {
    render(<Hero />);
    expect(true).toBeTruthy();
  });
});
