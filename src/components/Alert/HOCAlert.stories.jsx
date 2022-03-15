import React from "react";
import { storiesOf } from "@storybook/react";
import { withAlerts } from "react-very-simple-alerts";
import PropTypes from "prop-types";
import StoryContainer from "../StorybookContainer";

const stories = storiesOf("Components", module);

function ComponentToWrap({ alerts }) {
  return (
    <button type="button" onClick={() => alerts.show("My alert")}>
      show alert
    </button>
  );
}

ComponentToWrap.propTypes = {
  alerts: PropTypes.shape({ show: PropTypes.func }).isRequired,
};

const Alert = withAlerts(ComponentToWrap);

stories.add("HOC Alert", () => (
  <StoryContainer>
    <Alert />
  </StoryContainer>
));
