import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [estado, setEstado] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(imgs =>
            setEstado({
                data: imgs,
                loading: false
            })
        ).catch(err => setEstado({
            data: [],
            loading: true
        }));
    }, [category]);

    return estado;
}