import * as React from "react";
export default function asyncComponent(importComponent: () => Promise<any>): React.ComponentType<any>;
