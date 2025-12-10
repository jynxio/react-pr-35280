import React, { useState, useEffect } from "react";

function App() {
    const [, setState] = useState(0);

    /**
     * 💡 Run "npm run lint" 
     * 💡 Run "npm run lint" 
     * 💡 Run "npm run lint" 
     */

    // ✅ ESLint error reported
    useEffect(() => setState(s => s + 1), []);

    // ❌ No ESLint error, but it should have
    React.useEffect(() => setState(s => s + 1), []);
}
