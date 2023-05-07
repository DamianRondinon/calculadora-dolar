"use client";

import React from "react";

interface FormProps {
  value: number;
  onChange: (amount: number) => void;
}

function Form({ value, onChange }: FormProps) {
  return (
    <form className="mb-2 w-full">
      <label>
        Monto en ARS:
        <input
          type="number"
          className="block rounded-xl bg-gray-400 p-2 text-right text-3xl"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
    </form>
  );
}

export default Form;
