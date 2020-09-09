import { useState, useEffect, useCallback } from "react";
import replace from "./replace";

// type ListenerType<T extends EventTarget, E> = (Parameters<T['addEventListener']>) => void;

export function useEventListener<E extends Event>(
  target: EventTarget,
  name: string,
  listener: (e: E) => void,
  deps: any[],
) {
  useEffect(() => {
    target.addEventListener(name, listener as EventListener);
    return () => {
      target.removeEventListener(name, listener as EventListener);
    };
  }, [...deps]);
}

export function useHashState() {
  const [hash, setHash] = useState(() => window.location.hash.replace(/^#/, ""));
  useEventListener(
    window,
    "hashchange",
    (event: HashChangeEvent) => {
      setHash(window.location.hash.replace(/^#/, ""));
    },
    [],
  );
  return [
    hash,
    useCallback((newHash: string) => {
      window.location.hash = newHash;
      setHash(newHash);
    }, []),
  ] as const;
}

export function useBase64HashState<T>(initialValue: T) {
  const [hashState, setHashState] = useHashState();
  const setValue = useCallback((newValue: T) => {
    setHashState(btoa(JSON.stringify(newValue)));
  }, []);
  try {
    const value = JSON.parse(atob(hashState)) as T;
    return [value, setValue] as const;
  } catch (err) {
    return [initialValue, setValue] as const;
  }
}

export function useSubState<T>(
  [value, setValue]: readonly [unknown, (_: any) => void],
  keyPath: string[],
  defaultValue?: T,
) {
  let current: unknown = value;
  for (const key of keyPath) {
    if (typeof current === "object") {
      current = (current as any)?.[key]; // https://stackoverflow.com/q/63799970/23649
    }
  }
  return [
    (current as T) ?? defaultValue,
    (newSubValue: T) => {
      setValue(replace(value, keyPath, newSubValue));
    },
  ] as const;
}
