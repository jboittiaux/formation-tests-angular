export function beforeNow(date: Date) {
  const timestamp = date.getTime();
  return timestamp < Date.now();
}
