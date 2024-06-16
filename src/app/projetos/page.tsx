export default function Projectos() {
    const t = Array(9).fill(0)

    return (
        <section className="pt-[20px] text-secondary mx-[39px] h-full">
            <div className="mb-11">
                <span className="text-sm ">Sort by:</span>
                <div></div>
            </div>
            <div className="grid gap-y-8 grid-cols-2 overflow-y-auto h-[calc(100%-90px)]">
                {t.map(item => (
                    <div className="border border-secondary w-[204px] h-[143px]">

                    </div>
                ))}
            </div>
        </section>
    )
}