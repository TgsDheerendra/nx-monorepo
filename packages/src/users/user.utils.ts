import { UserEntity } from './user.entity';
import { IUser } from './user.interface';

export const formatUser = (user: IUser) => ({
  id: user.id,
  fullName: user.name.toUpperCase(),
  role: user.role,
});

export function formatUserName(name: string): string {
  return name.trim().toLowerCase();
}

export function getUserFromAuthHeader(authHeader?: string): UserEntity {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Invalid or missing Authorization header');
  }

  const tokenPart = authHeader.split(' ')[1];

  try {
    const decoded = Buffer.from(tokenPart, 'base64').toString('utf-8');
    const user: UserEntity = JSON.parse(decoded);
    return user;
  } catch (e) {
    throw new Error('Failed to decode user from token');
  }
}
