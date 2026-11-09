import { SINDH_POINTS } from "./sindh-map";

/**
 * Campus list. City coordinates are real; addresses, phone numbers and hours
 * are PLACEHOLDERS until verified.
 */
export interface Campus {
  slug: "sukkur" | "karachi";
  name: string;
  city: string;
  lat: number;
  lng: number;
  /** Position on the Sindh SVG (viewBox units, same projection as the outline). */
  point: { x: number; y: number };
  address: string;
  phone: string;
  hours: string;
  description: string;
}

export const CAMPUSES: Campus[] = [
  {
    slug: "sukkur",
    name: "Sukkur Titan Campus",
    city: "Sukkur",
    lat: 27.7052,
    lng: 68.8574,
    point: SINDH_POINTS.sukkur,
    address: "Address to be confirmed",
    phone: "Phone to be confirmed",
    hours: "Hours to be confirmed",
    description:
      "Serving learners in Upper Sindh, the Sukkur campus brings TITAN's practical technology programmes to the banks of the Indus.",
  },
  {
    slug: "karachi",
    name: "Karachi Titan Campus",
    city: "Karachi",
    lat: 24.8607,
    lng: 67.0011,
    point: SINDH_POINTS.karachi,
    address: "Address to be confirmed",
    phone: "Phone to be confirmed",
    hours: "Hours to be confirmed",
    description:
      "Located in Pakistan's largest city, the Karachi campus connects learners with hands-on labs and the country's busiest technology market.",
  },
];

export const getCampus = (slug: string) => CAMPUSES.find((c) => c.slug === slug);

export const mapsUrl = (c: Campus) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${c.lat},${c.lng}`)}`;
