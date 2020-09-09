export default function replace<T>(value: T, keyPath: string[], newSubValue: unknown): T {
  const newValue = { ...value };
  let current: any = newValue;
  for (let i = 0; i < keyPath.length; i++) {
    const key = keyPath[i];
    if (i + 1 === keyPath.length) {
      current[key] = newSubValue;
    }
    if (typeof current?.[key] === "object") {
      current[key] = current[key] ? { ...current[key] } : null;
      current = current[key];
    }
  }
  return newValue;
}
