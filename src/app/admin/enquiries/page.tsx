"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Mail,
  Search,
  Filter,
  Eye,
  Trash2,
  Phone,
  Building,
  Calendar,
  DollarSign,
  CheckCircle2,
  Clock,
  Sparkles,
  AlertCircle,
  X,
  ExternalLink,
  MessageSquare,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { api, BackendEnquiry } from "@/lib/api";
import { EnquiryItem, EnquiryStatus } from "@/types";

function mapBackendStatusToUi(status: string): EnquiryStatus {
  switch (status?.toUpperCase()) {
    case "NEW":
      return "New";
    case "CONTACTED":
      return "Contacted";
    case "IN_PROGRESS":
      return "In Progress";
    case "CONVERTED":
      return "Converted";
    case "CLOSED":
      return "Closed";
    default:
      return "New";
  }
}

function mapUiStatusToBackend(status: EnquiryStatus): string {
  switch (status) {
    case "New":
      return "NEW";
    case "Contacted":
      return "CONTACTED";
    case "In Progress":
      return "IN_PROGRESS";
    case "Converted":
      return "CONVERTED";
    case "Closed":
      return "CLOSED";
    default:
      return "NEW";
  }
}

function transformBackendEnquiry(e: BackendEnquiry): EnquiryItem {
  return {
    id: e.id,
    name: e.name,
    email: e.email,
    phone: e.phone || "",
    company: e.company || e.website || "",
    service: e.service || "General Growth Strategy",
    budget: e.budget || "",
    message: e.message,
    status: mapBackendStatusToUi(e.status),
    isRead: e.isRead,
    createdAt: e.createdAt,
  };
}

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<"All" | EnquiryStatus>("All");
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryItem | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [internalNotes, setInternalNotes] = useState("");

  const fetchEnquiries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.enquiries.getEnquiries({ limit: 100 });
      if (res.success && res.data?.enquiries) {
        setEnquiries(res.data.enquiries.map(transformBackendEnquiry));
      }
    } catch (error) {
      console.error("Fetch enquiries error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  const handleStatusChange = async (id: string, newStatus: EnquiryStatus, notes?: string) => {
    try {
      const backendStatus = mapUiStatusToBackend(newStatus);
      const res = await api.enquiries.updateEnquiry(id, {
        status: backendStatus,
        isRead: true,
      });

      if (res.success && res.data) {
        const updated = transformBackendEnquiry(res.data);
        if (notes) updated.notes = notes;
        setEnquiries((prev) => prev.map((e) => (e.id === id ? updated : e)));
        if (selectedEnquiry?.id === id) {
          setSelectedEnquiry(updated);
        }
      }
    } catch (error) {
      console.error("Status update error:", error);
    }
  };

  const handleToggleRead = async (id: string) => {
    try {
      const current = enquiries.find((e) => e.id === id);
      const nextReadState = current ? !current.isRead : true;
      const res = await api.enquiries.updateEnquiry(id, { isRead: nextReadState });

      if (res.success && res.data) {
        const updated = transformBackendEnquiry(res.data);
        setEnquiries((prev) => prev.map((e) => (e.id === id ? updated : e)));
      }
    } catch (error) {
      console.error("Toggle read error:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await api.enquiries.deleteEnquiry(id);
      if (res.success) {
        setDeleteConfirmId(null);
        if (selectedEnquiry?.id === id) setSelectedEnquiry(null);
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
      }
    } catch (error) {
      console.error("Delete enquiry error:", error);
    }
  };

  const openInspection = (enquiry: EnquiryItem) => {
    setSelectedEnquiry(enquiry);
    setInternalNotes(enquiry.notes || "");
    if (!enquiry.isRead) {
      handleToggleRead(enquiry.id);
    }
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.company && e.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
      e.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.message.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = selectedStatus === "All" || e.status === selectedStatus;
    const matchesUnread = !showUnreadOnly || !e.isRead;

    return matchesSearch && matchesStatus && matchesUnread;
  });

  const statusColors: Record<EnquiryStatus, string> = {
    New: "bg-red-500/10 text-red-400 border-red-500/30",
    Contacted: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    "In Progress": "bg-blue-500/10 text-blue-400 border-blue-500/30",
    Converted: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    Closed: "bg-slate-500/10 text-slate-400 border-slate-500/30",
  };

  const statusTabs: ("All" | EnquiryStatus)[] = ["All", "New", "Contacted", "In Progress", "Converted", "Closed"];

  return (
    <div className="space-y-6">
      {/* Header & Refresh */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block mb-1">
            CLIENT PIPELINE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#FAF6F0] tracking-tight">
            Growth Inquiries & Leads
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage incoming inquiries, track qualification status, and follow up directly with clients.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchEnquiries}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-300 bg-white/[0.04] border border-white/10 hover:bg-white/10 hover:text-white transition-all cursor-pointer self-start sm:self-auto"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin text-[#FF5E3A]" : ""}`} />
          <span>Refresh Pipeline</span>
        </button>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10 space-y-4">
        {/* Status Pill Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-3">
          {statusTabs.map((tab) => {
            const count = tab === "All" ? enquiries.length : enquiries.filter((e) => e.status === tab).length;
            const isSelected = selectedStatus === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedStatus(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#FF5E3A] text-white shadow-md shadow-[#FF5E3A]/20"
                    : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                <span>{tab}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isSelected ? "bg-white text-[#FF5E3A]" : "bg-white/10 text-slate-300"}`}>
                  {count}
                </span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setShowUnreadOnly(!showUnreadOnly)}
            className={`ml-auto px-3 py-1.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 ${
              showUnreadOnly
                ? "bg-[#FF5E3A]/20 text-[#FF5E3A] border border-[#FF5E3A]/40"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-[#FF5E3A]" />
            <span>Unread Only</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search leads by client name, email, phone, company, or message..."
            className="w-full rounded-xl border border-white/15 bg-white/[0.04] py-2.5 pl-10 pr-4 text-xs text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none"
          />
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        </div>
      </div>

      {/* Enquiries Data Table */}
      <div className="rounded-2xl bg-[#0F172A] border border-white/10 overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-12 text-center text-slate-400 flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin text-[#FF5E3A]" />
            <span>Loading Inquiries...</span>
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-xs">
            No inquiries match your current filters.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="border-b border-white/10 bg-white/[0.02] text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="py-3.5 px-4">Client</th>
                  <th className="py-3.5 px-4">Service & Budget</th>
                  <th className="py-3.5 px-4">Contact Channels</th>
                  <th className="py-3.5 px-4">Received</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredEnquiries.map((enq) => (
                  <tr
                    key={enq.id}
                    className={`hover:bg-white/[0.02] transition-colors ${!enq.isRead ? "bg-white/[0.03]" : ""}`}
                  >
                    {/* Client Name + Company */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5 min-w-[180px]">
                        <div className="h-8 w-8 rounded-xl bg-[#FF5E3A]/15 text-[#FF5E3A] flex items-center justify-center font-bold text-xs shrink-0">
                          {enq.name[0]}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[#FAF6F0] truncate">{enq.name}</span>
                            {!enq.isRead && (
                              <span className="h-2 w-2 rounded-full bg-[#FF5E3A] shrink-0" title="Unread" />
                            )}
                          </div>
                          <span className="text-[11px] text-slate-400 block truncate">
                            {enq.company || "Direct Inquiry"}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Service & Budget */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <p className="font-bold text-[#FF5E3A] text-xs">{enq.service}</p>
                      <p className="text-[10px] text-slate-400">{enq.budget || "Budget Flexible"}</p>
                    </td>

                    {/* Contact Details */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <p className="font-medium text-[#FAF6F0]">{enq.email}</p>
                      <p className="text-[11px] text-slate-400">{enq.phone || "No phone"}</p>
                    </td>

                    {/* Date */}
                    <td className="py-3.5 px-4 text-slate-400 whitespace-nowrap font-mono text-[11px]">
                      {new Date(enq.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <select
                        value={enq.status}
                        onChange={(e) => handleStatusChange(enq.id, e.target.value as EnquiryStatus)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase border cursor-pointer ${
                          statusColors[enq.status]
                        } bg-[#0A0F1D] focus:outline-none`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Converted">Converted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => openInspection(enq)}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Eye className="h-3 w-3" />
                          <span>View</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setDeleteConfirmId(enq.id)}
                          className="p-1 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                          title="Delete Lead"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Enquiry Detail Inspection Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0F172A] border border-white/15 text-[#FAF6F0] shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
                  LEAD PROFILE & REQUIREMENTS
                </span>
                <h3 className="text-2xl font-black text-[#FAF6F0] mt-0.5">
                  {selectedEnquiry.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Client Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">Work Email</span>
                <p className="text-sm font-bold text-[#FAF6F0]">{selectedEnquiry.email}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">Phone Number</span>
                <p className="text-sm font-bold text-[#FAF6F0]">{selectedEnquiry.phone || "Not provided"}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">Company / Website</span>
                <p className="text-sm font-bold text-[#FAF6F0]">{selectedEnquiry.company || "Individual / Startup"}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">Service & Budget</span>
                <p className="text-sm font-bold text-[#FF5E3A]">{selectedEnquiry.service} ({selectedEnquiry.budget})</p>
              </div>
            </div>

            {/* Message Body */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                Client Project Message / Goals
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap font-medium">
                {selectedEnquiry.message}
              </p>
            </div>

            {/* Internal Notes & Status updater */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase text-slate-300">Internal Strategist Notes</label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Status:</span>
                  <select
                    value={selectedEnquiry.status}
                    onChange={(e) => handleStatusChange(selectedEnquiry.id, e.target.value as EnquiryStatus, internalNotes)}
                    className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#0A0F1D] border border-white/15 text-slate-200 focus:border-[#FF5E3A] focus:outline-none"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Converted">Converted</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              <textarea
                rows={2}
                value={internalNotes}
                onChange={(e) => setInternalNotes(e.target.value)}
                placeholder="Add private strategist notes or call follow-up summary..."
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-xs text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none"
              />
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${selectedEnquiry.email}?subject=Re: Your Growlinqs Growth Consultation`}
                  className="px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-[#FF5E3A] text-white hover:bg-[#ff7252] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Send Direct Email</span>
                </a>

                {selectedEnquiry.phone && selectedEnquiry.phone !== "Not provided" && (
                  <a
                    href={`tel:${selectedEnquiry.phone}`}
                    className="px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-white/[0.06] border border-white/15 text-white hover:bg-emerald-600 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call Client</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  handleStatusChange(selectedEnquiry.id, selectedEnquiry.status, internalNotes);
                  setSelectedEnquiry(null);
                }}
                className="px-5 py-2 rounded-xl text-xs font-bold text-slate-300 bg-white/10 hover:bg-white/15 cursor-pointer"
              >
                Save & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in">
          <div className="w-full max-w-md rounded-2xl bg-[#0F172A] border border-white/15 p-6 space-y-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-400 border border-red-500/30">
              <Trash2 className="h-6 w-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#FAF6F0]">Delete Inbound Lead</h3>
              <p className="text-xs text-slate-400">
                Are you sure you want to remove this client inquiry from your pipeline?
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 bg-white/10 hover:bg-white/15"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDelete(deleteConfirmId)}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500"
              >
                Delete Inbound Lead
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
