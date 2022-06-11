import React from "react";

function Tbody({ row }) {
  return (
    <tr key={row.id_patient}>
      <td className="px-4 py-2">{row.problem}</td>
      <td className="px-4 py-2">{row.tooth}</td>
      <td className="px-4 py-2">{row.suggested}</td>
      <td className="px-4 py-2">{row.selected}</td>
      <td className="px-4 py-2">{row.selected_final_step}</td>
      <td className="px-4 py-2">{row.suggested_final_step}</td>
      <td className="px-4 py-2">{row.visit_time}</td>
      <td className="px-4 py-2">{row.visit_date}</td>
      <td className="px-4 py-2">{row.patient_id}</td>
      <td className="px-4 py-2">{row.patient_commune}</td>
      <td className="px-4 py-2">{row.patient_daira}</td>
      <td className="px-4 py-2">{row.patient_wilaya}</td>
      <td className="px-4 py-2">{row.dentist_id}</td>
      <td className="px-4 py-2">{row.clinic_id}</td>
      <td className="px-4 py-2">{row.clinic_name}</td>
      <td className="px-4 py-2">{row.clinic_commune}</td>
      <td className="px-4 py-2">{row.clinic_daira}</td>
      <td className="px-4 py-2">{row.clinic_wilaya}</td>
    </tr>
  );
}

export default Tbody;
