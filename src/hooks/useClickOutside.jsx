import { useEffect } from 'react';

export default function useClickOutside(ref, ...setOpenFuncs) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenFuncs.map((setOpen) => setOpen(null));
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, setOpenFuncs]);
}
