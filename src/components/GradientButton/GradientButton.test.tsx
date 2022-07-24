import { render, screen } from '@testing-library/react';
import { GradientButton } from '.';

describe('when is rendered', () => {
  it('should render the value of component correctly', () => {
    render(
      <GradientButton 
        padding={5} 
        href={'/'}
        value={"John Doe"} />
    );
    expect(
      screen.getByText(/John Doe?/)
    ).toBeInTheDocument();
  });
});
