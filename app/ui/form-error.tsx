interface FormErrorProps {
  errors: any;
  label: string;
}

export default function FormError({ errors, label }: FormErrorProps) {
  return (
    <div id={`${label}-error`} aria-live="polite" aria-atomic="true">
      {errors &&
        errors[label] &&
        errors[label].map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
    </div>
  );
}
