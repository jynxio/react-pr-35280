import React, { useState, useEffect } from "react";

function Demo() {
    const [state, setState] = useState(0);

    /**
     * 💡 Run "npm run lint"
     * 💡 Run "npm run lint"
     * 💡 Run "npm run lint"
     */

    // ESLint error reported (refer to: react-hooks/set-state-in-effect)
    useEffect(() => setState(s => s + 1), []);

    // No ESLint error, but it should have
    React.useEffect(() => setState(s => s + 1), []);
}
