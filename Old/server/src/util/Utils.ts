import crypto from 'crypto';

export default class Utils {
    constructor() {
    }

    async createSalt(){
        return crypto.randomBytes(16).toString('hex');
    }

    async createHashedPasswordWithSalt(salt: string, password: string){
        return crypto.pbkdf2Sync(password, salt,
            1000, 64, `sha512`).toString(`hex`);
    }

}