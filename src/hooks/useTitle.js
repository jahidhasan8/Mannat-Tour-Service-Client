import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Mannat Tour Service`;
    }, [title])
};

export default useTitle;