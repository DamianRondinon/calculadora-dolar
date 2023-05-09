"use client";

import React from "react";

interface FormProps {
  value: number;
  onChange: (amount: number) => void;
}

function Form({ value, onChange }: FormProps) {
  return (
    <form className="w-full">
      <label className="block space-y-2">
        Monto en ARS:
        <input
          type="number"
          className="block rounded-xl bg-gray-300 p-2 text-right text-3xl w-full mt-2"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
    </form>
  );
}

export default Form;
