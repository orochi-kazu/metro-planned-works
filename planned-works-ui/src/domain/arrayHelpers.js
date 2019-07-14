const anyIntersection = (aList, bList) =>
  aList.reduce((acc, station) => acc || bList.includes(station), false)

const zip = (aList, bList) => aList.map((a, i) => [a, bList[i]])

const equalLists = (aList, bList) =>
  aList.length === bList.length &&
  zip(aList, bList)
    .reduce((acc, [a, b]) => acc && (a === b), true)

const strictSubset = (short, long) => {
  const smaller = short.length < long.length
  const containsAll = equalLists(short, short.filter(it => long.includes(it)))
  return smaller && containsAll
}

export {
  anyIntersection,
  zip,
  equalLists,
  strictSubset
}
