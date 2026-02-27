require("dotenv").config({ path: "/Users/joel/cs491/.env" });
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.PUBLIC_SUPABASE_URL, process.env.PUBLIC_SUPABASE_ANON_KEY);

async function test() {
  const { data, error } = await supabase.storage.from("user_files").list("org_2tC6sA2v5y7K5Xz2d1r9P8b3N8A", { search: "test" });
  console.log("Search result length:", data ? data.length : data, error);
  console.log("data:", data?.slice?.(0, 3));
  process.exit(0);
}

test();
