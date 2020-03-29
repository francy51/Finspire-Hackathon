import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { generatePropertyControls } from "./PropertyControls";
import { LineChart } from "react-chartkick";
import "chart.js";

export function ChartkickLineChart(props) {
  const { tint, ...rest } = props;

  return (
    <Frame {...rest} background={null}>
      <LineChart
        id="users-chart"
        width="100%"
        height="100%"
        min={props.min}
        max={props.max}
        curve={props.curve}
        label={props.label}
        xtitle={props.xtitle}
        ytitle={props.ytitles}
        prefix={props.prefix}
        suffix={props.suffix}
        legend={props.legend}
        messages={{ empty: "No data available" }}
        data={{
          "2017-05-07": 2,
          "2017-05-14": 5,
          "2017-05-21": 4,
          "2017-05-28": 8
        }}
      />
    </Frame>
  );
}

addPropertyControls(ChartkickLineChart, {
  curve: {
    type: ControlType.Boolean,
    title: "Curved",
    defaultValue: true
  },
  ...generatePropertyControls()
});

ChartkickLineChart.defaultProps = {
  height: 300,
  width: 300,
  tint: "transparent"
};
