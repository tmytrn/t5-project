import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export function useOutsideClick(ref, onClickOut) {
  useEffect(() => {
    const onClick = ({ target }) => ref.contains(target) && onClickOut();
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

export const useIsSmall = () => useMediaQuery("(max-width:  767px)");
export const useIsMedium = () => useMediaQuery("(min-width:  768px)");
