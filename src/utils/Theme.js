const Theme = {
  fontStack: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  colorBlack: opacity =>`rgba(0, 0, 0 , ${opacity})`,
  colorWhite: opacity =>`rgba(255, 255, 255, ${opacity})`,
  colorBackground: opacity =>`rgba(33, 38, 47, ${opacity})`,
  colorText: opacity => `rgba(255, 255, 255, ${opacity})`,
  colorPrimary: opacity => `rgba(41, 121, 255, ${opacity})`,
  curveFastoutSlowin: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
}

export default Theme;
