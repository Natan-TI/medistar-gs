import { patients } from '../data/patients';

export function PatientTable() {
    return (
        <div className="patient-table">
            <div className="table-header">
                <span>Paciente</span>
                <span>Região</span>
                <span>Sintomas</span>
                <span>Conexão</span>
                <span>Distância</span>
                <span>Risco</span>
                <span>Prioridade</span>
            </div>

            {patients.map((patient) => (
                <div className="table-row" key={patient.name}>
                    <span>{patient.name}</span>
                    <span>{patient.region}</span>
                    <span>{patient.symptoms}</span>
                    <span>{patient.connection}</span>
                    <span>{patient.distance}</span>
                    <span>{patient.climateRisk}</span>
                    <strong className={`priority ${patient.level}`}>{patient.priority}</strong>
                </div>
            ))}
        </div>
    );
}