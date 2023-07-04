import { render, screen } from '@testing-library/react';
import { InfoArea } from '../../components/InfoArea';
import { getCurrentMonth } from '../../helpers/dateFilter';

describe('Info Area Component', () => {
  it('should render component', () => {
    render(
      <InfoArea
        currentMonth={getCurrentMonth()}
        onMonthChange={() => {}}
        income={0}
        expense={0}
      />
    );

    expect(screen.getByTestId('container')).toBeInTheDocument();

    // debug();
  });
});
