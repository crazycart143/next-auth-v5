"use client";

import { navigate } from "../actions";

export function ClientRedirect() {
  return (
    // to pass data from this form input to actions navigate
    // export async function navigate(data: FormData) {
    //   redirect(`/posts/${data.get("id")}`);
    //  }
    // use (data: FormData) and use it on redirect and mention id since the name of the input is "id"

    <form action={navigate}>
      <input type="text" name="id" />
      <button>Submit</button>
    </form>
  );
}
