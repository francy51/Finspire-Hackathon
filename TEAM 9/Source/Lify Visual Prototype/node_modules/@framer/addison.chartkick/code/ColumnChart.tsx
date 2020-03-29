import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { generatePropertyControls } from "./PropertyControls";
import { ColumnChart } from "react-chartkick";
import "chart.js";

export function ChartkickColumnChart(props) {
  const { tint, ...rest } = props;

  return (
    <Frame {...rest} background={null}>
      <ColumnChart
        id="users-chart"
        width="100%"
        height="100%"
        min={props.min}
        max={props.max}
        label={props.label}
        xtitle={props.xtitle}
        ytitle={props.ytitles}
        prefix={props.prefix}
        suffix={props.suffix}
        legend={props.legend}
        messages={{ empty: "No data available" }}
        data={[
          ["Sun", 32],
          ["Mon", 46],
          ["Tue", 28]
        ]}
      />
    </Frame>
  );
}

addPropertyControls(ChartkickColumnChart, { ...generatePropertyControls() });

ChartkickColumnChart.defaultProps = {
  height: 300,
  width: 300,
  tint: "transparent"
};
