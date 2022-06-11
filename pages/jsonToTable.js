import React from "react";
function JsonDataDisplay({ data }) {
  console.log(data);
  const DisplayData = data.map((row) => {
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
  });

  return (
    <div>
      <table className="table-fixed border border-collapse border border-slate-400">
        <thead className="bg-gray-200  font-medium">
          <tr className="">
            <td className="border border-slate-300 px-4 py-2">problem</td>
            <td className="border border-slate-300 px-4 py-2">tooth</td>
            <td className="border border-slate-300 px-4 py-2">suggested</td>
            <td className="border border-slate-300 px-4 py-2">selected</td>
            <td className="border border-slate-300 px-4 py-2">
              selected_final_step
            </td>
            <td className="border border-slate-300 px-4 py-2">
              suggested_final_step
            </td>
            <td className="border border-slate-300 px-4 py-2">visit_time</td>
            <td className="border border-slate-300 px-4 py-2">visit_date</td>
            <td className="border border-slate-300 px-4 py-2">patient_id</td>
            <td className="border border-slate-300 px-4 py-2">
              patient_commune
            </td>
            <td className="border border-slate-300 px-4 py-2">patient_daira</td>
            <td className="border border-slate-300 px-4 py-2">
              patient_wilaya
            </td>
            <td className="border border-slate-300 px-4 py-2">dentist_id</td>
            <td className="border border-slate-300 px-4 py-2">clinic_id</td>
            <td className="border border-slate-300 px-4 py-2">clinic_name</td>
            <td className="border border-slate-300 px-4 py-2">
              clinic_commune
            </td>
            <td className="border border-slate-300 px-4 py-2">clinic_daira</td>
            <td className="border border-slate-300 px-4 py-2">clinic_wilaya</td>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
