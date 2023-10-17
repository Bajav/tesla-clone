import React from "react";
import Heading from "./headings";
import Video from "./video";
import Buttons from "./buttons";
import Footertxt from "./foortertxt";
import Details from "./pageDeatails";

const Section =({modelName, modelPrice, gasSavings, showVideo, showFooterText})=>
{
    return (
        <div className="tesla">
        <section className="model-s">
        <Heading name={modelName} price ={`From ${modelPrice}`} gas={`After Est. ${gasSavings} Gas Savings`}/>
        {showVideo && <Video />}
        <Buttons />
        {showFooterText && <Footertxt text={Details[0].footer}/>}
        </section>
        </div>
    );
}
export default Section;