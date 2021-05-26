import { User } from './user';

export interface Team {
    name: string;
    users: Array<User>;
}
