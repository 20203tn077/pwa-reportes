export type Entity<Id extends number | string> = {
  id: Id
}

export type Pagination = {
  orderBy?: string
  page?: number
  offset?: number
  limit?: number
  order?: string
  filter?: string
}

export type Json = Record<string, any>

export type JsonArray = Json[]

export type Status = Entity<number> & {
  status: string
}


export enum Errors {
  MISSING_FIELDS = 'Missing fields',
  RECORD_NOT_REGISTERED = 'Record not registered',
  RECORD_NOT_UPDATED = 'Record not updated',
  NO_DATA_FOUND = 'No data found',
  CREDENTIALS_MISMATCH = 'Credentials mismatch',
  UNAUTHORIZED = 'Unauthorized',
}