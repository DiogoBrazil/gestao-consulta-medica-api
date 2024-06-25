-- CreateTable
CREATE TABLE "UserAdmin" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profile" TEXT NOT NULL DEFAULT 'administrator',
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDoctor" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "crm" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profile" TEXT NOT NULL DEFAULT 'doctor',
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserDoctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOperator" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profile" TEXT NOT NULL DEFAULT 'operator',
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserOperator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPatient" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "socialName" TEXT NOT NULL,
    "cns" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "bloodType" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPatient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalConsultationSchedule" (
    "id" TEXT NOT NULL,
    "consultationDate" TIMESTAMP(3) NOT NULL,
    "consultationHour" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "operatorId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalConsultationSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalConsultation" (
    "id" TEXT NOT NULL,
    "scheduleId" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "imc" DOUBLE PRECISION NOT NULL,
    "maximumBloodPressure" DOUBLE PRECISION NOT NULL,
    "minimumBloodPressure" DOUBLE PRECISION NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "heartRate" DOUBLE PRECISION NOT NULL,
    "respiratoryRate" DOUBLE PRECISION NOT NULL,
    "capillaryBloodGlucose" DOUBLE PRECISION NOT NULL,
    "saturation" DOUBLE PRECISION NOT NULL,
    "anamnese" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalConsultation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DoctorPatients" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OperatorPatients" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAdmin_cpf_key" ON "UserAdmin"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "UserAdmin_email_key" ON "UserAdmin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserDoctor_crm_key" ON "UserDoctor"("crm");

-- CreateIndex
CREATE UNIQUE INDEX "UserDoctor_cpf_key" ON "UserDoctor"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "UserDoctor_email_key" ON "UserDoctor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserOperator_cpf_key" ON "UserOperator"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "UserOperator_email_key" ON "UserOperator"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserPatient_cns_key" ON "UserPatient"("cns");

-- CreateIndex
CREATE UNIQUE INDEX "UserPatient_cpf_key" ON "UserPatient"("cpf");

-- CreateIndex
CREATE INDEX "MedicalConsultationSchedule_patientId_idx" ON "MedicalConsultationSchedule"("patientId");

-- CreateIndex
CREATE INDEX "MedicalConsultationSchedule_doctorId_idx" ON "MedicalConsultationSchedule"("doctorId");

-- CreateIndex
CREATE INDEX "MedicalConsultationSchedule_operatorId_idx" ON "MedicalConsultationSchedule"("operatorId");

-- CreateIndex
CREATE UNIQUE INDEX "MedicalConsultation_scheduleId_key" ON "MedicalConsultation"("scheduleId");

-- CreateIndex
CREATE INDEX "MedicalConsultation_patientId_idx" ON "MedicalConsultation"("patientId");

-- CreateIndex
CREATE INDEX "MedicalConsultation_doctorId_idx" ON "MedicalConsultation"("doctorId");

-- CreateIndex
CREATE UNIQUE INDEX "_DoctorPatients_AB_unique" ON "_DoctorPatients"("A", "B");

-- CreateIndex
CREATE INDEX "_DoctorPatients_B_index" ON "_DoctorPatients"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OperatorPatients_AB_unique" ON "_OperatorPatients"("A", "B");

-- CreateIndex
CREATE INDEX "_OperatorPatients_B_index" ON "_OperatorPatients"("B");

-- AddForeignKey
ALTER TABLE "MedicalConsultationSchedule" ADD CONSTRAINT "MedicalConsultationSchedule_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "UserDoctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalConsultationSchedule" ADD CONSTRAINT "MedicalConsultationSchedule_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "UserOperator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalConsultationSchedule" ADD CONSTRAINT "MedicalConsultationSchedule_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "UserPatient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalConsultation" ADD CONSTRAINT "MedicalConsultation_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "MedicalConsultationSchedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalConsultation" ADD CONSTRAINT "MedicalConsultation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "UserPatient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalConsultation" ADD CONSTRAINT "MedicalConsultation_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "UserDoctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoctorPatients" ADD CONSTRAINT "_DoctorPatients_A_fkey" FOREIGN KEY ("A") REFERENCES "UserDoctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoctorPatients" ADD CONSTRAINT "_DoctorPatients_B_fkey" FOREIGN KEY ("B") REFERENCES "UserPatient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OperatorPatients" ADD CONSTRAINT "_OperatorPatients_A_fkey" FOREIGN KEY ("A") REFERENCES "UserOperator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OperatorPatients" ADD CONSTRAINT "_OperatorPatients_B_fkey" FOREIGN KEY ("B") REFERENCES "UserPatient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
