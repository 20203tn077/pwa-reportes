import { UseCase } from "../../../kernel/contract"
import { User } from "../entities/user"
import { IUserRepository } from "./ports/user.repository"

export class SaveUserInteractor implements UseCase<User, User> {
  constructor(private readonly _userRepository: IUserRepository) {}

  execute(payload: User): Promise<User> {
    return this._userRepository.save(payload)
  }
}