import { Grommet } from 'grommet';
import { fireEvent, render } from '@testing-library/react';
import { DateRepro } from './DateRepro';

test('changing date value should update <DateRepro/> value', () => {
  jest.useFakeTimers();
  const onChange = jest.fn();

  const { getByDisplayValue, getByPlaceholderText } = render(
    <Grommet>
      <DateRepro onChange={onChange} />
    </Grommet>
  );

  const dateInput = getByPlaceholderText(/mm\/dd\/yyyy/, { exact: false })
    .closest('input');

  fireEvent.change(dateInput, {
    target: { value: '04/12/2021-04/12/2021' },
  });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(['2021-04-12', '2021-04-12']);
  expect(getByDisplayValue('04/12/2021-04/12/2021')).toBeInTheDocument();
});
