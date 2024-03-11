import NavbarSidebarLayout from 'src/layouts/NavbarSidebarLayout.jsx';

function App() {
  return (
    <>
      <NavbarSidebarLayout>
        <div className="mb-6 flex flex-wrap items-center justify-between">
          <h2 className="ml-3 text-lg font-semibold dark:text-gray-400">Dashboard Main Content</h2>
        </div>
      </NavbarSidebarLayout>
    </>
  );
}

export default App;
