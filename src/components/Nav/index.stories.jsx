import React from "react";
import { storiesOf } from "@storybook/react";
import StoryContainer from "../StorybookContainer";
import Nav from ".";

const stories = storiesOf("Components", module);

stories.add("Nav", () => (
  <StoryContainer>
    <Nav>
      <h1>Title</h1>
    </Nav>
  </StoryContainer>
));
