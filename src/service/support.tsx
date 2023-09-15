import React from "react";
import { useLocation, useParams } from "react-router-dom";

export function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function useParam() {
  const params = useParams();
  // const { search } = useLocation();
  return React.useMemo(() => params, [params]);
}

const clipboard = (value: string) => {
  try {
    navigator.clipboard.writeText(value);
    return 1;
  } catch (error) {
    return 0;
  }
};
export const hexToRGB = (h: any) => {
  let r: string | number = 0;
  let g: string | number = 0;
  let b: string | number = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};
export default { clipboard, useParam, useQuery, hexToRGB };
