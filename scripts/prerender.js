const { run } = require("react-snap");

run({
  include: [
    "/privacy",
    "/support"
  ],
  crawl: true,
  skipThirdPartyRequests: true,
  headless: false
});
