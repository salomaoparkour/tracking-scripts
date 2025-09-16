// test-params.js
(function () {
  const params = new URLSearchParams(window.location.search);
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  
  if (Object.keys(result).length > 0) {
    console.log("Captured URL parameters:", result);
  } else {
    console.log("No URL parameters found on this page.");
  }
})();
