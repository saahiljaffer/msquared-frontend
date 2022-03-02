import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ({ close }) {
  return <FontAwesomeIcon icon="times" onClick={close} />;
}
