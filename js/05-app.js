document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.log("visibilityState = visible");
  } else {
    console.log("visibilityState = hidden");
  }
});
