import {Sidebar} from "flowbite-react";
import {
    HiOutlineCog6Tooth,
    HiOutlineBuildingStorefront,
    HiOutlineShoppingBag,
    HiOutlineShoppingCart,
    HiOutlineArrowUturnLeft,
    HiOutlineUserCircle,
    HiOutlineChevronDoubleRight,
    HiOutlineChevronDoubleLeft,
    HiOutlineIdentification,
    HiOutlineLockClosed,
    HiOutlineArrowRightOnRectangle
} from "react-icons/hi2";
import {FaWarehouse} from "react-icons/fa";
import {useState} from "react";


export default function SideNavbar() {
    return (
        <>
            <div className="w-fit fixed h-screen overflow-y-auto">
                <div className={"flex flex-col gap-4 px-6 p-4 sticky top-0 bg-white"}>
                    <div className={"w-full flex gap-4 items-center"}>
                        <FaWarehouse size={"2.5rem"}/>
                        <p className={"text-lg font-bold"}>
                            Inventory MS
                        </p>
                    </div>
                    <hr/>
                    <div className={"flex flex-col items-center"}>
                        <img
                            alt="Man"
                            src="https://kittitater.github.io/mybio/bio.jpg"
                            className="h-20 w-20 rounded-full object-cover mx-auto "
                        />
                        <p className={"text-lg"}>Kittitat Songsakseree</p>
                        <p className={"text-xs"}>kittitat.song@kmutt.ac.th</p>
                    </div>
                    <hr/>
                </div>
                <Sidebar aria-label="Sidebar" style={{height: "fitContent"}}>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="/"
                                icon={HiOutlineCog6Tooth}
                            >
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/warehouse"
                                icon={HiOutlineBuildingStorefront}
                            >
                                Warehouse
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/product"
                                icon={HiOutlineShoppingBag}
                            >
                                Product
                            </Sidebar.Item>
                            <Sidebar.Collapse
                                label={"Order"}
                                icon={HiOutlineShoppingCart}
                            >
                                <Sidebar.Item icon={HiOutlineChevronDoubleRight} href={"/incoming-order"}>
                                    Incoming order
                                </Sidebar.Item>
                                <Sidebar.Item icon={HiOutlineChevronDoubleLeft} href={"/outgoing-order"}>
                                    Outgoing order
                                </Sidebar.Item>
                            </Sidebar.Collapse>
                            <Sidebar.Item
                                href="/return"
                                icon={HiOutlineArrowUturnLeft}
                            >
                                Return
                            </Sidebar.Item>
                            <Sidebar.Collapse
                                label={"Account"}
                                icon={HiOutlineUserCircle}
                            >
                                <Sidebar.Item icon={HiOutlineIdentification}>
                                    Details
                                </Sidebar.Item>
                                <Sidebar.Item icon={HiOutlineLockClosed}>
                                    Security
                                </Sidebar.Item>
                                <Sidebar.Item icon={HiOutlineArrowRightOnRectangle}>
                                    Logout
                                </Sidebar.Item>
                            </Sidebar.Collapse>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                    <Sidebar.CTA>
                        <div className={"flex flex-col items-center text-xs"}>
                            <p>© 2023 Inventory MS™.</p>
                            <p>All Rights Reserved.</p>
                        </div>
                    </Sidebar.CTA>
                </Sidebar>
            </div>
        </>
    )
}