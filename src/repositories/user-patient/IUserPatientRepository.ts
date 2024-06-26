export interface IUserPatientRepository {
    create(user: {
        fullName: string;
        sex: string;
        socialName?: string;
        cns: string;
        cpf: string;
        birthDate: string;
        bloodType?: string;
        phone: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }): Promise<any>;

    findByCpf(cpf: string): Promise<any> | null;
}
