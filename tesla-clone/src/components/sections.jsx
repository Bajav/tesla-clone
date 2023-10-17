import React from "react";
import Heading from "./headings";
import Video from "./video";
import Buttons from "./buttons";
import Footertxt from "./foortertxt";
import Details from "./pageDeatails";

const Section =()=>
{
    return (
        <div className="tesla">
        <section className="model-s">
        <Heading name={Details[0].name} price ={Details[0].price} />
        <Video />
        <Buttons />
        <Footertxt text={Details[0].footer}/>
        </section>
        </div>
    );
}
export default Section;