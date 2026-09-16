/**
 * Placeholder photography for development seeding.
 *
 * These are freely licensed Wikimedia Commons / Wikipedia images, deliberately
 * chosen so that every destination shows a picture of *itself* — the legacy
 * site shipped a Dubai photograph on the Vietnam tile, which is exactly the
 * kind of thing that costs a travel agency credibility.
 *
 * How they are used (see scripts/seed.js):
 *   - With Cloudinary configured, each URL is uploaded once into the client's
 *     own Cloudinary account and the resulting secure_url is stored, so
 *     production never hotlinks a third-party host.
 *   - Without Cloudinary configured, the source URL is stored directly so the
 *     site still renders locally. next.config.mjs allowlists thumb.wikimedia.org
 *     for exactly that reason.
 *
 * REPLACE THESE. They are stand-ins so the site is not empty during
 * development. Real photography goes in through /admin/ once the client
 * supplies it — the audit (section 14.5) asks for the original high-resolution
 * set, which is what should ultimately live in Cloudinary.
 *
 * Every entry carries `alt` text. Section 10 of the brief requires an alt
 * attribute on every image, and alt text belongs with the image rather than
 * being reinvented at each render site.
 */

const C = "https://thumb.wikimedia.org/wikipedia/commons/thumb";
const EN = "https://thumb.wikimedia.org/wikipedia/en/thumb";

export const DESTINATION_IMAGES = {
  dubai: {
    url: `${EN}/c/c7/Burj_Khalifa_2021.jpg/1920px-Burj_Khalifa_2021.jpg`,
    alt: "The Burj Khalifa rising above the Dubai skyline",
  },
  singapore: {
    url: `${C}/c/c7/Marina_Bay_Sands_%28I%29.jpg/1920px-Marina_Bay_Sands_%28I%29.jpg`,
    alt: "Marina Bay Sands reflected in the water at Marina Bay, Singapore",
  },
  thailand: {
    url: `${C}/e/e7/KohPhiPhi.JPG/1920px-KohPhiPhi.JPG`,
    alt: "Limestone cliffs and turquoise water at the Phi Phi Islands, Thailand",
  },
  maldives: {
    url: `${C}/0/0d/Kuramathi_Beach_%28Lagoon%29_001.jpg/1920px-Kuramathi_Beach_%28Lagoon%29_001.jpg`,
    alt: "A white sand spit running out into the lagoon at Kuramathi, Maldives",
  },
  malaysia: {
    url: `${C}/6/6c/Eagle_square_at_Kuah_Langkawi.jpg/1920px-Eagle_square_at_Kuah_Langkawi.jpg`,
    alt: "Eagle Square on the waterfront at Kuah, Langkawi, Malaysia",
  },
  bali: {
    url: `${C}/8/8d/TanahLot_2014.JPG/1920px-TanahLot_2014.JPG`,
    alt: "The sea temple of Tanah Lot on its rock offshore in Bali",
  },
  vietnam: {
    url: `${C}/7/79/Ha_Long_Bay_in_2019.jpg/1920px-Ha_Long_Bay_in_2019.jpg`,
    alt: "Karst islands rising out of the water in Ha Long Bay, Vietnam",
  },
  azerbaijan: {
    url: `${C}/1/14/Baku_Seaside_Bulevard.JPG/1920px-Baku_Seaside_Bulevard.JPG`,
    alt: "The seaside boulevard along the Caspian shore in Baku, Azerbaijan",
  },
  europe: {
    url: `${C}/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/1920px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg`,
    alt: "The Matterhorn seen across the Swiss Alps at first light",
  },
  bhutan: {
    url: `${C}/a/a6/Paro_Taktsang%2C_Bhutan_%28edited%29.jpg/1920px-Paro_Taktsang%2C_Bhutan_%28edited%29.jpg`,
    alt: "Paro Taktsang, the Tiger's Nest monastery, on its cliff face in Bhutan",
  },
  nepal: {
    url: `${C}/1/13/Machapuchare_close-up_of_summit_ridge.jpg/1920px-Machapuchare_close-up_of_summit_ridge.jpg`,
    alt: "The summit ridge of Machapuchare in the Annapurna range, Nepal",
  },
  kerala: {
    url: `${C}/b/b9/Munnar_Overview.jpg/1920px-Munnar_Overview.jpg`,
    alt: "Tea gardens layered across the hills above Munnar, Kerala",
  },
  "kashmir-srinagar": {
    url: `${C}/e/e1/Dal_Lake_Hazratbal_Srinagar.jpg/1920px-Dal_Lake_Hazratbal_Srinagar.jpg`,
    alt: "Shikaras on Dal Lake with the Hazratbal shrine behind, Srinagar",
  },
  ladakh: {
    url: `${C}/8/8d/Road_Padum_Zanskar_Range_Jun24_A7CR_00818.jpg/1920px-Road_Padum_Zanskar_Range_Jun24_A7CR_00818.jpg`,
    alt: "A road winding below the Zanskar range near Padum, Ladakh",
  },
  andaman: {
    url: `${C}/1/1f/Radha_Nagar_beach%2C_Havelock_Island%2C_Andamn%2C_India-_Sun_set_view.jpg/1920px-Radha_Nagar_beach%2C_Havelock_Island%2C_Andamn%2C_India-_Sun_set_view.jpg`,
    alt: "Sunset over Radhanagar Beach on Havelock Island, Andaman",
  },
  goa: {
    url: `${C}/9/9c/Palolem_Beach%2C_South_Goa.jpg/1920px-Palolem_Beach%2C_South_Goa.jpg`,
    alt: "The curving bay and palms of Palolem Beach in South Goa",
  },
  rajasthan: {
    url: `${C}/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1920px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg`,
    alt: "The honeycombed east facade of the Hawa Mahal in Jaipur, Rajasthan",
  },
  darjeeling: {
    url: `${C}/d/d8/Tiger_Hill_Darjeeling_West_Bengal_India_%283%29.JPG/1920px-Tiger_Hill_Darjeeling_West_Bengal_India_%283%29.JPG`,
    alt: "Sunrise over the Himalaya seen from Tiger Hill, Darjeeling",
  },
  "golden-triangle": {
    url: `${C}/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/1920px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg`,
    alt: "The Taj Mahal at Agra, seen across the reflecting pool",
  },
  "delhi-manali": {
    url: `${C}/b/b5/Solang_Valley%2C_Manali.jpg/1920px-Solang_Valley%2C_Manali.jpg`,
    alt: "Snow on the peaks above Solang Valley, near Manali",
  },
  hyderabad: {
    url: `${C}/a/a5/Aerial_view_of_Hussain_Sagar_from_Bansalipet.jpg/1920px-Aerial_view_of_Hussain_Sagar_from_Bansalipet.jpg`,
    alt: "Hussain Sagar lake seen from above, Hyderabad",
  },
};

/** Extra frames used for package heroes, galleries and the /gallery/ page. */
export const EXTRA_IMAGES = {
  pattaya: {
    url: `${C}/e/ec/Pattaya_beach_from_view_point.jpg/1920px-Pattaya_beach_from_view_point.jpg`,
    alt: "Pattaya beach and bay seen from the viewpoint above the town",
  },
  phuket: {
    url: `${C}/6/60/Phuket_Aerial.jpg/1920px-Phuket_Aerial.jpg`,
    alt: "The coastline and offshore islands of Phuket, Thailand, from the air",
  },
  gardensByTheBay: {
    url: `${C}/5/5d/Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore_-_20120712-02.jpg/1920px-Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore_-_20120712-02.jpg`,
    alt: "The Supertree Grove at Gardens by the Bay, Singapore",
  },
  houseboat: {
    url: `${C}/1/13/Kerala_Houseboat_%28191490747%29.jpeg/1920px-Kerala_Houseboat_%28191490747%29.jpeg`,
    alt: "A kettuvallam houseboat moored on the Kerala backwaters",
  },
  ettumanoor: {
    url: `${C}/5/56/Ettumanoor_Temple_North_Gate_Entrance.JPG/1920px-Ettumanoor_Temple_North_Gate_Entrance.JPG`,
    alt: "The north gate of the Ettumanoor temple, near the Kottayam head office",
  },
  airport: {
    url: `${C}/3/3c/Cochin_International_Airport_IMG_20251109_114917159.jpg/1920px-Cochin_International_Airport_IMG_20251109_114917159.jpg`,
    alt: "The terminal building at Cochin International Airport",
  },
};

export const ALL_SEED_IMAGES = { ...DESTINATION_IMAGES, ...EXTRA_IMAGES };
