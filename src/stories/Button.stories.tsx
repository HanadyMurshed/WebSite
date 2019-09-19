import * as React from "react";
import { storiesOf } from "@storybook/react";
import { MyButton } from "./Button";
import { action } from "@storybook/addon-actions";
// import TicTacToeCell from './TicTacToeCell';

const stories = storiesOf("Components", module);

stories.add(
  "TicTacToeCell",
  () => <MyButton label="Click" onClick={() => {}} />,
  {
    info: { inline: true }
  }
);
