import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor() {

    }

    getUsersCount() {
        return 17;
    }
}
