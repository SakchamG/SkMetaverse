type RateState = {
  count: number;
  resetAt: number;
};

const bucket: Map<string, RateState> = new Map();

export function rateLimit(key: string, max: number, windowMs: number) {
  const now = Date.now();
  const current = bucket.get(key);

  if (!current || now >= current.resetAt) {
    const next: RateState = { count: 1, resetAt: now + windowMs };
    bucket.set(key, next);
    return { allowed: true as const, remaining: max - 1, resetAt: next.resetAt };
  }

  if (current.count >= max) {
    return { allowed: false as const, remaining: 0, resetAt: current.resetAt };
  }

  current.count += 1;
  bucket.set(key, current);
  return { allowed: true as const, remaining: max - current.count, resetAt: current.resetAt };
}

