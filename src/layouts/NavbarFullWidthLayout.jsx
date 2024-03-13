import { useState } from 'react';
import { Footer } from 'src/components/footer';
import { NavBar } from 'src/components/header';

export function NavbarFullWidthLayout({ children }) {
  const [toggleSidebarMobile, setToggleSidebarMobile] = useState(false);
  return (
    <>
      <NavBar
        toggleSidebarMobile={toggleSidebarMobile}
        setToggleSidebarMobile={setToggleSidebarMobile}
      />
      <div className="flex overflow-hidden bg-gray-50 pt-16 dark:bg-gray-900">
        <MainContent>{children}</MainContent>
      </div>
    </>
  );
}

export function MainContent({ children }) {
  return (
    <>
      <div className="relative mx-auto h-full w-full max-w-screen-2xl overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <main>
          <div className="px-4 pt-6">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
