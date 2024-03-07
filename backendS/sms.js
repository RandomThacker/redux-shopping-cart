var unirest = require("unirest");

var req = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");

req.query({
  "authorization": "HYeql2aEZADn067fUtvjL8FzJ3TMWy1R5roPigGVsIBhOQpdwbdrTKlb2Rk4qO95LF8uNy7oj0XmxVfC",
  "message": "This is a test message",
  "language": "english",
  "route": "q",
  "numbers": "9334092830",
});

req.headers({
  "cache-control": "no-cache"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});

