import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { generatePropertyControls } from "./PropertyControls";
import { BarChart } from "react-chartkick";
import "chart.js";

export function ChartkickBarChart(props) {
  const { tint, ...rest } = props;

  return (
    <Frame {...rest} background={null}>
      <BarChart
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
          ["X-Small", 5],
          ["Small", 27]
        ]}
      />
    </Frame>
  );
}

addPropertyControls(ChartkickBarChart, { ...generatePropertyControls() });

ChartkickBarChart.defaultProps = {
  height: 300,
  width: 300,
  tint: "transparent"
};
