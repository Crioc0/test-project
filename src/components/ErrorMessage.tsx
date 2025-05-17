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
    <div className="absolute top-5 right-5 border-0 bg-red-400 p-3 rounded-lg">{error}</div>
  ) : null;
}

export default ErrorMessage;
