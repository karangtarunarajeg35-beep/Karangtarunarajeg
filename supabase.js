if (
  window.supabase &&
  typeof window.supabase.from !== "function" &&
  typeof window.supabase.createClient === "function"
) {
  window.supabase = window.supabase.createClient(
    "https://qemzczsltxbiyxsvpebv.supabase.co",
    "sb_publishable_AngscFwHvEYlm4oPa-vhVA_DkvBSJmm"
  );
}
