import React, { useState, useEffect, SetStateAction } from "react";

const usePreload = (array: any[]) => {

    const [preloads, setPreloads]: any = useState()

    useEffect(() => {

        const preloadContent = []

        for (let i = 0; i < array.length; i++) {
            preloadContent.push(<link rel="preload" href={array[i]} as="image" />)
        }

        setPreloads(preloadContent)

    }, [])

    return preloads

}

export default usePreload

