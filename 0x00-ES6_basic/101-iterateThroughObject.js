export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  const iterator = reportWithIterator;
  let iteration = iterator.next();

  while (!iteration.done) {
    result += iteration.value;
    iteration = iterator.next();

    if (!iteration.done) {
      result += ' | ';
    }
  }

  return result;
}
