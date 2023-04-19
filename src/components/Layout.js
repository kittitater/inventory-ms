import SideNavbar from "./SideNavbar";

export default function Layout({ children }) {
    return (
        <div className="flex flex-row">
            <SideNavbar />
                <div className="flex flex-col flex-1">{children}</div>
        </div>
        );
    }