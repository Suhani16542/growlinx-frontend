import { BlogEditorForm } from "@/components/admin/blog/BlogEditorForm";

export const metadata = {
  title: "Create New Blog Playbook | Growlinqs Admin",
  description: "Compose and publish SEO-optimized growth articles and tactical playbooks.",
};

export default function AdminBlogCreatePage() {
  return <BlogEditorForm isEditMode={false} />;
}
