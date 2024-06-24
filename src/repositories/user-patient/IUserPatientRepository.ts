export interface IUserPatientRepository {
    create(user: {
        name: string;
        email: string;
        password: string;
    }): Promise<any>;

    findByEmail(email: string): Promise<any> | null;
}
