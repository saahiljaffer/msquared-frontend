/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */
import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import PropTypes from "prop-types";
import { AlertContainer, alerts } from "react-very-simple-alerts";
import StoryContainer from "../StorybookContainer";
import Template from ".";

const stories = storiesOf("Components", module);

function AlertComponent({ children }) {
  return <>{children}</>;
}

stories.add("Alert", () => (
  <StoryContainer>
    <>
      <AlertContainer template={Template} />

      <button
        onClick={() =>
          alerts.show("Default", {
            onClose: (id) => console.log(`Closed ${id}`),
          })
        }
        type="button"
      >
        Default
      </button>
      <button type="button" onClick={() => alerts.showSuccess("Success")}>
        Success
      </button>
      <button type="button" onClick={() => alerts.showWarning("Warning")}>
        Warning
      </button>
      <button type="button" onClick={() => alerts.showError("Error")}>
        Error
      </button>
      <button
        type="button"
        onClick={() =>
          alerts.show(<AlertComponent>Custom alert component</AlertComponent>)
        }
      >
        Custom Component
      </button>
      <button
        type="button"
        onClick={() =>
          alerts.show("Without close button", { closeButton: null })
        }
      >
        No close button
      </button>
    </>
  </StoryContainer>
));

AlertComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
