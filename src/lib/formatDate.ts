export function formatDate(dateString: string) {
  try {
    const date = new Date(dateString);
    return {
      iso: date.toISOString(),
      formatted: date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };
  } catch {
    return {
      iso: dateString,
      formatted: dateString,
    };
  }
}
