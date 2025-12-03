import React, { useState, useEffect } from "react";

function Demo() {
    const [state, setState] = useState(0);

    // ESLint Error reported (react-hooks/set-state-in-effect)
    useEffect(() => setState(s => s + 1), []);

    // No Error
    React.useEffect(() => setState(s => s + 1), []);
}
