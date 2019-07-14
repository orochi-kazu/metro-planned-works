import { __test__ } from './alerts'

const allAlerts = {
  otherington: { line: 'Otherington', plannedWorks: [ { id: 999 }, { id: 888 } ] },
  kengusLine: { line: 'Kengus Line', plannedWorks: [ { id: 111 }, { id: 222 } ] },
  crunkstonia: { line: 'Crunkstonia', plannedWorks: [ { id: 333 }, { id: 222 } ] },
  malamaine: { line: 'Malamaine', plannedWorks: [ { id: 444 }, { id: 333 }, { id: 222 } ] }
}

describe('alertsForLines', () => {
  const subject = __test__.alertsForLines

  it('filters alerts by lines', () => {
    // given
    const alerts = [
      allAlerts.otherington,
      allAlerts.kengusLine,
      allAlerts.crunkstonia,
      allAlerts.malamaine
    ]
    const lines = ['Kengus Line', 'Malamaine']

    // when
    const linesAlerts = subject(alerts, lines)

    // then
    expect(linesAlerts).toEqual([
      allAlerts.kengusLine,
      allAlerts.malamaine
    ])
  })
})

describe('detailIdsForAlerts', () => {
  const subject = __test__.detailIdsForAlerts

  it('yields list of unique alert IDs', () => {
    // given
    const linesAlerts = [
      allAlerts.kengusLine,
      allAlerts.malamaine
    ]

    // when
    const ids = subject(linesAlerts)

    // then
    expect(ids).toEqual([ 111, 222, 444, 333 ])
  })
})
