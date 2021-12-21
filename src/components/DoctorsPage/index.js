import React from "react";

import { HeaderContainer, HeaderH1 } from "./DoctorsHeader";

function DoctorsHeader({title}) {
  return (
    <HeaderContainer>
        <HeaderH1>
          <span>DeepBreath</span> {title}.
        </HeaderH1>
    </HeaderContainer>
  );
}

export default DoctorsHeader;
