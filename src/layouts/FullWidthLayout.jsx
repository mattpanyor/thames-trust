export function FullWidthLayout({ children }) {
  return (
    <>
      <MainContent>{children}</MainContent>
    </>
  );
}

export function MainContent({ children }) {
  return (
    <>
      <main className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto flex h-screen flex-col items-center justify-center px-6 dark:bg-gray-900 xl:px-0">
          {children}
        </div>
      </main>
    </>
  );
}
