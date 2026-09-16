import DestinationRequestForm from "./DestinationRequestForm";
import { getDestinations } from "@/lib/data/destinations";
import { getServices } from "@/lib/data/content";

/**
 * Server wrapper for the destination request block, following the same pattern
 * as EnquiryCta: it loads the two lists the enquiry form needs so a page can
 * drop the block in without threading data through as props.
 */
export default async function DestinationRequest() {
  const [destinations, services] = await Promise.all([getDestinations(), getServices()]);
  return <DestinationRequestForm destinations={destinations} services={services} />;
}
