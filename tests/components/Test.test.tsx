import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { Test } from "@mapstudio/lib/components/features/auth/Test";

describe("Test", () => {
  it("should render text", () => {
    render(<Test />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
