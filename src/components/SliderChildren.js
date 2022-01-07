import React from "react";

function makeSliderChildren() {
        let retval = [];
        for (let i = 0; i < this.count; ++i) {
          retval.push(
            <div>
              <h3>{i + 1}</h3>
            </div>
          );
        }
    
        return retval;
      }
    
      document.write(typeof retval);
      
export default makeSliderChildren;