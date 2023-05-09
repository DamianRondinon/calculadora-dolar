"use client";

import { useState } from "react";
import Form from "../components/Form";

import { Cotizacion } from "../types";

export default function HomeClient({
  cotizaciones,
}: {
  cotizaciones: Cotizacion[];
}) {
  const [amount, setAmount] = useState(0);

  return (
    <main className="grid gap-8">
      <section>
        <Form value={amount} onChange={(amount: number) => setAmount(amount)} />
      </section>
      <section className="flex-1 rounded-3xl bg-[#63B0CD] p-8 text-white overflow-y-auto">
        <ul className="flex flex-col gap-4">
          {cotizaciones.map(
            ({nombre, venta}) => {
              const total = amount ? Number(amount / venta) : venta;

              return (
                <li
                  key={nombre}
                  className="flex gap-4 justify-between items-center"
                >
                  <div className="text-md font-medium">{nombre}</div>
                  <div className="flex items-center gap-4">
                    {amount ? (
                      <div className="text-xl font-bold">
                        {Number(total).toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </div>
                    ) : null}
                    <div className="text-2xl font-semibold">
                      {Number(venta).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </section>
    </main>
  );
}
