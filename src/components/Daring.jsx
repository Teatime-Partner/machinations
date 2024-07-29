import React from "react";
import Counter from "./Counters";

function Daring(prop) {
  return (
    <>
      <div className="count d-inline-block flex-wrap">
        {/* take the title of the counter from the passed props */}
        <p>
          <em>{prop.name}</em> counter
        </p>
        <div>
          {/* embed  videa with music*/}
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/zkNAxllpxZQ?si=2LzQs96qYGWP-mPM"
            title="Daring Dalliances"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        {/* import counter */}
        <Counter name="daring" id="2" />
      </div>
    </>
  );
}

export default Daring;
