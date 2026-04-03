import { supabase } from "./supabaseClient";

export async function uploadResumeSupabase(file: File) {
  const ext = file.name.split(".").pop()?.toLowerCase();
  const filePath = `resume-${Date.now()}-${file.name}`;

  const { error } = await supabase.storage.from("resumes").upload(filePath, file);

  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from("resumes").getPublicUrl(filePath);

  return {
    fileUrl: data.publicUrl,
    fileName: file.name,
    fileType: ext,
  };
}