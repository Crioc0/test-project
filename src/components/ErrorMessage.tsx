"use client";
import { RootState } from "@/lib/store";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function ErrorMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const { error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (error) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [error]);

  return isVisible ? (
    <div className="absolute top-0.5 right-0.5">{error}</div>
  ) : null;
}

export default ErrorMessage;
