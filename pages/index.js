import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Header from "./header";
import JsonDataDisplay from "./jsonToTable";
import { json2csv } from "json-2-csv";
import { CSVLink, CSVDownload } from "react-csv";

export default function Home() {
  // const endpoint = "https://yoyoyacine47.pythonanywhere.com/api/";
  const [date_to, setDate_to] = useState();
  const [date_from, setDate_from] = useState();
  const [dataset, setDataset] = useState();
  const endpoint = `http://yoyoyacine47.pythonanywhere.com/api/${date_from}/${date_to}`;
  const url =
    "http://yoyoyacine47.pythonanywhere.com/api/<DATE_FROM>/<DATE_TO>";
  let response = null;
  const getDate = async () => {
    response = await fetch(endpoint);
    setDataset(await response.json());
    console.log(response);
    console.log(dataset);

    console.log({ date_to });
    console.log({ date_from });
  };

  const downloadCSV = () => {
    json2csv(
      dataset,
      (err, csv) => {
        new CSVLink(csv);
      },
      {}
    );
  };
  const downloadEXCEL = () => {
    json2csv(
      dataset,
      (err, csv) => {
        new CSVLink(csv);
      },
      options
    );
  };
  const downloadJSON = async () => {
    //const blob = await response.blob(); // blob just as yours
    //const href = URL.createObjectURL(response);
    const link = document.createElement("a");
    link.href = response;
    link.download = "file.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-screen bg-gray-50 max-w-7xl mx-auto">
      <Head>
        <title>Dentistry Curation API</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header />
        <h3 className="text-4xl text-gray-700 font-medium p-2">
          Download Directly The Dataset
        </h3>
        <p className="p-2 text-gray-700 text-lg font-medium mb-8">
          select the beginning date and the end date to get all the problems
          detected in all patient and at all clinics of the country at that
          period
        </p>
        <div className="flex justify-center items-center space-x-4">
          <input
            value={date_from}
            onChange={(e) => setDate_from(e.target.value)}
            type="date"
            name="from_date"
            id="from_date"
          />
          <input
            onChange={(e) => setDate_to(e.target.value)}
            value={date_to}
            type="date"
            name="to_date"
            id="to_date"
          />
          <button className="bg-blue-400 p-2 rounded-lg" onClick={getDate}>
            submit
          </button>
        </div>
        <div className="overflow-scroll m-10 max-h-96">
          {dataset && <JsonDataDisplay data={dataset} />}
        </div>

        <div className="flex m-4 justify-around">
          <button
            onClick={downloadCSV}
            className="p-2 bg-blue-500 font-bold text-white rounded-lg"
          >
            Download CSV
          </button>
          <button
            onClick={downloadEXCEL}
            className="p-2 bg-blue-500 font-bold text-white rounded-lg"
          >
            Download EXCEL
          </button>
          <button
            onClick={downloadJSON}
            className="p-2 bg-blue-500 font-bold text-white rounded-lg"
          >
            Download JSON
          </button>
          {/* <CSVLink data={csvData}>Download me</CSVLink>; */}
        </div>

        <div className="">
          <h3 className="text-4xl text-gray-700 font-medium p-4 mt-8">
            Or Use the API Url
          </h3>
          <p className="p-4 text-gray-700 text-lg font-medium mb-4">
            get data whenever you need by using this endpoint just replace the
            beginning date and the end date
          </p>
          <div className="flex justify-between items-center border rounded-lg m-4 bg-gray-200 font-mono font-semibold text-gray-700">
            <p className=" p-4">{url}</p>
            <div
              className="h-full bg-gray-400 p-4 rounded-r-lg cursor-pointer"
              onClick={() => {}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>

      <footer className="h-10"></footer>
    </div>
  );
}
