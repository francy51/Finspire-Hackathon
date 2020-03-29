import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { generatePropertyControls } from "./PropertyControls";
import { AreaChart } from "react-chartkick";
import "chart.js";

export function ChartkickAreaChart(props) {
  const { ...rest } = props;

  return (
    <Frame {...rest} background={null}>
      <AreaChart
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
        // data={{
        //   1: 2,
        //   2: 5
        // }}
        data={{ "Item 1": 1, "Item 2": 2 }}
      />
    </Frame>
  );
}

addPropertyControls(ChartkickAreaChart, {
  ...generatePropertyControls()
});

ChartkickAreaChart.defaultProps = {
  height: 300,
  width: 300,
  tint: "transparent"
};
