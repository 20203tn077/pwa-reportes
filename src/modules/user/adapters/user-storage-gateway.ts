import { Status } from '../../../kernel/types'
import { pool } from '../../../config/postgres'
import { User } from '../entities/user'
import { IUserRepository } from '../use-cases/ports/user.repository'
import { Person } from '../entities/person'

export class UserStorageGateway implements IUserRepository {
  async findAll(): Promise<User[]> {
    const query = `
      SELECT
        u.id,
        u.username,
        u.password,
        u.user_details as "userDetails",
        u.type,
        s.id as "statusId",
        s.status as "statusStatus",
        p.id as "personId",
        p.name as "personName",
        p.surname as "personSurname",
        p.lastname as "personLastname",
        p.birthdate as "personBirthdate",
        p.curp as "personCurp",
        p.rfc as "personRfc",
        p.created_at as "personCreatedAt"
      FROM public.users u
      INNER JOIN public.statuses s ON u.status_id = s.id
      INNER JOIN public.people p ON u.person_id = p.id
      `
    const { rows } = await pool.query(query)
    return rows.map(row => {
      const status: Status = (({
        statusId: id,
        statusStatus: status
      }) => ({ id, status }))(row)

      const person: Person = (({
        personId: id,
        personName: name,
        personSurname: surname,
        personLastname: lastname,
        personBirthdate: birthdate,
        personCurp: curp,
        personRfc: rfc,
        personCreatedAt: createdAt,
      }) => ({ id, name, surname, lastname, birthdate, curp, rfc, createdAt }))(row)

      const user: User = (({
        id,
        username,
        password,
        userDetails,
        type
      }) => ({ id, username, password, userDetails, type, status, person }))(row)

      return user
    })
  }

  async findById(id: number): Promise<User> {
    const query = `
      SELECT
        u.id,
        u.username,
        u.password,
        u.user_details as "userDetails",
        u.type,
        s.id as "statusId",
        s.status as "statusStatus",
        p.id as "personId",
        p.name as "personName",
        p.surname as "personSurname",
        p.lastname as "personLastname",
        p.birthdate as "personBirthdate",
        p.curp as "personCurp",
        p.rfc as "personRfc",
        p.created_at as "personCreatedAt"
      FROM public.users u
      INNER JOIN public.statuses s ON u.status_id = s.id
      INNER JOIN public.people p ON u.person_id = p.id
      WHERE u.id = $1
      `
    const { rows } = await pool.query(query, [id])
    const row = rows[0]
    const status: Status = (({
      statusId: id,
      statusStatus: status
    }) => ({ id, status }))(row)

    const person: Person = (({
      personId: id,
      personName: name,
      personSurname: surname,
      personLastname: lastname,
      personBirthdate: birthdate,
      personCurp: curp,
      personRfc: rfc,
      personCreatedAt: createdAt,
    }) => ({ id, name, surname, lastname, birthdate, curp, rfc, createdAt }))(row)

    const user: User = (({
      id,
      username,
      password,
      userDetails,
      type
    }) => ({ id, username, password, userDetails, type, status, person }))(row)

    return user
  }

  save(user: User): Promise<User> {
    throw new Error('Method not implemented.')
  }

  update(user: User): Promise<User> {
    throw new Error('Method not implemented.')
  }

  delete(id: number): Promise<User> {
    throw new Error('Method not implemented.')
  }
}