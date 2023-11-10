import clsx from "clsx";

function Header() {
  return (
    <header className="relative">
      <div className="px-4 sm:px-6 md:px-8">
        <div
          className={clsx(
            "absolute inset-0 bottom-10 bg-slate-700 bg-bottom bg-no-repeat dark:bg-[#0B1120]",
            // styles.beams,
          )}
        >
          <div
            className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] absolute inset-0 bg-[bottom_1px_center] dark:border-b dark:border-slate-100/5 dark:bg-bottom"
            style={{
              maskImage: "linear-gradient(to bottom, transparent, black)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
            }}
          />
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
