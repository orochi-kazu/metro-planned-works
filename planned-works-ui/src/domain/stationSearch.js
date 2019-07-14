import { anyIntersection, equalLists, strictSubset } from './arrayHelpers'

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

  if (!anyIntersection(aLines, bLines)) {
    return searchError(`these aren't on the same line`)
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

const stationRange = (stationsByLineName, line, a, b) => {
  const lineStations = stationsByLineName[line]
  const iA = lineStations.indexOf(a)
  const iB = lineStations.indexOf(b)

  if (iA < 0 || iB < 0) {
    return []
  }

  const [start, end] = iA < iB ? [iA, iB] : [iB, iA]
  const stations = lineStations.slice(start, end + 1)
  return (stations[0] === a)
    ? stations
    : stations.reverse()
}

const stationSearch = ({ store }) => ({
  search: (a, b) => {
    const cityLoop = intersectsCityLoop(store.cityLoopStations(), a, b)
    const linesResult = findLinesWithContiguousRange(store.stationsByLineName(), a, b)
    if (linesResult.error) {
      return linesResult
    }
    const lines = linesResult.lines
    const line = lines[0]
    const stations = line ? stationRange(store.stationsByLineName(), line, a, b) : []
    return {
      cityLoop, lines, stations
    }
  }
})
const __test__ = {
  anyIntersection,
  findLinesWith,
  findLinesWithContiguousRange,
  intersectsCityLoop,
  stationRange
}

export { stationSearch, __test__ }
