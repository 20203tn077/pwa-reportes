import { pool } from 'config/postgres'
import { User } from '../entities/user'
import { IUserRepository } from '../use-cases/ports/user.repository'

export class UserStorageGateway implements IUserRepository {
  async findAll(): Promise<User[]> {
    const query = `
    SELECT 
      id,
      username,
      created_at as "createdAt",
      last_signin as "lastSignIn",
      s.id as "statusId"
      s.description as "statusDescription",
      r.description as "role",
      p.name,
      p.surname,
      p.lastname
    FROM users
    ORDER BY
      FROM user ORDER BY id DESC`
    const { rows: userRows} = await pool.query(query)
    return userRows.map(user => <User> user)
  }

  findById(): Promise<User> {
    throw new Error('Method not implemented.')
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