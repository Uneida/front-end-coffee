type InputProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export function Input({ value, onChange }: InputProps) {
  return (
    <input
      style={{
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid #ccc",
        width: "100%",
      }}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}
