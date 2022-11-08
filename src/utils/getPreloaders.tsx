const getPreloaders = (array: string | any[]): JSX.Element[] => {

    const preloadContent = []

    for (let i = 0; i < array.length; i++) {
        preloadContent.push(
            <link
                rel="preload"
                href={array[i]}
                as="image"
            />
        )
    }

    return preloadContent

}

export default getPreloaders