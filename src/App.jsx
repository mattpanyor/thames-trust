import ThemeSwitcher from 'src/components/ThemeSwitcher.jsx';

function App() {
  return (
    <>
      <main className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto flex h-screen flex-col items-center justify-center px-6 xl:px-0 dark:bg-gray-900">
          <div className="text-center xl:max-w-4xl">
            <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              Vite React
            </h1>
            <ThemeSwitcher />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
