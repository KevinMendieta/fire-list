import { useRoute as useWouterRoute } from "wouter";

interface Params {
  [x: string]: string;
}

export function useSearchParams(path: string): {
  match: boolean;
  params: Params | null;
} {
  let [match, params] = useWouterRoute(path);
  if (match) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const queryParams = Object.fromEntries(urlSearchParams.entries());

    params = {
      ...queryParams,
      ...params,
    };
  }
  return { match, params };
}
