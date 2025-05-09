export default function ErrorStatus({
  message,
}: {
  message?: string;
}): React.JSX.Element {
  return (
    <p
      className="text-center text-red-500 pt-20"
      role="alert"
      aria-live="assertive"
    >
      {message ?? "Error loading data"}
    </p>
  );
}
