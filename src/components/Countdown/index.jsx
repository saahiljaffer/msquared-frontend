import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { H6 } from "../Fonts";

const ONE_DAY = 24 * 60 * 60 * 1000;

function Countdown({ fromDate, toDate, ...rest }) {
  const daysLeft = useMemo(
    () =>
      Math.round(Math.abs((fromDate.getTime() - toDate.getTime()) / ONE_DAY)),
    [fromDate, toDate]
  );

  return daysLeft && daysLeft > 0 ? (
    <H6 {...rest}>
      {daysLeft} {daysLeft > 1 ? "days" : "day"} to go!
    </H6>
  ) : null;
}

Countdown.propTypes = {
  fromDate: PropTypes.instanceOf(Date).isRequired,
  toDate: PropTypes.instanceOf(Date).isRequired,
};

export default Countdown;
