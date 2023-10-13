import React from "react";
import Heading from "./headings";
import Video from "./video";
function Section ()
{
    return (
        <section className="model-s">
            <Heading name ="Model S" price="From $71,090" gas="After Est. Gas Savings"/>
            <Video />
        </section>
    );
}
export default Section;