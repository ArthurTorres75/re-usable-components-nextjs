import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';



export enum DatePickerType {
    DATE = 'Date',
    TIME = 'Time',
    DATETIME = 'DateTime'
  }
  
  interface Props {
    fullWidth?: boolean;
  
    label: string;
    name: string;
    type: DatePickerType;
  
    errors: any;
    control: any;
  }

export const CustomDateTimePickers: FC<Props> = ({
    control,
    errors,
    label,
    name,
    fullWidth = true,
    type,
  }): JSX.Element => {
  

    switch (type) {
      case DatePickerType.DATE:
        return (
          <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { invalid } }) => (
              <DatePicker
                disablePast
                {...field}
                label={label}
                renderInput={params => <TextField fullWidth={fullWidth} {...params} error={invalid} id={name} />}
              />
            )}
          />
        );
        break;
      case DatePickerType.TIME:
        return (
          <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { invalid } }) => (
              <TimePicker
                {...field}
                label={label}
                renderInput={params => <TextField fullWidth={fullWidth} {...params} error={invalid} id={name} />}
              />
            )}
          />
        );
        break;
      case DatePickerType.DATETIME:
        return (
          <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { invalid } }) => (
              <DateTimePicker
                {...field}
                label={label}
                renderInput={params => <TextField fullWidth={fullWidth} {...params} error={invalid} id={name} />}
              />
            )}
          />
        );
        break;
      default:
        return <>Error</>;
    }
}
