/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DefaultAlertCloseBtn({ close }) {
  return <FontAwesomeIcon icon="times" onClick={close} />;
}
