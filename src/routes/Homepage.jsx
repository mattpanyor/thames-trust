import { LandingPage } from 'src/features/homepage/LandingPage';
import { NavbarFullWidthLayout } from 'src/layouts';

export function Homepage() {
  return (
    <>
      <NavbarFullWidthLayout>
        <div className="pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 pt-8 dark:bg-gray-900 md:h-screen">
          <LandingPage />
        </div>
      </NavbarFullWidthLayout>
    </>
  );
}