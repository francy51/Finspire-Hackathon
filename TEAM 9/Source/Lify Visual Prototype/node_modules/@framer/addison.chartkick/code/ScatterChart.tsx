import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { generatePropertyControls } from "./PropertyControls";
import { ScatterChart } from "react-chartkick";
import "chart.js";

export function ChartkickScatterChart(props) {
  const { tint, ...rest } = props;

  return (
    <Frame {...rest} background={null}>
      <ScatterChart
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
        data={{
          "2017-01-01 00:00:00 -0800": 2,
          "2017-01-01 00:01:00 -0800": 5
        }}
      />
    </Frame>
  );
}

addPropertyControls(ChartkickScatterChart, { ...generatePropertyControls() });

ChartkickScatterChart.defaultProps = {
  height: 300,
  width: 300,
  tint: "transparent"
};
