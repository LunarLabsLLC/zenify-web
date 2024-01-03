const Sidebar = (props: { barId: string; barClass: string; barContent: any; className: string; children: any; }) =>
  <div className="h-screen overflow-y-scroll">
    <input id={props.barId} type="checkbox" className="drawer-toggle" />
    <nav className="drawer-side md:hidden absolute top-0 left-0 z-[2]">
      <label htmlFor={props.barId} className="drawer-overlay"></label>
      <div className={props.barClass}>
        {props.barContent}
      </div>
    </nav>
    
    <main className={props.className}>
      {props.children}
    </main>
  </div>

export default Sidebar;