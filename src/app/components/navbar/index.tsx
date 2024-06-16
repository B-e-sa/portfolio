'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname()

    const navs = [
        {
            label: "Sobre mim"
        },
        {
            label: "Stacks"
        },
        {
            label: "Projetos"
        }
    ]

    return (
        <nav>
            <ul className="flex flex-col justify-between items-center ">
                {
                    navs.map(({ label }, i) => {
                        const sluggedLabel = label.replace(" ", "-").toLowerCase()
                        const location = pathname.split("/")[1]

                        return (
                            <Link href={sluggedLabel}>
                                <li key={label + i} className={`${location === sluggedLabel ? "w-24 h-24" : "w-20 h-20"} my-3 transition-all flex text-sm flex-col items-center justify-center text-secondary border-secondary border`}>
                                    {label}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </nav>
    )
}