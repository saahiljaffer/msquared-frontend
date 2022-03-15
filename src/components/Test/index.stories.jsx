import React from "react";
import { storiesOf } from "@storybook/react";
import StoryContainer from "../StorybookContainer";
import Test from ".";

const stories = storiesOf("Components", module);

stories.add("Test", () => (
  <StoryContainer>
    <Test />
  </StoryContainer>
));
