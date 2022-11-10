import { useEffect } from "react"

// hook for showing dynamic title
const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Mannat Tour Service`;
    }, [title])
};

export default useTitle;