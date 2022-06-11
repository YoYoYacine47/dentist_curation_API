import React from "react";
import Tbody from "./tbody";

function JsonDataDisplay({ data }) {
  return (
    <div>
      <table className="table-fixed border-collapse border border-slate-400">
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
        <tbody>
          {data.map((row) => (
            <Tbody key={row.patient_id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
