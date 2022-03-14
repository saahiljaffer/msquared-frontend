/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withAlerts } from "react-very-simple-alerts";
import StoryContainer from "../StorybookContainer/StorybookContainer";

const stories = storiesOf("Components", module);

function ComponentToWrap({ alerts }) {
  return <button onClick={() => alerts.show("My alert")}>show alert</button>;
}

const Alert = withAlerts(ComponentToWrap);

stories.add("HOC Alert", () => (
  <StoryContainer>
    <Alert />
  </StoryContainer>
));
