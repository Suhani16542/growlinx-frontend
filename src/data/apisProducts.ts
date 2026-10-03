export interface ApiProductItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tag?: string;
  iconName: string;
  featured?: boolean;
}

export interface ApiCategorySection {
  id: string;
  title: string;
  description: string;
  supportingNote?: string;
  items: ApiProductItem[];
}

export const verificationApis: ApiProductItem[] = [
  {
    id: "mobile-otp-verification",
    title: "Mobile/OTP Verification",
    description: "Send, verify & validate mobile OTPs with a simple, reliable flow.",
    category: "Authentication",
    tag: "Telecom & SMS",
    iconName: "Smartphone",
  },
  {
    id: "pan-verification",
    title: "PAN Verification",
    description: "Full PAN identity fetch in seconds.",
    category: "Identity",
    tag: "Income Tax / NSDL",
    iconName: "CreditCard",
  },
  {
    id: "bank-account-verification",
    title: "Bank Account Verification",
    description: "Real-time bank account validation.",
    category: "Banking",
    tag: "Penny Drop / IMPS",
    iconName: "Landmark",
  },
  {
    id: "gst-verification",
    title: "GST Verification",
    description: "GSTIN lookup & filing status.",
    category: "Business",
    tag: "GSTN Portal",
    iconName: "ReceiptText",
  },
  {
    id: "digilocker-integration",
    title: "DigiLocker Integration",
    description: "Fetch notarised documents such as Aadhaar, DL, marksheets, etc.",
    category: "Govt Vault",
    tag: "DigiLocker / MeitY",
    iconName: "FolderLock",
  },
  {
    id: "upi-id-vpa-verification",
    title: "UPI ID (VPA) Verification",
    description: "Validate UPI ID (VPA) in real time.",
    category: "Payments",
    tag: "NPCI / UPI",
    iconName: "Zap",
  },
  {
    id: "driving-licence-verification",
    title: "Driving Licence Verification",
    description: "Driving licence validity & details.",
    category: "Identity",
    tag: "Parivahan Sewa",
    iconName: "Award",
  },
  {
    id: "vehicle-rc-verification",
    title: "Vehicle & RC Verification",
    description: "Vehicle registration, ownership & insurance details.",
    category: "Transport",
    tag: "Vahan Registry",
    iconName: "Truck",
  },
  {
    id: "employee-verification",
    title: "Employee Verification",
    description: "Employment & background check via EPFO.",
    category: "HR & Trust",
    tag: "EPFO Database",
    iconName: "Briefcase",
  },
  {
    id: "reverse-geocoding",
    title: "Reverse Geocoding",
    description: "Convert GPS coordinates to address.",
    category: "Geolocation",
    tag: "GIS Mapping",
    iconName: "MapPin",
  },
  {
    id: "voter-id-verification",
    title: "Voter ID Verification",
    description: "Validate voter ID instantly.",
    category: "Identity",
    tag: "ECI Database",
    iconName: "Vote",
  },
  {
    id: "passport-application-validation",
    title: "Passport Application Validation",
    description: "Validate Indian passport application details.",
    category: "Identity",
    tag: "Passport Seva",
    iconName: "FileCheck2",
  },
  {
    id: "cin-verification",
    title: "CIN Verification",
    description: "Validate Company Identification Numbers via MCA.",
    category: "Corporate",
    tag: "MCA21 Registry",
    iconName: "Building2",
  },
  {
    id: "ip-verification",
    title: "IP Verification",
    description: "Geo-locate and risk-score IP addresses.",
    category: "Security",
    tag: "Fraud Telemetry",
    iconName: "ShieldAlert",
  },
  {
    id: "name-match",
    title: "Name Match",
    description: "Fuzzy name matching across identity documents.",
    category: "AI Match",
    tag: "Fuzzy Matching",
    iconName: "Sparkles",
  },
  {
    id: "itr-compliance-check",
    title: "ITR Compliance Check",
    description: "Check income tax return filing and compliance status.",
    category: "Compliance",
    tag: "Section 206AB",
    iconName: "FileSpreadsheet",
  },
  {
    id: "din-verification",
    title: "DIN Verification",
    description: "Verify Director Identification Numbers via MCA.",
    category: "Corporate",
    tag: "MCA Master Data",
    iconName: "Users",
  },
  {
    id: "e-challan-verification",
    title: "E-Challan Verification",
    description: "Check pending traffic challans for vehicles.",
    category: "Transport",
    tag: "Traffic NIC",
    iconName: "AlertCircle",
  },
  {
    id: "email-verification",
    title: "Email Verification",
    description: "Validate email address deliverability and risk.",
    category: "Authentication",
    tag: "SMTP & MX Check",
    iconName: "MailCheck",
  },
  {
    id: "fssai-license-verification",
    title: "FSSAI License Verification",
    description: "Verify FSSAI food license details and status.",
    category: "Business",
    tag: "FSSAI Registry",
    iconName: "UtensilsCrossed",
  },
];

export const paymentApis: ApiProductItem[] = [
  {
    id: "bharat-bill-payment-system",
    title: "Bharat Bill Payment System (BBPS)",
    description: "Bill payments for 25+ bill categories via Bharat Connect.",
    category: "Utility & Bills",
    tag: "Bharat Connect / NPCI",
    iconName: "ReceiptText",
    featured: true,
  },
];

export const bcAgentApis: ApiProductItem[] = [
  {
    id: "domestic-money-transfer",
    title: "Domestic Money Transfer (DMT)",
    description: "Instant domestic money transfer via IMPS/NEFT.",
    category: "Remittance",
    tag: "IMPS / NEFT 24x7",
    iconName: "ArrowLeftRight",
    featured: true,
  },
  {
    id: "aeps-cashout",
    title: "AePS Cashout",
    description: "Aadhaar-enabled biometric cash withdrawal & transfer.",
    category: "Agent Banking",
    tag: "Biometric Micro-ATM",
    iconName: "Fingerprint",
    featured: true,
  },
];

export const apiHighlights = [
  {
    title: "99.95% High Availability SLA",
    description: "Redundant cloud infrastructure with automatic failover and sub-second response times.",
    iconName: "ShieldCheck",
  },
  {
    title: "Plug & Play REST APIs",
    description: "Standard JSON payloads, detailed Postman collections, and robust SDKs for instant integration.",
    iconName: "Code2",
  },
  {
    title: "Bank-Grade Encryption",
    description: "TLS 1.3, AES-256 data at rest, and strict adherence to RBI and regulatory compliance.",
    iconName: "Lock",
  },
  {
    title: "Real-Time Webhook Events",
    description: "Instant asynchronous callbacks for asynchronous identity verification and transaction states.",
    iconName: "Zap",
  },
];
