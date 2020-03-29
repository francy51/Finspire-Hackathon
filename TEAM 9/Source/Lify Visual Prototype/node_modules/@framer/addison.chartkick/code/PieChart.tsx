import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { generatePropertyControls } from "./PropertyControls";
import { PieChart } from "react-chartkick";
import "chart.js";

export function ChartkickPieChart(props) {
  const { tint, ...rest } = props;

  return (
    <Frame {...rest} background={null}>
      <PieChart
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
          ["Blueberry", 44],
          ["Strawberry", 23]
        ]}
      />
    </Frame>
  );
}

addPropertyControls(ChartkickPieChart, { ...generatePropertyControls() });

ChartkickPieChart.defaultProps = {
  height: 300,
  width: 300,
  tint: "transparent"
};
