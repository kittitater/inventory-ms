import SideNavbar from "./SideNavbar";

export default function Layout({ children }) {
  return (
    <div className=" h-screen flex flex-row justify-start ">
      <SideNavbar/>
        <div className="flex-1">{children}</div>
      
    </div>
  );
}
