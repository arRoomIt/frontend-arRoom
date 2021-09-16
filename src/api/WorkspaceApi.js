import React, { useState } from "react";
const BASE_URL = "http://localhost:5000/workspace";
const postUrl = `${BASE_URL}/create`;
const editUrl = `${BASE_URL}/edit`;
const idUrl = `${BASE_URL}`;

export const getListWorkspace = async () => {
  const res = await fetch(BASE_URL, {
    method: "GET",
  });

  const data = await res.json();
  console.log("getListWorkspace", data);

  if (!res.ok) {
    throw new Error(res.message);
  }

  return data;
};
