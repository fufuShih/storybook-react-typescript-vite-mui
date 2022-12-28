import Button from "@mui/material/Button";

export type ButtonProps = {
  label: string;
};

const TextButton = ({ label = "default" }: ButtonProps) => {
  return (
    <>
      <Button variant="contained">{label}</Button>
    </>
  );
};

export default TextButton;
