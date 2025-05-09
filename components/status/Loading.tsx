export default function LoadingStatus({
  message,
}: {
  message?: string;
}): React.JSX.Element {
  return (
    <p
      className="text-center text-gray-500 pt-20"
      role="status"
      aria-live="polite"
    >
      {message ?? "Loading..."}
    </p>
  );
}
