import { useEffect, useState } from "react";
import { floridaDate } from "@/lib/event-dates";

// No build-time date or visitor timezone: refresh at midnight even on an open tab.
// Delay dated promotions until hydration so cached HTML cannot flash expired events.
export function useEventDay() {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const refresh = () => setToday(floridaDate(new Date()));
    const tick = () => {
      refresh();
      timer = setTimeout(tick, 60_000 - (Date.now() % 60_000));
    };
    tick();
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);
  return today;
}