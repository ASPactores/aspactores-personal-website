import type { AccessArgs, User } from 'payload'

type isAuthenticated = (args: AccessArgs<User>) => boolean

export const authenticatedUser: isAuthenticated = ({ req: { user } }) => {
  return Boolean(user)
}
