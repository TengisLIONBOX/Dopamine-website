export default function Header() {
  return (
    <header class="bg-white border-b-2 ">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <span class="sr-only">Your Company</span>
          <img class="h-[3rem] w-auto" src="/header-logo.png" alt="" />
        </div>
      </nav>
    </header>
  );
}
