"use client";

import { PostgrestClient } from "@supabase/postgrest-js";

const REST_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export default function Home() {
  const performFetch = async () => {
      const postgrest = new PostgrestClient(REST_URL);
      const { data, error } = await postgrest
        .from("playing_with_neon")
        .select("*")
        .order("id", { ascending: false });
      if (data) {
        console.log(data);
      }
      if (error) {
        console.error(JSON.stringify(error, null, 2))
      }
    };

  return (
    <button
      onClick={performFetch}
    >
      Fetch Table Data
    </button>
  );
}