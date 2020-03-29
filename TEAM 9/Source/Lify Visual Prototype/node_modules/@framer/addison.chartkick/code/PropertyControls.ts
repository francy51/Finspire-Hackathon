import { ControlType, PropertyControls } from "framer";

// See https://gist.github.com/addisonschultz/23df9e22cc6857383f1e830f52c16645 for more usage information

export function generatePropertyControls(
  options: {
    hidden?: (props: any) => boolean;
    omittedProperties?: string[];
  } = {}
): PropertyControls {
  const properties: PropertyControls = {
    min: {
      type: ControlType.Number,
      title: "Min",
      step: 1,
      displayStepper: true
    },
    max: {
      type: ControlType.Number,
      title: "Max",
      step: 1,
      displayStepper: true
    },

    /**
     * Below two properties don't work
     *
     */
    // stacked: {
    //   type: ControlType.Boolean,
    //   title: "Stacked",
    //   defaultValue: true
    // },
    // discrete: {
    //   type: ControlType.Boolean,
    //   title: "Discrete",
    //   defaultValue: true
    // },

    xtitle: {
      type: ControlType.String,
      title: "X Title",
      defaultValue: "X Title"
    },
    ytitle: {
      type: ControlType.String,
      title: "Y Title",
      defaultValue: "Y Title"
    },
    prefix: {
      type: ControlType.String,
      title: "Prefix",
      defaultValue: ""
    },
    suffix: {
      type: ControlType.String,
      title: "Suffix",
      defaultValue: ""
    },
    legend: {
      type: ControlType.Enum,
      title: "Legend",
      options: ["", "bottom", "left", "top", "right"],
      optionTitles: ["None", "Bottom", "Left", "Top", "Right"]
    },
    label: {
      type: ControlType.String,
      title: "Label",
      defaultValue: "Label",
      hidden(props) {
        return props.legend === "";
      }
    }

    /**
     * @TODO add functionaity to easily create data controls
     */

    // data: {
    //   type: ControlType.Array,
    //   propertyControl: {
    //     type: ControlType.String,
    //     title: ""
    //   }
    // }
  };

  if (!!options.omittedProperties) {
    return Object.keys(properties).reduce<PropertyControls>((acc, key) => {
      if (options.omittedProperties.indexOf(key) === -1) {
        acc[key] = properties[key];
      }
      return acc;
    }, {});
  }

  return properties;
}
