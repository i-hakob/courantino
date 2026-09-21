import AsyncStorage from '@react-native-async-storage/async-storage';

export type LessonProgress = {
  completed: boolean;
  bestScore: number;
  totalQuestions: number;
  lastCompletedDate: string | null;
};

export type Progress = {
  streak: number;
  totalXP: number;
  lastCompletedDate: string | null;
  lessons: Record<string, LessonProgress>;
  hearts: number;
  /** ISO timestamp for when hearts will be fully refilled, or null if hearts are already full. */
  heartsRefillAt: string | null;
};

export const MAX_HEARTS = 5;
export const HEART_REFILL_MS = 5 * 60 * 60 * 1000; // 5 hours

export type HeartsState = {
  hearts: number;
  /** ISO timestamp for the next full refill, or null if hearts are already full. */
  refillAt: string | null;
};

const STORAGE_KEY = 'courantino:progress';

const DEFAULT_PROGRESS: Progress = {
  streak: 0,
  totalXP: 0,
  lastCompletedDate: null,
  lessons: {},
  hearts: MAX_HEARTS,
  heartsRefillAt: null,
};

export async function loadProgress(): Promise<Progress> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      lessons: parsed.lessons ?? {},
      hearts: parsed.hearts ?? DEFAULT_PROGRESS.hearts,
      heartsRefillAt: parsed.heartsRefillAt ?? DEFAULT_PROGRESS.heartsRefillAt,
    };
  } catch (err) {
    console.error('Failed to load progress', err);
    return DEFAULT_PROGRESS;
  }
}

async function saveProgress(progress: Progress): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save progress', err);
  }
}

function todayString(): string {
  return new Date().toISOString().split('T')[0];
}

function yesterdayString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}

export async function recordLessonCompleted(
  lessonId: string,
  score: number,
  totalQuestions: number
): Promise<Progress> {
  const current = await loadProgress();
  const today = todayString();
  const xpEarned = score * 10;

  const existingLesson = current.lessons[lessonId];
  const isFirstCompletion = !existingLesson?.completed;

  const updatedLesson: LessonProgress = {
    completed: true,
    bestScore: Math.max(existingLesson?.bestScore ?? 0, score),
    totalQuestions,
    lastCompletedDate: today,
  };

  let newStreak: number;
  if (current.lastCompletedDate === today) {
    newStreak = current.streak;
  } else if (current.lastCompletedDate === yesterdayString()) {
    newStreak = current.streak + 1;
  } else {
    newStreak = 1;
  }

  const updated: Progress = {
    ...current,
    streak: newStreak,
    totalXP: current.totalXP + (isFirstCompletion ? xpEarned : 0),
    lastCompletedDate: today,
    lessons: { ...current.lessons, [lessonId]: updatedLesson },
  };

  await saveProgress(updated);
  return updated;
}

export async function resetProgress(): Promise<void> {
  await saveProgress(DEFAULT_PROGRESS);
}

/**
 * If a refill was pending and enough time has passed, tops hearts back up
 * to MAX_HEARTS and clears the timer. Returns the progress unchanged
 * (same reference) when there's nothing to reconcile.
 */
function applyPendingRefill(progress: Progress): Progress {
  if (progress.hearts >= MAX_HEARTS || !progress.heartsRefillAt) {
    return progress;
  }
  if (Date.now() >= new Date(progress.heartsRefillAt).getTime()) {
    return { ...progress, hearts: MAX_HEARTS, heartsRefillAt: null };
  }
  return progress;
}

/**
 * Reads the hearts carried across lessons, applying any refill that has
 * completed since it was last checked (and persisting that if so).
 */
export async function getHeartsState(): Promise<HeartsState> {
  const current = await loadProgress();
  const refreshed = applyPendingRefill(current);
  if (refreshed !== current) {
    await saveProgress(refreshed);
  }
  return { hearts: refreshed.hearts, refillAt: refreshed.heartsRefillAt };
}

/**
 * Deducts one heart (never going below 0). Starts a 5 hour refill timer
 * the moment hearts first drop below the max; losing further hearts while
 * that timer is already running doesn't reset it.
 */
export async function loseHeart(): Promise<HeartsState> {
  const current = await loadProgress();
  const refreshed = applyPendingRefill(current);

  if (refreshed.hearts <= 0) {
    if (refreshed !== current) await saveProgress(refreshed);
    return { hearts: refreshed.hearts, refillAt: refreshed.heartsRefillAt };
  }

  const updated: Progress = {
    ...refreshed,
    hearts: refreshed.hearts - 1,
    heartsRefillAt: refreshed.heartsRefillAt ?? new Date(Date.now() + HEART_REFILL_MS).toISOString(),
  };

  await saveProgress(updated);
  return { hearts: updated.hearts, refillAt: updated.heartsRefillAt };
}
