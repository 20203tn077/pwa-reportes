import { UseCase } from '../../../kernel/contract'
import { User } from '../entities/user'
import { IUserRepository } from './ports/user.repository'

export class GetUserByIdInteractor implements UseCase<number, User> {
  constructor(private readonly _userRepository: IUserRepository) {}

  execute(payload: number): Promise<User> {
    return this._userRepository.findById(payload)
  }
}
