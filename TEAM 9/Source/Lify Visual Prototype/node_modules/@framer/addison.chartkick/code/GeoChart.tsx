import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { generatePropertyControls } from "./PropertyControls";
import { GeoChart } from "react-chartkick";
import "chart.js";

/**
 *
 * @TODO finish and add GeoCharting suite
 *
 */
function ChartkickGeoChart(props) {
  const { tint, ...rest } = props;

  return (
    <Frame {...rest} background={null}>
      <script src="https://www.gstatic.com/charts/loader.js"></script>
      <GeoChart
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
          ["United States", 44],
          ["Germany", 23],
          ["Brazil", 22]
        ]}
      />
    </Frame>
  );
}

addPropertyControls(ChartkickGeoChart, { ...generatePropertyControls() });

ChartkickGeoChart.defaultProps = {
  height: 300,
  width: 300,
  tint: "transparent"
};
