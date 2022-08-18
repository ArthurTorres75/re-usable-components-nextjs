import { Grid, Paper, styled } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { IComponentList } from "../../../models/interfaces/componentList";

interface Props {
  spacing: number;
  columsWidth: number;
  data: IComponentList[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  ":hover": { backgroundColor: 'white', color: 'black' }
}));

export const CustomGrid: FC<Props> = ({
  spacing,
  columsWidth,
  data,
}): JSX.Element => {
  const router = useRouter();
  return (
    <Grid container item spacing={spacing}>
      {data.map((item, i) => (
        <Grid item xs={columsWidth} key={i}>
          <Item onClick={() => router.push(item.url)}>{item.title}</Item>
        </Grid>
      ))}
    </Grid>
  );
};
