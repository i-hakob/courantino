import { useCallback, useEffect, useState } from 'react';
import { getHeartsState, loseHeart as loseHeartInStorage, MAX_HEARTS, type HeartsState } from '@/storage/progress';

export { MAX_HEARTS };

/** Formats the time left until refillAt as e.g. "4h 12m", ticking down live. */
export function formatTimeLeft(refillAt: string | null): string | null {
  if (!refillAt) return null;
  const msLeft = new Date(refillAt).getTime() - Date.now();
  if (msLeft <= 0) return null;
  const totalMinutes = Math.ceil(msLeft / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

/**
 * Hearts carried across lessons: loads the persisted count, refreshes it
 * once a minute so a completed refill shows up live, and exposes a
 * loseHeart() action that persists immediately.
 */
export function useHearts(active: boolean = true) {
  const [state, setState] = useState<HeartsState | null>(null);

  const refresh = useCallback(async () => {
    const next = await getHeartsState();
    setState(next);
    return next;
  }, []);

  useEffect(() => {
    if (!active) return;
    refresh();
    const interval = setInterval(refresh, 60 * 1000);
    return () => clearInterval(interval);
  }, [active, refresh]);

  const loseHeart = useCallback(async () => {
    const next = await loseHeartInStorage();
    setState(next);
    return next;
  }, []);

  return {
    hearts: state?.hearts ?? MAX_HEARTS,
    refillAt: state?.refillAt ?? null,
    loading: state === null,
    refresh,
    loseHeart,
  };
}
