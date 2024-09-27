import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      hello world! Go to <Link href={"/boards"}>Boards Page</Link>
    </div>
  );
}

export default page;
