import { UseCase } from '../../../kernel/contract'
import { User } from '../entities/user'
import { IUserRepository } from './ports/user.repository'

export class GetAllUsersInteractor implements UseCase<undefined, User[]> {
  constructor(private readonly _repository: IUserRepository) {}

  execute(): Promise<User[]> {
    return this._repository.findAll()
  }
}