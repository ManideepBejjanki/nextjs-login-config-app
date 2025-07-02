import React from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  value?: string | boolean;
  onChange: (e: React.ChangeEvent<any>) => void;
  options?: string[];
  placeholder?: string;
  checked?: boolean;
}

export const FormField: React.FC<Props> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  options,
  placeholder,
  checked,
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold capitalize">{label}</label>

      {type === "select" && options ? (
        <select
          name={name}
          value={
            typeof value === "boolean"
              ? value
                ? "true"
                : "false"
              : value ?? ""
          }
          onChange={onChange}
          className="w-full border rounded p-2"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : type === "checkbox" ? (
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="mr-2"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value as string}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full border rounded p-2"
        />
      )}
    </div>
  );
};
