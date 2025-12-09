"use client"

import { useQuery } from '@tanstack/react-query';
import React from 'react'


const request = async (email: string): Promise<{ status: "success" | "fail" }> => {

  const response = await fetch("https://localhost:3000/api/signin-member", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email
    })
  })

  const data = await response.json();
  return data
}


export default function LoginClient({ email }: { email: string }) {

  const { data } = useQuery({
    queryKey: ["login", email],
    queryFn: () => request(email)
  })

  return (
    <div>{data?.status}</div>
  )
}

