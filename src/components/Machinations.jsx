import React from "react";
import Counter from "./Counters";

function Machinations(prop) {
  return (
    <>
      <div className="count d-inline-block flex-wrap">
        {/* take the title of the counter from the passed props */}
        <p>
          <em>{prop.name}</em> counter
        </p>
        <div>
          {/* embed video with music */}
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/iXcGBgTAmh0?si=os6crpoKp5ac60Gl"
            title="Machinations"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        {/* import counter */}
        <Counter name="machine" id="1" />
      </div>
    </>
  );
}

export default Machinations;
