import { absYCenter } from "@collie-ui/css";
import { styled } from "./styled";

export const StyledButton = styled("button", {
  w: 100,
  h: 40,
  _hover: {
    opacity: 0.8,
    background: "$primary",
    borderRadius: 10,
    color: "white",
  },

  _after: {
    h: "100%",
    w: [10, 4],
    background: "red",
    ...absYCenter({ right: 0 }),
  },

  variants: {
    size: {
      full: {
        w: "100%",
      },
      big: {
        w: 80,
      },
      md: {
        w: 40,
      },
      sm: {
        w: 20,
      },
    },
    shape: {
      round: {
        borderRadius: 9999,
      },
      rect: {
        borderRadius: 0,
      },
    },
    status: {
      disabled: {
        true: {
          cursor: "not-allowed",
          background: "$gray200",
        },
      },
    },
  },

  compoundVariants: [
    {
      size: "big",
      shape: "round",
      css: {
        background: "$gray200",
      },
    },
  ],
  defaultVariants: {
    shape: "rect",
  },
});
