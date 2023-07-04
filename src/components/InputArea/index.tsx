import { useState } from 'react';
import { categories } from '../../data/categories';
import { newAdjustedDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import {
  Button,
  Container,
  Input,
  InputLabel,
  InputTitle,
  Select,
} from './styles';

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }

    if (!categoryKeys.includes(categoryField)) {
      errors.push('Categoria Inválida!');
    }

    if (titleField === '') {
      errors.push('Insira um título!');
    }

    if (valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      let newItem: Item = {
        date: newAdjustedDate(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      };
      onAdd(newItem);
      clearFields();
    }
  };

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  };

  return (
    <div>
      <Container>
        <InputLabel>
          <InputTitle>Data</InputTitle>
          <Input
            type="date"
            placeholder="Data"
            value={dateField}
            onChange={(e) => setDateField(e.target.value)}
          ></Input>
        </InputLabel>
        <InputLabel>
          <InputTitle>Categoria</InputTitle>
          <Select
            value={categoryField}
            placeholder="Categoria"
            onChange={(e) => setCategoryField(e.target.value)}
          >
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option data-testid="select-option" key={index} value={key}>
                  {categories[key].title}
                </option>
              ))}
            </>
          </Select>
        </InputLabel>
        <InputLabel>
          <InputTitle>Título</InputTitle>
          <Input
            type="text"
            placeholder="Titulo"
            value={titleField}
            onChange={(e) => setTitleField(e.target.value)}
          ></Input>
        </InputLabel>
        <InputLabel>
          <InputTitle>Valor</InputTitle>
          <Input
            type="number"
            placeholder="Valor"
            value={valueField}
            onChange={(e) => setValueField(parseFloat(e.target.value))}
          ></Input>
        </InputLabel>
        <InputLabel>
          <Button onClick={handleAddEvent}>Adicionar</Button>
        </InputLabel>
      </Container>
    </div>
  );
};
