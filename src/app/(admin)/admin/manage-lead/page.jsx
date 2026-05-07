"use client";

import { useEffect, useState } from "react";

export default function Page() {

  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {

    try {

      const response = await fetch(
        "/api/contact"
      );

      const data =
        await response.json();

      if (response.ok) {

        setLeads(data.data);

      }

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchLeads();

  }, []);

  return (

    <section className="flex flex-col gap-6">

      <div>

        <h5 className="font-semibold">
          Manage Leads
        </h5>

        <p className="opacity-70 text-sm">
          View all contact enquiries
        </p>

      </div>

      <div className="overflow-hidden rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)]">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead className="border-b border-[var(--rv-border)] bg-[var(--rv-primary-light)]">

              <tr>

                <th className="text-left p-5 font-medium">
                  Name
                </th>

                <th className="text-left p-5 font-medium">
                  Email
                </th>

                <th className="text-left p-5 font-medium">
                  Mobile
                </th>

                <th className="text-left p-5 font-medium">
                  Service
                </th>

                <th className="text-left p-5 font-medium">
                  Message
                </th>

                <th className="text-left p-5 font-medium">
                  Date
                </th>

              </tr>

            </thead>

            <tbody>

              {leads.length > 0 ? (

                leads.map((lead, i) => (

                  <tr
                    key={i}
                    className="border-t border-[var(--rv-border)]"
                  >

                    <td className="p-5 font-medium">
                      {lead.name}
                    </td>

                    <td className="p-5">
                      {lead.email}
                    </td>

                    <td className="p-5">
                      {lead.mobile}
                    </td>

                    <td className="p-5">

                      <span className="px-3 py-1 rounded-full bg-[var(--rv-primary-light)] text-[var(--rv-primary)] text-sm">

                        {lead.service}

                      </span>

                    </td>

                    <td className="p-5 opacity-70 max-w-[300px]">
                      {lead.message}
                    </td>

                    <td className="p-5 opacity-70">

                      {new Date(
                        lead.createdAt
                      ).toLocaleDateString()}

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan={6}
                    className="p-10 text-center opacity-60"
                  >

                    No leads found

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </section>

  );

}