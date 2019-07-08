import { __test__ } from './stationSearch'

const otherington = { 'Otherington': ['Janty', 'Klorng', 'Lindotay', 'Vistul', 'Ufreatto'] }
const kengusLine = { 'Kengus Line': ['Floob', 'Smorch', 'Fenquich', 'Pung', 'Ounzef', 'Plingle'] }
const crunkstonia = { 'Crunkstonia': ['Jumpfl', 'Steng', 'Ingdewck', 'Pung', 'Ounzef', 'Plingle'] }
const malamaine = { 'Malamaine': ['Lanfesiy', 'Hirnex', 'Steng', 'Ingdewck', 'Pung', 'Ounzef', 'Plingle'] }

const stations = {
  noOverlap: { ...kengusLine, ...otherington },
  simpleOverlap: { ...kengusLine, ...crunkstonia },
  doubleJunction: { ...kengusLine, ...crunkstonia, ...malamaine }
}

describe('anyIntersection', () => {
  const subject = __test__.anyIntersection

  it('matches intersecting sets', () => {
    // given
    const a = ['Janty', 'Klorng', 'Lindotay']
    const b = ['Lindotay', 'Vistul', 'Ufreatto']

    // when
    const intersect = subject(a, b)

    // then
    expect(intersect).toBe(true)
  })

  it(`doesn't matches non-intersecting sets`, () => {
    // given
    const a = ['Janty', 'Klorng']
    const b = ['Lindotay', 'Vistul', 'Ufreatto']

    // when
    const intersect = subject(a, b)

    // then
    expect(intersect).toBe(false)
  })
})

describe('findLinesWithContiguousRange', () => {
  const subject = __test__.findLinesWithContiguousRange

  it('errors with same stations', () => {
    // given
    const a = 'Floob'
    const b = 'Floob'

    // when
    const result = subject(stations.simpleOverlap, a, b)

    // then
    expect(result.error).toEqual('no need to catch the train')
    expect(result.lines).toBeUndefined()
  })

  it('errors with unfound stations', () => {
    // given
    const a = 'Janty'
    const b = 'Klorng'

    // when
    const result = subject(stations.simpleOverlap, a, b)

    // then
    expect(result.error).toEqual(`couldn't find either station`)
    expect(result.lines).toBeUndefined()
  })

  it('errors with unfound station b', () => {
    // given
    const a = 'Floob'
    const b = 'Klorng'

    // when
    const result = subject(stations.simpleOverlap, a, b)

    // then
    expect(result.error).toEqual(`couldn't find station "Klorng"`)
    expect(result.lines).toBeUndefined()
  })

  it('errors with unfound station a', () => {
    // given
    const a = 'Floob'
    const b = 'Klorng'

    // when
    const result = subject(stations.simpleOverlap, b, a)

    // then
    expect(result.error).toEqual(`couldn't find station "Klorng"`)
    expect(result.lines).toBeUndefined()
  })

  it('errors with mismatched lines', () => {
    // given
    const a = 'Smorch'
    const b = 'Ufreatto'

    // when
    const result = subject(stations.noOverlap, b, a)

    // then
    expect(result.error).toEqual(`these aren't on the same line`)
    expect(result.lines).toBeUndefined()
  })

  it('matches single line with unique pair', () => {
    // given
    const a = 'Floob'
    const b = 'Fenquich'

    // when
    const result = subject(stations.simpleOverlap, a, b)

    // then
    expect(result.error).toBeUndefined()
    expect(result.lines).toEqual(['Kengus Line'])
  })

  it('matches single line with non-unique pair', () => {
    // given
    const a = 'Floob'
    const b = 'Pung'

    // when
    const result = subject(stations.simpleOverlap, a, b)

    // then
    expect(result.error).toBeUndefined()
    expect(result.lines).toEqual(['Kengus Line'])
  })

  it('matches several with line-union pair', () => {
    // given
    const a = 'Plingle'
    const b = 'Pung'

    // when
    const result = subject(stations.simpleOverlap, a, b)

    // then
    expect(result.error).toBeUndefined()
    expect(result.lines).toEqual(['Kengus Line', 'Crunkstonia'])
  })

  it('matches several with multi-junction line-union pair', () => {
    // given
    const a = 'Plingle'
    const b = 'Steng'

    // when
    const result = subject(stations.doubleJunction, a, b)

    // then
    expect(result.error).toBeUndefined()
    expect(result.lines).toEqual(['Crunkstonia', 'Malamaine'])
  })
})

describe('findLinesWith', () => {
  const subject = __test__.findLinesWith

  it('matches no lines', () => {
    // given
    const station = 'Steveton'

    // when
    const lines = subject(stations.simpleOverlap, station)

    // then
    expect(lines).toEqual([])
  })

  it('matches a single line', () => {
    // given
    const station = 'Floob'

    // when
    const lines = subject(stations.simpleOverlap, station)

    // then
    expect(lines).toEqual(['Kengus Line'])
  })

  it('matches some lines', () => {
    // given
    const station = 'Plingle'

    // when
    const lines = subject(stations.simpleOverlap, station)

    // then
    expect(lines).toEqual(['Kengus Line', 'Crunkstonia'])
  })
})

describe('intersectsCityLoop', () => {
  const subject = __test__.intersectsCityLoop
  const loopStation = otherington.Otherington

  it('matches both loop stations', () => {
    // given
    const a = 'Janty'
    const b = 'Lindotay'

    // when
    const match = subject(loopStation, a, b)

    // then
    expect(match).toBe(true)
  })

  it('matches a single loop stations', () => {
    // given
    const a = 'Vistul'
    const b = 'Smorch'

    // when
    const match = subject(loopStation, a, b)

    // then
    expect(match).toBe(true)
  })

  it(`doesn't match no loop stations`, () => {
    // given
    const a = 'Hirnex'
    const b = 'Ounzef'

    // when
    const match = subject(loopStation, a, b)

    // then
    expect(match).toBe(false)
  })
})
