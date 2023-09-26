import { Entity, Status } from 'kernel/types'

export type Person = Entity<number> & {
  name: string
  surname: string
  lastname?: string
  birthdate?: Date
  createdAt?: Date
  curp?: string
  rcf?: string
  status?: Status
}