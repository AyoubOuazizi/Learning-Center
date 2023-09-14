"use client"

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Sections({ data, title, paramName }: { data: any[], title: string, paramName: string }) {
    const [hidden, setHidden] = useState(false);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleItemClick = (item: any) => {
        const isSelected = selectedItems.includes(item.idfacette+"");
        let updatedSelectedItems: string[];

        if (isSelected) {
            // Remove the item from selectedItems if it's already selected
            updatedSelectedItems = selectedItems.filter((selectedItem) => selectedItem !== item.idfacette+"");
        } else {
            // Add the item to selectedItems if it's not selected
            updatedSelectedItems = [...selectedItems, item.idfacette];
        }

        setSelectedItems(updatedSelectedItems);

        // now you got a read/write object
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

        // update as necessary
        current.delete(paramName);

        current.set(paramName, updatedSelectedItems.join("_"));

        // cast to string
        const search = current.toString();
        // or const query = `${'?'.repeat(search.length && 1)}${search}`;
        const query = search ? `?${search}` : "";

        router.push(`${pathname}${query}`);
    };

    // Use the useEffect hook to initialize selectedItems from the URL query parameter
    useEffect(() => {
        const queryParams = searchParams.get(paramName);
        if (queryParams) {
            // Split the query parameter into an array using underscores
            const selectedItemsFromQuery = queryParams.toString().split("_");
            setSelectedItems(selectedItemsFromQuery);
        }
    }, [searchParams, paramName]);
    
    return (
        <div className="category bg-white">
            <h3 className="category-heading border-bottom border-top row justify-content-between px-3 py-4 w-100 m-0" style={{ "fontSize": "16px" }} onClick={() => { setHidden(hidden => !hidden) }}>
                <span className="col-auto">{title}</span>
                <div className="col-auto" style={{ width: "fit-content" }}>
                    <span className="badge rounded-pill" style={{ background: "#F84525" }}>{data.length}</span>
                    <span className="">
                        <i className={hidden ? "fa fa-chevron-down ps-2" : "fa fa-chevron-up ps-2"} style={{ color: "#F84525" }}></i>
                    </span>
                </div>
            </h3>
            <ul className="list-group py-2" style={{ "fontSize": "15px", fontWeight: 500, display: hidden ? "none" : "" }}>
                {data.map((cat: any) => (
                    <li
                        key={cat.idfacette}
                        className={`list-group-item list-group-item-action border-0 cursor-pointer ${
                            selectedItems.includes(cat.idfacette+"") ? "active" : ""
                        }`}
                        onClick={() => handleItemClick(cat)}
                    >
                        <span className="float-start">{cat.name_facette}</span>
                        <span className="float-end" style={{ color: "#F84525" }}>{cat.count_facette}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
