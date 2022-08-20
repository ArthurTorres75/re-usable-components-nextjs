import React from "react";
import { useForm } from "react-hook-form";
import { CustomDateTimePickers, DatePickerType } from "./CustomDateTimePickers";
import { Grid } from "@mui/material";

const Pickers = () => {
  const {
    register,
    control,
    formState: { errors },
    watch,
    getValues,
    setValue,
    reset,
  } = useForm<any>({
    criteriaMode: "all",
    defaultValues: {
      date: "",
    },
  });

  console.log(watch());
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item>
          Date Picker
        </Grid>
        <Grid item>
          {" "}
          <CustomDateTimePickers
            control={control}
            errors={errors}
            label={"Select date / time"}
            name={"date"}
            type={DatePickerType.DATE}
          />
        </Grid>
        <Grid item>
          Time Picker
        </Grid>
        <Grid item>
          {" "}
          <CustomDateTimePickers
            control={control}
            errors={errors}
            label={"Select date / time"}
            name={"date"}
            type={DatePickerType.TIME}
          />
        </Grid>
        <Grid item>
          Date Time Picker
        </Grid>
        <Grid item>
          {" "}
          <CustomDateTimePickers
            control={control}
            errors={errors}
            label={"Select date / time"}
            name={"date"}
            type={DatePickerType.DATETIME}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Pickers;
