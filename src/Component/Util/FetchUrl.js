//import { json } from "react-router-dom";
export async function DummyJson(path = "") {
  const url = await fetch(`https://dummyjson.com/${path}`); /*/
  if (!url.ok) {
    return json({ message: "Could not Fetch Data" }, { status: 500 });
  }*/
  const res = await url.json();
  return res;
}
