/* Simulates a network latency */
export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
