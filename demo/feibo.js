function feibo(n) {
  if (n == 1 || n == 2) {
      return 1
  }
  return feibo(n - 1) + feibo(n - 2);
}
console.log(feibo(5));