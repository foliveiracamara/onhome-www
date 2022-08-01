import { render, screen } from '@testing-library/react';
import { GradientText } from '.';

describe('when is rendered', () => {
  it('should render the value of component correctly', () => {
    render(
      <GradientText 
        textAlign={"center"}
        fontSize={500}
        value={"OnHome"} />
    );
    expect(
      screen.getByText(/OnHome?/)
    ).toBeInTheDocument();
  });
});
