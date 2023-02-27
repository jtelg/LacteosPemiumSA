import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Desktop = ({ state }) => {
  const router = useRouter();
  const [arr_nav, setItemNav] = useState([]);
  const [path, setPath] = useState('');

  useEffect(() => {
    if (state.arr_nav) {
      setItemNav(state.arr_nav.data);
    }
  }, [state]);

  useEffect(() => {
    const path = router.pathname.split('/')[1];
    const newPath = path[0]?.toUpperCase() + path.substring(1);
    setPath(newPath);
  }, [router]);

  return (
    <nav className="md:flex hidden items-center justify-between">
      <ul className="flex items-center gap-12">
        {arr_nav?.map((e, i) => (
          <li key={i}>
            <Link
              href={e.route}
              className={`text-[18px] ${
                path === e.label || router.pathname === e.route
                  ? 'text-secondary brother-800 '
                  : 'text-white  '
              } `}
            >
              {e.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Desktop;
