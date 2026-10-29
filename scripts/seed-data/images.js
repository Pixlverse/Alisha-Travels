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
  // Added with the customized proposals for these three. CC BY 2.0 / CC BY-SA 4.0.
  georgia: {
    url: `${C}/6/66/Old_Tbilisi_--_Armenian_Quarter.jpg/1920px-Old_Tbilisi_--_Armenian_Quarter.jpg`,
    alt: "Balconied houses of the old Armenian quarter in Tbilisi, Georgia",
  },
  albania: {
    url: `${C}/c/ce/Berat_-_view_from_castle.JPG/1920px-Berat_-_view_from_castle.JPG`,
    alt: "The old town of Berat seen from its castle, Albania",
  },
  lakshadweep: {
    url: `${C}/f/f0/Agatti_Island_Lakshadweep.jpg/1920px-Agatti_Island_Lakshadweep.jpg`,
    alt: "Turquoise lagoon and white sand on Agatti Island, Lakshadweep",
  },
  /* Added with the customized proposals (customized package/). Freely licensed
     Wikimedia Commons photos, each checked to return a 1920px JPEG. */
  china: {
    url: `${C}/6/64/The_Mutianyu_section_of_the_Great_Wall_of_China.jpg/1920px-The_Mutianyu_section_of_the_Great_Wall_of_China.jpg`,
    alt: "The Great Wall of China at Mutianyu, winding over the hills north of Beijing",
  },
  kenya: {
    url: `${C}/7/74/Acacia_tree_on_Maasai_Mara_landscape%2C_Kenya.jpg/1920px-Acacia_tree_on_Maasai_Mara_landscape%2C_Kenya.jpg`,
    alt: "An acacia tree on the open grassland of the Masai Mara, Kenya",
  },
  mauritius: {
    url: `${C}/b/b5/Le_Morne_Beach_with_Le_Morne_Brabant_Mountain_in_the_background%2C_Mauritius_%2853698223315%29.jpg/1920px-Le_Morne_Beach_with_Le_Morne_Brabant_Mountain_in_the_background%2C_Mauritius_%2853698223315%29.jpg`,
    alt: "Palms and beach loungers at Le Morne, below Le Morne Brabant mountain, Mauritius",
  },
  armenia: {
    url: `${C}/8/8a/Mount_Ararat_and_the_Yerevan_skyline.jpg/1920px-Mount_Ararat_and_the_Yerevan_skyline.jpg`,
    alt: "Mount Ararat rising behind the Yerevan skyline, Armenia",
  },
  kazakhstan: {
    url: `${C}/a/a3/Big_Almaty_Lake_from_pass.jpg/1920px-Big_Almaty_Lake_from_pass.jpg`,
    alt: "Big Almaty Lake in the Tian Shan mountains above Almaty, Kazakhstan",
  },
  turkey: {
    url: `${C}/9/94/Hot_air_balloon_over_Cappadocia%2C_Turkey.JPG/1920px-Hot_air_balloon_over_Cappadocia%2C_Turkey.JPG`,
    alt: "A hot air balloon over the rock valleys of Cappadocia, Turkey",
  },
  "hong-kong": {
    url: `${C}/a/a4/Hong_Kong_Harbour_Night_2019-06-11.jpg/1920px-Hong_Kong_Harbour_Night_2019-06-11.jpg`,
    alt: "Victoria Harbour and the Hong Kong skyline at night, seen from Victoria Peak",
  },
  japan: {
    url: `${C}/3/3b/Chureito_Pagoda_and_Mount_Fuji_20241022.jpg/1920px-Chureito_Pagoda_and_Mount_Fuji_20241022.jpg`,
    alt: "The Chureito Pagoda with Mount Fuji behind it, Japan",
  },
  egypt: {
    url: `${C}/a/af/All_Gizah_Pyramids.jpg/1920px-All_Gizah_Pyramids.jpg`,
    alt: "The Pyramids of Giza on the edge of Cairo, Egypt",
  },
  pondicherry: {
    url: `${C}/8/8c/Pondicherry-Rock_beach_aerial_view.jpg/1920px-Pondicherry-Rock_beach_aerial_view.jpg`,
    alt: "Rock Beach and the seafront of Pondicherry from above",
  },
  // Laos: Kuang Si Falls near Luang Prabang (CC BY-SA 4.0)
  laos: { url: `${C}/6/61/Kuang_Si_Falls_and_its_turquoise_tiered_water_pools_in_Luang_Prabang_province_Laos.jpg/1920px-Kuang_Si_Falls_and_its_turquoise_tiered_water_pools_in_Luang_Prabang_province_Laos.jpg`, alt: "The turquoise tiered pools of Kuang Si Falls near Luang Prabang, Laos" },
  // Philippines: limestone-walled lagoon in Bacuit Bay, El Nido, Palawan (CC BY 4.0)
  philippines: { url: `${C}/4/4f/Island_lagoon_in_Bacuit_Bay%2C_El_Nido%2C_Palawan%2C_Philippines.jpg/1920px-Island_lagoon_in_Bacuit_Bay%2C_El_Nido%2C_Palawan%2C_Philippines.jpg`, alt: "Clear turquoise water between limestone cliffs in Bacuit Bay, El Nido, Palawan" },
  // South Korea: Gyeonghoeru pavilion at Gyeongbokgung Palace, Seoul (CC BY-SA 4.0)
  "south-korea": { url: `${C}/5/5d/Gyeonghoeru_%28Royal_Banquet_Hall%29_at_Gyeongbokgung_Palace%2C_Seoul.jpg/1920px-Gyeonghoeru_%28Royal_Banquet_Hall%29_at_Gyeongbokgung_Palace%2C_Seoul.jpg`, alt: "Gyeonghoeru pavilion reflected in its pond at Gyeongbokgung Palace, Seoul" },
  // Sri Lanka: Sigiriya Lion Rock above the jungle (CC BY-SA 2.0)
  "sri-lanka": { url: `${C}/9/9d/Sigir%C3%AEya_Lion_Rock_%2836231936082%29.jpg/1920px-Sigir%C3%AEya_Lion_Rock_%2836231936082%29.jpg`, alt: "The Sigiriya Lion Rock fortress rising above the forest, Sri Lanka" },
  // Uzbekistan: the three madrasas of the Registan, Samarkand (CC0)
  uzbekistan: { url: `${C}/4/46/Registan_01.jpg/1920px-Registan_01.jpg`, alt: "The three tiled madrasas of the Registan in Samarkand, Uzbekistan" },
  // Tawang: Tawang Monastery below the peaks, Arunachal Pradesh (CC BY-SA 4.0)
  tawang: { url: `${C}/5/54/Tawang_Monastery_from_a_distance.jpg/1920px-Tawang_Monastery_from_a_distance.jpg`, alt: "Tawang Monastery on its ridge beneath a Himalayan peak, Arunachal Pradesh" },
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
  kualaLumpur: {
    url: `${C}/8/87/Kuala_Lumpur_Malaysia_Skyline-01.jpg/1920px-Kuala_Lumpur_Malaysia_Skyline-01.jpg`,
    alt: "The Kuala Lumpur skyline with the Petronas Twin Towers and KL Tower",
  },
  airport: {
    url: `${C}/3/3c/Cochin_International_Airport_IMG_20251109_114917159.jpg/1920px-Cochin_International_Airport_IMG_20251109_114917159.jpg`,
    alt: "The terminal building at Cochin International Airport",
  },
};

export const ALL_SEED_IMAGES = { ...DESTINATION_IMAGES, ...EXTRA_IMAGES };
