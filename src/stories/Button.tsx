import * as React from "react";
import Button from "@material-ui/core/Button";
export interface Props {
  /** this dictates what the button will say  */
  label: string;
  /** this dictates what the button will do  */
  onClick?: () => void;
  children?: string;
}
const noop = () => {}; // tslint:disable-line
export const MyButton = (props: Props) => {
  const { label, onClick, children } = props;
  return (
    <div onClick={onClick}>
      <span>
        {children}
        {label}
      </span>
      <button>HTML Button</button>

      <Button>React Button</Button>
    </div>
  );
};
