import { redirect } from "next/navigation";

export default function Callback() {
  // redirect user whether auth is valid or not
  redirect("/");
}
