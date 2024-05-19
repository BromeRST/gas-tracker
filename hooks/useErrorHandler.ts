import { useEffect } from "react";
import { toast } from "react-toastify";

const useErrorHandler = (error: any) => {
    useEffect(() => {
        if (error) {
            toast.error(`Error: ${error.message || "An error occurred"}`);
        }
    }, [error]);
};

export default useErrorHandler;
