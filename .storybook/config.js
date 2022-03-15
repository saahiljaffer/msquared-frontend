import { configure } from "@storybook/react";
import "../src/fontawesome/initFaIcons";

configure(() => {
  const req = require.context("../src/components", true, /.stories.jsx$/);
  req.keys().forEach((filename) => req(filename));
}, module);
