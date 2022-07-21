import { render, screen } from "@testing-library/react";
import { GradientBorder } from ".";

describe("when is rendered", () => {
  it("should render the children component correctly", () => {
    render(
      <GradientBorder>
        <div>Hey Baby, what u doing tonight?</div>
      </GradientBorder>
    );
    expect(screen.getByText(/Hey Baby, what u doing tonight?/)).toBeInTheDocument();
  });
});
