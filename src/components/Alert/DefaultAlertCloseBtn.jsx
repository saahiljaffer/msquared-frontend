import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function DefaultAlertCloseBtn({ close }) {
  return <FontAwesomeIcon icon="times" onClick={close} />;
}

DefaultAlertCloseBtn.propTypes = {
  close: PropTypes.func.isRequired,
};

export default DefaultAlertCloseBtn;
