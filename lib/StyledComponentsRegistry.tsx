"use client";

import React, { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export function useStyledComponentsRegistry() {
  const [sheet] = useState(() => new ServerStyleSheet());

  const StyledComponentsRegistry = ({ children }: { children: React.ReactNode }) => (
    <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
  );

  const getStyleTags = () => sheet.getStyleTags(); // or sheet.getStyleElement();

  return { StyledComponentsRegistry, getStyleTags };
}
