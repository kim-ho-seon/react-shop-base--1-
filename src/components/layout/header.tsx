export default function Header(): JSX.Element {
  return (
    <header className=" shadow-lg w-full">
      <div className="header flex justify-between p-4">
        <div className="hidden">sidemenu</div>
        <h1>
          <a href="#" className="text-lg text-gray-700 dark:text-white font-bold m-8">
            React Shop
          </a>
        </h1>
        <div>
          <ul className="flex-none hidden md:flex md:flex-1 ml-2 flex-2">
            <li>
              <a href="#" className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white">
                menu1
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white">
                menu2
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white">
                menu3
              </a>
            </li>
          </ul>
        </div>
        <div className="rnb">
          <button>MOON</button>
          <button>
            <input type="text" placeholder="검색" defaultValue="" />
          </button>
          <button>CART</button>
        </div>
      </div>
    </header>
  );
}
