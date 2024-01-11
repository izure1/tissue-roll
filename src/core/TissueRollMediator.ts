import { TissueRoll } from './TissueRoll'

export class TissueRollMediator extends TissueRoll {
  static Put(db: TissueRoll, data: number[], autoIncrement: boolean): string {
    return TissueRoll.CallInternalPut(db, data, autoIncrement)
  }

  static Update(db: TissueRoll, id: string, data: string): {
    id: string
    data: string
  } {
    return TissueRoll.CallInternalUpdate(db, id, data)
  }

  static Delete(db: TissueRoll, index: number, order: number, countDecrement: boolean): void {
    return TissueRoll.CallInternalDelete(db, index, order, countDecrement)
  }
}
