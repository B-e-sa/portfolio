"use client";
import {
    Firebase,
    Javascript,
    Nestjs,
    Pyhon,
    React
} from "../components/icons/stacks"
import rca from "../assets/reciclando-com-amor.png"
import { default as projetos } from "../projetos/data"

export default function Projetos() {
    const stacks = {
        firebase: Firebase,
        javascript: Javascript,
        nestjs: Nestjs,
        python: Pyhon,
        react: React
    }

    return (
        <section className="pt-[20px] text-secondary mx-[39px] h-full">
            <div className="flex mb-11">
                <span className="text-sm ">Sort by:</span>
                <div className="flex">
                    {
                        Object.values(stacks).map((Icon) => (
                            <Icon className="w-6 h-6 fill-secondary ml-5" />
                        ))
                    }
                </div>
            </div>
            <div className="grid gap-y-8 grid-cols-2 overflow-y-auto h-[calc(100%-90px)]">
                {projetos.map(({ description, img, link, name, stack }) => {
                    return <div className="w-fit">
                        <div className="relative">
                            <div className={`w-full h-full absolute hover:bg-red-500`}></div>
                            <div style={{ backgroundImage: `url(${rca.src})` }} className="bg-center bg-cover border-2 border-secondary w-[278px] h-[226px]">
                                <div>
                                    {
                                        stack.map(item => {
                                            const Icon = stacks[item];
                                            return (
                                                <Icon className="w-6 h-6 fill-secondary" />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
                )}
            </div>
        </section>
    )
}