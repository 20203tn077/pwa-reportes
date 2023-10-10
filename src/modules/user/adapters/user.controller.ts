import { Request, Response, Router } from 'express'
import { GetAllUsersInteractor } from '../use-cases/get-all-users.interactor'
import { UserStorageGateway } from './user-storage-gateway'
import { GetUserByIdInteractor } from '../use-cases/get-user-by-id.interactor'
import { SaveUserInteractor } from '../use-cases/save-user.interactor'
import { User } from '../entities/user'

export class UserController {
  static async getAll(req: Request, res: Response) {
    try {
      const repository = new UserStorageGateway()
      const interactor = new GetAllUsersInteractor(repository)
      const users = await interactor.execute()
      res.status(200).json(users)
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: e })
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const repository = new UserStorageGateway()
      const interactor = new GetUserByIdInteractor(repository)
      const user = await interactor.execute(parseInt(req.params.id))
      res.status(200).json(user)
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: e })
    }
  }

  static async save(req: Request, res: Response) {
    try {
      const repository = new UserStorageGateway()
      const interactor = new SaveUserInteractor(repository)
      const users = await interactor.execute(req.body as User)
      res.status(200).json(users)
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: e })
    }
  }
}

export const userRouter = Router()

userRouter.get('/', [], UserController.getAll)
userRouter.get('/:id', [], UserController.getById)
userRouter.post('/', [], UserController.save)