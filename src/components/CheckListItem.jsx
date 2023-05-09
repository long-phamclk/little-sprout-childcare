import { FormControlLabel, Checkbox } from "@mui/material";

export default function CheckListItem({ item, onCheck }) {
  return (
    <FormControlLabel
      key={item.id}
      label={item.title}
      control={<Checkbox checked={item.checked} />}
      onChange={(e) => onCheck(item)}
    />
  );
}
