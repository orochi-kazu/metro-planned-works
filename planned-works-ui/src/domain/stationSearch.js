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

const findLinesWithContiguousRange = (stationsByLineName, a, b) => {
  const searchResult = lines => ({ lines })
  const searchError = error => ({ error })

  if (a === b) {
    return searchError('no need to catch the train')
  }

  const aLines = findLinesWith(stationsByLineName, a)
  const bLines = findLinesWith(stationsByLineName, b)

  if (aLines.length === 0 && bLines.length === 0) {
    return searchError(`couldn't find either station`)
  } else if (aLines.length === 0) {
    return searchError(`couldn't find station "${a}"`)
  } else if (bLines.length === 0) {
    return searchError(`couldn't find station "${b}"`)
  }

  if (equalLists(aLines, bLines)) {
    return searchResult(aLines)
  }

  const [short, long] = aLines.length < bLines.length ? [aLines, bLines] : [bLines, aLines]
  if (strictSubset(short, long)) {
    return searchResult(short)
  }

  return searchError('oh no')
}

const intersectsCityLoop = (cityLoopStations, a, b) =>
  cityLoopStations.includes(a) || cityLoopStations.includes(b)

// const debug = (label = 'debug', obj) => { console.log(label, obj) }

const findLinesWith = (stationsByLineName, a) =>
  Object.entries(stationsByLineName)
    .reduce((acc, [line, stations]) => (
      stations.includes(a) ? [...acc, line] : acc
    ), [])

const stationSearch = store => ({
  intersectsCityLoop: (a, b) => intersectsCityLoop(store.cityLoopStations(), a, b)
})
const __test__ = {
  findLinesWith,
  findLinesWithContiguousRange,
  intersectsCityLoop
}

export { stationSearch, __test__ }
