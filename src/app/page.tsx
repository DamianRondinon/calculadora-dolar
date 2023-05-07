"use client";

import { useState } from "react";
import Form from "./components/Form";
import cotizaciones from "./cotizaciones.json";

export default function Home() {
  const [amount, setAmount] = useState(0);

  return (
    <main className="flex h-full gap-4">
      <section className="flex-1">
        <Form value={amount} onChange={(amount: number) => setAmount(amount)} />
      </section>
      <section className="flex-1 rounded-3xl bg-[#63B0CD] p-8 text-white overflow-y-auto">
        <ul className="flex flex-col gap-4">
          {Object.entries(cotizaciones).map(
            ([name, value]: [string, { compra: number; venta: number }]) => {
              const total = amount ? Number(amount / value.venta) : value.venta;

              return (
                <li
                  key={name}
                  className="flex gap-4 justify-between items-center"
                >
                  <div className="text-md font-medium">{name}</div>
                  <div className="flex items-center gap-4">
                    {amount ? (
                      <div className="text-xl font-bold">
                        {Number(total).toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </div>
                    ) : null}
                    <div className="text-3xl font-semibold">
                      {Number(value.venta).toLocaleString("es-AR", {
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
