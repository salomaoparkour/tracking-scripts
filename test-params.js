// test-params.js
(function () {
  const params = new URLSearchParams(window.location.search);
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  console.log("Captured URL parameters:", result);
})();