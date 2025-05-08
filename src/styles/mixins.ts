import { css } from "styled-components";

// Font Family
export const fontFamily = {
  kumbhSans: '"Kumbh Sans", sans-serif',
};

// Font Weights
export const fontWeight = {
  regular: 400,
  bold: 700,
};

export const mixins = {
  fonts: {
    textPreset1: css`
      font-family: ${fontFamily.kumbhSans};
      font-weight: ${fontWeight.bold};
      font-size: 44px;
      line-height: 48px;
      letter-spacing: 0px;
    `,

    textPreset2: css`
      font-family: ${fontFamily.kumbhSans};
      font-weight: ${fontWeight.bold};
      font-size: 28px;
      line-height: 32px;
      letter-spacing: 0px;
    `,

    textPreset3Bold: css`
      font-family: ${fontFamily.kumbhSans};
      font-weight: ${fontWeight.bold};
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0px;
    `,

    textPreset3Regular: css`
      font-family: ${fontFamily.kumbhSans};
      font-weight: ${fontWeight.regular};
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0px;
    `,

    textPreset4: css`
      font-family: ${fontFamily.kumbhSans};
      font-weight: ${fontWeight.regular};
      font-size: 15px;
      line-height: 26px;
      letter-spacing: 0px;
    `,

    textPreset5: css`
      font-family: ${fontFamily.kumbhSans};
      font-weight: ${fontWeight.bold};
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 2px;
    `,

    textPreset6: css`
      font-family: ${fontFamily.kumbhSans};
      font-weight: ${fontWeight.bold};
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 1.85px;
    `,
  },
};
