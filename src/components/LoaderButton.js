import React from "react";
import { Button } from "react-bootstrap";
import "./LoaderButton.css";

export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <img className="LoadingIcon" src="/images/loading.png" alt="" />}
    {!isLoading ? text : loadingText}
  </Button>;