import useSWR from "swr";
import { getClient } from "./sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = "production";
const baseUrl = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}`;

const fetcher = (query, route) => {
  // query = encodeURIComponent(query);
  // Only encodeURI is needed for route so that the `$` doesn't get mangled.

  return getClient()
    .fetch(query)
    .then((result) => result.json());
};

const useQuery = (query, route, initialData) => {
  // The `data` object always has the same shape: `{ data: { result: {...} } }`.
  // We alias `data` as `result` for clarity when spreading/destructuring:
  // i.e. `{...result} and {result}` vs `{...data} and {result}`
  const { data: result, error } = useSWR(query, fetcher, {
    initialData,
    revalidateOnFocus: false,
  });

  return { ...result, error };
};

export { useQuery as default, fetcher };
