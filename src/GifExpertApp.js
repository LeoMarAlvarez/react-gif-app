import { computeHeadingLevel } from "@testing-library/react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['dragon ball']);

    return <>
        <h2>GifExpert App</h2>
        <AddCategory 
            setCategories={setCategories}
        />
        <hr/>
        <ol>{
            categories.map(cat => 
                <GifGrid
                    key={cat}
                    category={cat}
                />
            )
        }</ol>
    </>
}

export default GifExpertApp;