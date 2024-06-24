import { injectable } from "tsyringe";
import { sign } from "jsonwebtoken";

@injectable()
class JWTProvider {
    private secret: string;

    constructor() {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }
        this.secret = process.env.JWT_SECRET;
    }

    createToken(payload: object, subject: string, expiresIn: string): string {
        return sign(payload, this.secret, {
            subject,
            expiresIn,
        });
    }

    verifyToken(token: string): object | string {
        try {
            return sign(token, this.secret);
        } catch (err) {
            return "";
        }
    }
}

export { JWTProvider };
