"use client";

import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.text())

export function UUIDFetcher() {
  const { data, error, isLoading } = useSWR("/api", fetcher);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{data}</div>;
}
