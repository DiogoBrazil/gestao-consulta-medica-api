import { injectable } from "tsyringe";
import argon2 from "argon2";

@injectable()
class PasswordProvider {
    async createHash(password: string): Promise<string> {
        return argon2.hash(password);
    }

    async verifyHash(password: string, hash: string): Promise<boolean> {
        return argon2.verify(hash, password);
    }
}

export { PasswordProvider };
