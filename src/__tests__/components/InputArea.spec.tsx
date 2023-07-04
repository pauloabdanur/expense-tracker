import {
  fireEvent,
  getAllByTestId,
  render,
  screen,
} from '@testing-library/react';
import { InputArea } from '../../components/InputArea';
import userEvent from '@testing-library/user-event';

describe('Input Area component', () => {
  it('should be able to render inputs', () => {
    render(<InputArea onAdd={() => {}} />);

    expect(screen.getByText('Data')).toBeTruthy();
    expect(screen.getByText('Categoria')).toBeTruthy();
    expect(screen.getByText('Título')).toBeTruthy();
    expect(screen.getByText('Valor')).toBeTruthy();
  });

  it('should change data input value', () => {
    render(<InputArea onAdd={() => {}} />);

    const dataInputElement = screen.getByPlaceholderText(
      'Data'
    ) as HTMLInputElement;

    //Testing Data Input Change
    fireEvent.change(dataInputElement, { target: { value: '2023-07-04' } });
    expect(dataInputElement.value).toBe('2023-07-04');
  });
  it('should change category input value', () => {
    render(<InputArea onAdd={() => {}} />);

    const categoryInputElement = screen.getByRole(
      'combobox'
    ) as HTMLSelectElement;

    userEvent.selectOptions(
      categoryInputElement,
      screen.getByRole('option', { name: 'Aluguel' })
    );
    let options = screen.getAllByTestId('select-option') as HTMLOptionElement[];
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
    expect(options[3].selected).toBeFalsy();
  });
  it('should change title input value', () => {
    render(<InputArea onAdd={() => {}} />);

    const titleInputElement = screen.getByPlaceholderText(
      'Titulo'
    ) as HTMLInputElement;

    fireEvent.change(titleInputElement, { target: { value: 'Aluguel Casa' } });
    expect(titleInputElement.value).toBe('Aluguel Casa');
  });
  it('should change value input', () => {
    render(<InputArea onAdd={() => {}} />);

    const valueInputElement = screen.getByPlaceholderText(
      'Valor'
    ) as HTMLInputElement;

    fireEvent.change(valueInputElement, { target: { value: '800' } });
    expect(valueInputElement.value).toBe('800');
  });
});
