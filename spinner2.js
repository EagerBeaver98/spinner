let count = -1;
setInterval(() => {
  if (count === 0) {
    process.stdout.write('\r|');
  } else if (count === 1) {
    process.stdout.write('\r/');
  } else if (count === 2) {
    process.stdout.write('\r-');
  } else {
    process.stdout.write('\r\\');
    count = -1;
  }
  count++;
}, 100);
