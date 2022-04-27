import { DateInput } from 'grommet';
import { useState } from 'react';

export const DateRepro = ({ onChange }) => {
  const [dateValue, setDateValue] = useState('');

  return (
    <DateInput
      value={dateValue}
      name="dateinput-range"
      id="dateinput-range"
      format="mm/dd/yyyy-mm/dd/yyyy"
      onChange={event => {
        setDateValue(event.value);
        onChange(event.value);
      }}
    />
  );
};