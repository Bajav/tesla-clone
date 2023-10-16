import React from "react";
import Heading from "./headings";
import Video from "./video";
import Buttons from "./buttons";
import Footertxt from "./foortertxt";

function Section ()
{
    return (
        <div className="tesla">
        <section className="model-s">
            <Heading name ="Model S" price="From $71,090" gas="After Est. Gas Savings"/>
            <Video />
            <Buttons />
            <Footertxt />
        </section>
        </div>
    );
}
export default Section;