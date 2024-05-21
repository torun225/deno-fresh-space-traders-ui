import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import FleetInfo from "../islands/FleetInfo.tsx";

const api_key =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiTUlLTyIsInZlcnNpb24iOiJ2Mi4yLjAiLCJyZXNldF9kYXRlIjoiMjAyNC0wNC0yOCIsImlhdCI6MTcxNTUxNDYxOSwic3ViIjoiYWdlbnQtdG9rZW4ifQ.acUz3I0afi8oWj8gzUbiOu8nh00j0WJHAk6ohFGVNSMdhJGoCO20_5HVcrm1VkkdP_3_9c0kvVvsNyQwjtYh_qckJHV-8aFCcRx-LMzTYN6EwD8iRif8s18IvmDGvfIdPHQMfslbDsl6S3fj6hPAy9mmeNJM___yJ41hzrRDx15_BzxSs-BBCMwODp585-q4VsifwRSAutR1czNTkNgLFMWWcW3AJFG1He-F9O4VMS7lh3tv3NrIFRNjYuSpm85bL_45c2kRSLS_qsvUfs-sGLLVqJ9dYbMXhDqPqB1DpVTjlGGaCFP7C8ipOELJ3CTlUrMk2pfc0Q5-YxAksSnN9Q";

export default function Home() {
  const count = useSignal(3);
  const auth = useSignal(api_key);
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <FleetInfo auth={auth} />
      </div>
    </div>
  );
}
