export const Media = {
  desktop: '1440px',
  tablet: '1024px',
  mobile: '400px',
};

const Theme = {
  ...Media,
  fontStack: `system-ui, -apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, Helvetica Neue, sans-serif`,
  colorBlack: (opacity = 1) => `rgba(0, 0, 0 , ${opacity})`,
  colorWhite: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  colorBackground: (opacity = 1) => `rgba(33, 38, 47, ${opacity})`,
  colorBackgroundDark: (opacity = 1) => `rgba(24, 28, 35, ${opacity})`,
  colorText: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  colorBlueLight: (opacity = 1) => `rgba(57, 142, 253, ${opacity})`,
  colorBlue: (opacity = 1) => `rgba(41, 121, 255, ${opacity})`,
  colorBlueDark: (opacity = 1) => `rgba(24, 109, 253, ${opacity})`,
  curveFastoutSlowin: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
};

export default Theme;
