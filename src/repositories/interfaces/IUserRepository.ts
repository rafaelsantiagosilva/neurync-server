import type { User } from '@prisma/client'

export default interface IUserRepository {
  getUserById: (id: string) => Promise<User | null>
  getUserByEmail: (email: string) => Promise<User | null>
  createUser: (name: string, email: string, password: string) => Promise<void>
  updateUserById: (
    id: string,
    name: string,
    email: string,
    password: string
  ) => Promise<void>
  deleteUserById: (id: string) => Promise<void>
}
