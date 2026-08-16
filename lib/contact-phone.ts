const DEFAULT_PHONE = "888704363";

export function getContactPhone() {
  const raw =
    process.env.CONTACT_PHONE?.trim() ||
    process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() ||
    DEFAULT_PHONE;

  return raw.replace(/\s+/g, "");
}

export function formatContactPhone(phone = getContactPhone()) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 9) {
    return `+48 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }
  if (digits.length === 11 && digits.startsWith("48")) {
    return `+48 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  }
  return phone;
}

export function telHref(phone = getContactPhone()) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 9) return `tel:+48${digits}`;
  if (digits.startsWith("48")) return `tel:+${digits}`;
  return `tel:${digits}`;
}
