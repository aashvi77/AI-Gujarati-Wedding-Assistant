import { db, knowledgeChunks } from "@workspace/db";
import { count } from "drizzle-orm";

const KNOWLEDGE_BASE = `# Gujarati Wedding Knowledge Base

## OVERVIEW OF ALL CEREMONIES

1. Chandlo Matli — Acceptance of the alliance
2. Gol Dhana / Sagai — Engagement / ring ceremony
3. Kankotri — Wedding invitation ceremony
4. Ganesh Sthapan — Commencement of all marriage rituals
5. Mehendi — The henna ceremony
6. Sangeet Sandhya / Garba & Dandia Raas — Traditional Gujarati dances
7. Prenuptial Ceremonies (Vidhi Day — all typically on the same day):
   - Mandva Mahurat — Constructing the canopy for wedding rites
   - Pithi — Beautification / haldi ritual
   - Grah Shanti — Invoking harmony within the planets
   - Varadh / Gotaido — Pot procession ceremony (after Grah Shanti)
8. Mameru / Mosaalu — The bride receives gifts from her maternal uncle
9. Varghodo / Baarat — The groom's procession
10. Var Ponke / Jaan Agman — Welcoming the groom
11. Lagna — The wedding ceremony:
    - Jaimala / Varmala — Exchange of garlands
    - Madhuparka / Vaarpooja — Washing of groom's feet
    - Antarpat — Sacred cloth partition
    - Kanyadaan / Hast Melap — Giving away the bride and joining of hands
    - Mangal Pheras — Four circumventions around the sacred fire
    - Saptapadi — Seven steps and vows
    - Sindoor — Application of vermilion
    - Mangalsutra — Tying of the sacred necklace
    - Saubhagyavati Bhava — Blessings from seven married women
    - Kansar — Feeding sweets as first meal together
    - Chhedo Pakadyo — Groom catches mother-in-law's sari
12. Bidaai / Vadava Vanu — Bridal send-off and shoe negotiations
13. Var Ghodyu Pokvanu Che / Griha Pravesh — Welcoming the bride into her marital home
14. Aeki Beki — Post-wedding ring game
15. Reception — Post-wedding celebrations

---

## ABOUT GUJARATI PATEL WEDDINGS

### History of the Patel Community

It is believed that the Patel (Patidar) community shares a common ancestry with the Punjabi Jats. A prosperous community known for its willingness to work hard, the Patidars are also very ambitious. The Kaira district in Gujarat owes its success to the hard work and enterprise of the Patels — it is the home of the famous Amul Dairy (the Kaira District Co-operative Milk Producers Union), the most successful dairy cooperative in India. Outstanding in trade, commerce, and industry, Patels have been pioneers in textiles, chemicals, and engineering. Great political leaders like Vallabhbhai Patel and his brother Vithalbhai Patel belonged to this community. It is believed that the Patidars originated from Luv and Kush, the sons of Lord Rama.

Patidar weddings are lavish and extravagant. The bride and groom receive huge amounts of clothes, jewelry, and cash as gifts. The groom is given cash gifts after almost every ceremony — in fact, after each parikrama (circumvention around the sacred fire), his palms are crossed with gold.

Common Gujarati Patel surnames: Patel, Amin, Desai.

The Patels, Amins, and Desais were traditionally landowners who had a barber, washer man, and tailor living on their properties who served the landlords exclusively. Their families would help when the need arose. For the Pithi ceremony, the varangand (barber's wife) traditionally comes from the family's ancestral village and it is her sacred duty to assist the bride in washing off the pithi. Most modern brides now opt to look after themselves instead.

---

## HOW LONG DOES A GUJARATI WEDDING LAST?

Modern Gujarati weddings in America (and abroad) typically last three to four days over a long weekend, though the exact schedule is entirely up to the family. A typical breakdown:

- **Day 1 (Vidhi Day):** Pithi, Mandva Mahurat, Grah Shanti, Mameru, and Varadh — all typically on the same day
- **Day 2:** Mehendi and/or Sangeet/Garba Night (Mehendi is usually the first event of the wedding weekend)
- **Day 3:** The Wedding ceremony (Baraat, ceremony, cocktail hour)
- **Day 4:** Reception

Note: Many of the rituals performed during the Vidhi are associated not only with Lord Ganesha but also with the family's paternal side Kuldevi (ancestral deity). Most rituals during the Vidhi are performed by the paternal side of the family. The maternal side plays its central role during the Mameru ceremony.

---

## ENGAGEMENT & PRE-WEDDING CEREMONIES

### Chandlo Matli (Chandlo Vidhi / Chaa Paani / Mehmaan / Parona)

This ceremony has different names in different parts of Gujarat:

- **Chaa Paani** — used by many families in Surat; literally means "tea and water." The bride's family hosts a full Gujarati feast. In older times, 5–7 elder male members of the groom's family would visit the bride's family with a promise and intention of allowing their son to marry the bride. They arrive with gifts of food, jewelry, and blessings. The bride's family also showers them with gifts and food.
- **Mehmaan / Parona** — same ceremony with a different name. Mehmaan/Parona means "guests." The intention is to get to know each other and plan the wedding.
- **Chandlo / Chandla Vidhi** — when the five male members from the groom's family visit, the groom's father puts a red dot (from red vermilion powder) on the bride's head welcoming her into his family, symbolizing the new promise and union. Gifts are exchanged as a form of Shagun (good luck).

Chandlo Matli is the first ceremony that formally commences the marriage alliance. "Chandlo" means the red vermilion mark applied on the forehead, and "Matli" is the clay container used to pack mithai in the olden days.

The bride's family visits the groom's family. They carry as an offering 1¼ kg of unrefined sugar and some kesar (saffron) in a decorated fabric pouch tied with nada chari (sacred red thread). They also take boxes of mithai (sweetmeats), which the groom's parents will distribute to their family and friends.

The bride's father applies the chandlo with vermilion and rice on the groom's forehead and gives him a shakun (a blessing with a nominal amount of money). His mother may send a sari or a ring back with them as a gift for the bride. The groom's family then consults an astrologer who gives them a choice of auspicious dates. Both families agree on a suitable date for the wedding.

In the USA, families complete this ritual either before or after the proposal. Sometimes Chandlo Matli and Gol Dhana happen on the same day.

Gujarati people believe that marriage is a union of two families as well as the bride and groom. These pre-wedding traditions allow everyone to get to know each other and show acceptance of the new family members. They are filled with blessings — which can be a verbal blessing or, as is most often the case, cash in an envelope to help the new couple begin their life together.

**What you need:** Cloth pouch, rice, 1¼ kg unrefined sugar, saffron, nada chari (sacred red thread), mithai, token money (shagun), sari or ring (optional gift from groom's mother)

---

### Gol Dhana (Gor Dhana / God Dhana / Sagai / Engagement)

Gol means jaggery and Dhana means coriander seeds in Gujarati. This is the formal Gujarati engagement/ring ceremony. The would-be couple officially accepts each other with the blessings of the elders.

Five married women, each from the bride's and groom's family, take turns blessing the couple-to-be for a happy married life. The couple exchanges rings. The bride's family visits the groom's family and presents them with gifts of sweets and savories in a traditional pot known as a Matli.

This can be an intimate home gathering or a large affair. Some families perform this ritual a couple of days before the wedding; others do it a few months prior. Often, Chandlo Matli and Gol Dhana happen on the same day.

In the USA, families do this after the proposal event (if one is happening). An engagement party is not a requirement, but many families have adopted this Western custom — a party hosted by the groom's parents in the evening where the couple exchanges rings.

---

### Kankotri (Wedding Invitation Ceremony)

The Kankotri ceremony is an important but somewhat optional pre-wedding tradition. It typically takes place a few weeks to a couple of months before the wedding, around the time the family is preparing to formally send out wedding invitations — which are themselves called kankotris.

The wedding invitation is not treated as just a card but as a sacred announcement. Before the invitations are sent out, families often perform a small puja or blessing ceremony. The kankotri is typically first offered to Lord Ganesha for blessings, asking for an auspicious start and removal of obstacles. In some families, it is also optionally placed in front of the paternal side Kuldevi for additional family lineage blessings, depending on household tradition.

After these ritual blessings, the invitations are formally distributed to extended family members, close relatives, and community members. In many Gujarati families, this is not just a mailing process but an opportunity for personal visits — immediate family members, often along with the mama or close relatives, may go house to house to hand-deliver invitations and seek blessings in person.

The ceremony itself is usually simple compared to larger wedding events, but it carries strong emotional and cultural significance. It marks the official beginning of the wedding journey.

---

### Mehendi (Mehndi)

Mehendi is a fun and informal gathering of the bride's female relatives and friends. It is usually the first event of the wedding weekend, typically held two to three days before the wedding, though timing can vary.

Mehendi (henna) is ground into a paste and applied by professional mehendiwallis in fine patterns on the palms and feet of the bride. Adorning the bride with mehendi can take hours as particularly intricate designs are drawn. The henna is washed off in a couple of hours, leaving a deep red impression.

Traditionally, mehendi was applied not only as an ornament but because it is calming and helps relieve the stress of the wedding. It also has cooling properties.

It is a tradition for brides to include designs such as a doli (palanquin), musical instruments, and the bride and groom in their henna. It is also tradition for the groom's name to be cleverly hidden within the bride's mehndi design — the groom must find his name. The groom is not meant to see the bride's mehndi before the wedding.

The ladies dress up in bright-colored traditional outfits and sing lagan geet songs specific to the occasion while the mehendi is being applied. This is followed by a lunch.

This event can occur simultaneously at both the bride's and groom's homes, or as a combined event. Some families choose to host an elaborate affair with caterers, shamianas (decorative tents), and theme settings like village setups with bangle sellers and chaat stalls. Others keep it low-key and intimate at home — it depends entirely on the family's budget and vision.

**What you need:** Mehendi paste (which the mehendiwalli can bring), mehendiwalli (henna artist)

---

## VIDHI DAY CEREMONIES

### About Vidhi Day

The Vidhi (also called the pre-wedding ceremony day) includes the Pithi, Mandva Mahurat, Grah Shanti, Mameru, and Varadh — all typically held on the same day, the day before the wedding. These rituals are associated not only with Lord Ganesha but also with the family's paternal side Kuldevi.

---

### Ganesh Sthapan (Ganesh Matli / Ganesh Sthaapnaa)

Lord Ganesha is always the first deity to be worshipped at any significant event. He is the lord who removes all obstacles (Vighna), and his blessings are invoked before preparations begin for the wedding so that no obstacles present themselves.

In a charming tradition, the first wedding invitation card is sent to Lord Ganesha at the temple, making him the first "guest" to be invited.

This puja is attended by close family members and is performed in both homes simultaneously on an auspicious day. After the puja, a vegetarian meal is served, along with a sweet called kansaar, made from whole-wheat flour, sugar, and clarified butter.

**Ganesh Matli** is specifically practiced by families originating from North and West Gujarat. Here, the bride's family — usually the bride's brother and male cousins in a count of five to seven — along with the bride, visits the groom's family with a Ganesh idol and matlis filled with sweets. After greeting and the application of vermilion to the groom by the bride's brother, the bride and groom conduct a Ganesh puja together — their first puja as a couple. After the completion, the bride and her family leave, and the groom's family continues with the following rituals. Meanwhile, the Ganesh puja is simultaneously happening at the bride's house. Upon the bride's return, her family will continue with the following rituals.

**What you need:** Kumkum, deepak (lamp), rice, supari (areca nuts), abil (white powder), haldi (turmeric), flowers, shriphal (coconut), agarbattis (incense sticks), kansaar, gulal (pink powder), Ganesh idol, matlis with sweets

---

### Mandva Mahurat (Mandap Muhurat / Thaambli Poojan)

Also known as Mangal Mahurat. This ceremony occurs simultaneously at both the bride's and groom's homes. The families pray to Lord Ganesha and seek blessings from Mother Earth before erecting the mandap (wedding canopy).

Back in the day, the wedding ceremony normally took place in front of the bride's home by setting up a special square gazebo called a Mandap. The prayers to bless this space and the new couple are performed during the Mandap Mahurat.

A family priest officiates. The bride's kaka and kaaki (father's brother and his wife) carry a copper vessel with a coconut nestled on top, on which paan (betel) leaves are tied with nada chari (red thread). They will also have flower garlands on. This is placed in front of the shrine set up in the house. The kaka and kaaki put flowers and kumkum (vermilion) on the idol of Lord Ganesha. The priest performs a brief puja at the shrine, then puts a tikka on their foreheads (though this depends on family tradition) and gives a small stick with nada chari wrapped around it. The kaaki carries this to the site of the mandva — in modern times, just outside the venue of the vidhi — and embeds it into the earth, consecrating it. This stick is symbolic of one of the poles of the mandva that will support the canopy.

**The Manek Stambh / Thaambli Poojan:** The ritual of putting the first pillar down for the mandap is known as Thaambli Poojan. Traditionally, the Manek Stambh (a decorative wooden stick) was dug into the soil — this spot would become where the wedding ceremony havan (sacred fire) would be held. In modern times, a Manek Stambh is placed in a decorative pot with soil, and a bit of that soil is added into the vidhi pyre. Some families use four sticks symbolizing North, South, East, and West. The application of turmeric, vermilion, and rice to the Manek Stambh symbolizes the invocation of divine blessings for the couple. Who places the stick varies based on family tradition, but it is usually the kaaki of the family.

This ritual symbolizes that the foundation for this marriage and all its ceremonies has been firmly planted with love and good wishes.

Fresh flower garlands are an important part of these ceremonies — used for the bride during the Pithi, for key rituals such as the Mandap Muhurat, and for parents or elders participating in the Grah Shanti as a symbol of blessings and respect.

**What you need:** Kumkum, deepak, rice, supari (areca nuts), abil (white powder), shriphal (coconut), flowers, paan (betel leaves), agarbattis (incense sticks), haldi (turmeric), gulal (pink powder), small stick with red thread wrapped around it, fresh flower garlands, mango leaves

---

### Pithi (Haldi Ceremony)

The Pithi ceremony is typically held on Vidhi Day alongside the Mandva Mahurat and Grah Shanti — usually before the Grah Shanti. It is held at both the bride's and groom's houses separately, or together during destination weddings.

**How it's pronounced:** Think of the word "teepee" and say the syllables in opposite order: "pee-tee." Then make the "tee" sound into a soft "th" — "pee-thee."

**The ritual:** A shrine is arranged with a picture of Lord Ganesha. The bride sits on a bajat or low stool, palms upturned, in front of the picture of Lord Ganesha. She wears a new but simple sari and red glass bangles symbolic of akhand sowbhagyavati (lifelong marriage). A red cloth is placed on another bajat in front of her on which is spread 1¼ kg of wheat. Five whole betel nuts with nada chari tied around each are blessed by the priest with kumkum and rice and placed on the wheat on top of paan (betel) leaves. Two coconuts with flowers and red thread tied around them are also placed on the wheat.

It is the prerogative of the kaaki (paternal uncle's wife) to mix and prepare the pithi — a paste of sandalwood, herbs, rosewater, and German mogro (an attar), and sometimes even French perfume! She arranges the pithi on a decorated platter and has it blessed by the priest. The bride's mother puts a tikka with kumkum and rice on the bride's forehead.

A lota (vessel) containing water with five aasopalav (Ashoka) leaves and tied at the neck with red thread is decorated with a Hindu swastika made with kumkum. A coconut is placed on the neck of the lota. The chachi (father's brother's wife) and four akhand sowbhagyavatis (women who have enjoyed a long marriage and whose husbands are alive) selected from both sides of the bride's family hold the lota over the bride's head. The priest removes the coconut and chants shlokas (Vedic verses) while the five women dip the leaves into the water and sprinkle some drops behind them, after which the leaves are also thrown behind.

The women of the household apply the pithi on the bride's skin using their hands. This purifies and softens the skin. In modern times, the bride then goes to shower and wears a new outfit before the Grah Shanti.

**Benefits of pithi/turmeric paste:**
- Antibacterial properties protecting the couple from illness
- Exfoliating properties cleansing the skin and helping it glow on the wedding day
- Anti-inflammatory and antidepressant properties calming the couple's nerves
- Protecting the couple's bodies from the evil eye and evil spirits
- The yellow color of turmeric is auspicious and blesses the couple with prosperity

Fun fact: It is believed that if the bride or groom applies haldi to an unmarried person, that person will be the next to marry.

**Modern Pithi:** In modern Gujarati weddings, the Pithi is often highly energetic and playful — featuring water guns, water balloons, loud music, and a lively atmosphere with cousins and friends dancing and smearing haldi on the couple in a fun and chaotic way. Many couples now choose to have a joint Pithi where both the bride and groom participate together, turning it into a shared celebration. A popular modern theme is yellow — many guests also dress in yellow or coordinated colors to match the festive tone.

**The bride's Pithi outfit:** Since the Pithi involves applying haldi and other mixtures, the bride wears an outfit she is comfortable getting stained. Many brides keep jewelry minimal during Pithi, though some incorporate floral jewelry or fresh flowers depending on preference. After the Pithi, the bride typically changes into a second outfit for the Grah Shanti — traditionally a panetar outfit (white with red and green accents), though many modern brides choose a red lehenga instead.

**Gifts at Pithi:** It is common for various items to be distributed to guests during the Pithi. Traditionally, the foibai (father's sister) plays a central role in distributing gifts. Items can include small sweets, nuts, British or Western candies, or in more elaborate weddings, bags, scarves, jewelry, or decorative items — whatever the family chooses to "vaich" (give out). Modern weddings often include premium snacks like namkeen assortments or packaged treats. When guests come up to apply pithi to the bride or groom, they typically hand over an envelope with money — close family and friends may give gold instead. The food served on Pithi/Vidhi day is traditional Gujarati food — typically a full traditional Gujarati lunch.

**Ookarhi Nautarvi (after the Pithi):** A small ceremony conducted after the pithi wherein the kaaki places an iron nail, a whole supari (betel nut), and a one-rupee coin in a shallow hole dug by the pujari. This is done to ensure that no evil spirits enter the venue of the wedding. After the wedding, the items are taken out of the hole and submerged in a nearby stream.

**What you need:**
- Bride's attire: Simple sari, red glass bangles
- Groom's attire: Kurta pyjama, mojhris (juttis)
- For the puja: 1¼ kg wheat, coconut, rice, lota, betel nuts, mango leaves, nada chari, iron nail, betel leaves, rupee coin, kumkum, priest, bajot, thali, aasopalav (Ashoka leaves)
- Pithi paste: sandalwood, herbs, rosewater, attar
- Gifts to distribute to guests (sweets, envelopes, etc.)

---

### Grah Shanti (Griha Shanti / Saatak / Navagraha Shanti Puja)

"Grah" can translate to planet or house, and "shanti" means peace. So Grah Shanti literally means a ceremony for planetary peace and blessings.

This is a very important and profound religious ceremony. In Hindu tradition, the planets (grahas) are believed to influence our lives and destiny. When performing this puja before a wedding, families ask for harmony, prosperity, and the removal of obstacles for the couple's new life together. Any disturbance in the stars can cause harm or clashes in the marital relationship — the purpose of the puja is to bring peace among the stars and ensure stellar harmony during and after the wedding.

Depending on the family's region or community, Grah Shanti may be referred to as:
- **Navagraha Shanti Puja** — prayers to the nine planets
- **Saatak** — the name used in Surti (Surat) culture

It may also be performed in conjunction with a Ganesh Puja, during which families pray specifically to Lord Ganesh to remove obstacles.

**Why Grah Shanti is important:**
- Seeking blessings from deities, ancestors, and elders
- Purifying the home and couple's lives before marriage
- Calming potential conflicts that could arise during wedding planning
- Bringing both families together in a spiritual, meaningful way before the big day
- Even couples who don't strongly follow astrological beliefs often include it as a way to honor traditions and give their parents peace of mind

**Timing and location:** Usually scheduled on Vidhi Day, the day before the wedding. Can take place at the bride's or groom's home, in a temple, or at the wedding venue. Be sure to check if your venue allows fire-based rituals, since the puja involves a small sacred fire.

**The ceremony:** The parents of the bride and groom are the primary figures in the invocation. On behalf of the parents, the officiating priests ask the deities to ensure stellar harmony during the wedding period. Everyone participates with the respect due.

Key moments:
- The bride's foi (father's sister) picks up the shriphal (coconut) with aasopalav (Ashoka) leaves and sacred red thread tied around it and hands it to the bride
- The bride takes the coconut to her parents, who are seated on patlas (flat low seats) in front of the homa (sacred fire) burning in a chawri (earthen container), and sits down beside them
- The bride's mother wears a modh (headpiece woven with beads) on her head
- The priest performs the puja, which can take up to two hours
- Flower garlands are needed for the parents to place on each other during the ceremony
- The bride hands over the shriphal she has been holding to her parents, who in turn hand it to the priest for ahuti (sacrifice). The priest consigns the coconut to the flames, propitiating the planets for peace and harmony
- The parents then stand on the patlas
- The priest ties the corner of the mother's sari pallav to the corner of the hem of the father's kurta — called "cheda ghunthvana"
- The foi unties it and is given a gift by her brother
- The priest ties a red string with betel nuts to the bride's right wrist — symbolic of her willingness to prepare herself for the wedding ceremony

After the Grah Shanti, there is typically a dinner in a hall for family and friends.

**If you're planning in the U.S.:** Many temples have pandits available, or you can hire one to travel to your home or venue.

**What you need:** Coconuts, sari, aasopalav (Ashoka) leaves, gift for foi/bua, red thread, red string with betel nuts, patlas, betel nuts, maad, betel leaves, chawri, pujari (priest), shriphal, modh for bride's mother, flower garlands

---

### Mameru (Mosaalu / Mosalu / Mausalu)

"Mameru" is derived from "mama" — the maternal uncle. This ceremony happens during or around the Grah Shanti on Vidhi Day.

The custom of mameru originated centuries ago when there were no legal rights for daughters. It was customary for parents to start making provisions for their daughter by gifting her on occasions like Rakshabandhan or Bhaibeej. This accumulated as streedhan (daughter's wealth). On getting married, the daughter would be given jewelry, clothes, and vessels. The parents would also bear all expenses during her pregnancy through delivery. Her newborn child would also be gifted with jewelry and clothes. When her child grew up and got married, the mama came with the mameru — and thus this practice of giving to the sister/daughter and their children became a lifelong practice of sharing family wealth with the female child.

The mameru is brought by the mama and mami in a decorated basket during or around the Grah Shanti. The bride's mother warmly welcomes it and rejoices that her brother is also ready to participate in the joyous occasion. Mameru stands as an eternal bond between brother and sister, and women continue to draw upon it for a feeling of security and support.

Not only are the mama and mami involved — all members of the maternal side gather and parade into the ceremony with the gifts.

Gifts brought in the mameru include:
- Panetar saree (white silk wedding sari with red and green border) — to be worn at the wedding. In modern times, many brides choose to wear a red lehenga instead
- Choodo (ivory bangles — now replaced with acrylic or plastic, red and white) — worn as part of the wedding ensemble
- Gold jewelry and other ornaments
- Nath (nose ring) and paayals (silver anklets)
- Silver toe rings
- Sweets and dry fruits — all beautifully presented in decorative trousseau trays

The mama will also pass out items to the guests — various things like nuts, British candy, or in modern times bags, snacks, and namkeen.

The mama's gifts hold deep significance — historically, daughters had no legal inheritance rights, so the mama's gifts represented the maternal family's share of wealth and lifelong support.

Note: Most rituals during the Vidhi are performed by the paternal side of the family. The maternal side plays its most central role during the Mameru ceremony.

**What you need:** Choodo, panetar saree, gold jewelry, sweets, dry fruits, decorated trousseau trays/basket, gifts to pass out to guests

---

### Varadh (Gotaido / Gotedo)

Varadh — also known as Gotaido or Gotedo — is a traditional pre-wedding ceremony that takes place after the Grah Shanti on Vidhi Day. In Gujarati weddings, Varadh is a procession where female family members carry embellished pots, symbolically inviting ancestors and the Kuldevi and seeking their blessings.

Women from the family — especially daughters-in-law such as mami and kaki, along with close cousins — carry beautifully decorated ghadas (clay pots) on their heads. While clay pots were used in the past, many families now use beautifully decorated lightweight symbolic pots. These pots vary in size — closer or senior family daughters-in-law like mami and kaki carry the larger, more elaborately decorated pots, while younger or more distant family members carry smaller ones. The group walks in a procession together.

After the procession returns, the women do a couple of rounds of garba for fun. They are then fed something sweet by the hosts — usually the bride's parents. They are also given a small gift, such as an envelope of money or gold, as a token of appreciation and blessing.

---

### Sangeet (Garba & Dandiya Raas Night / Sanji)

Garba and Sangeet are typically the same event. This is a fun-filled evening that highlights any Gujarati wedding. Families combine the Garba night for both sides to celebrate the would-be couple together.

It is an informal event where you decide the flow and itinerary depending on your interests. It could include:
- Traditional Gujarati Garba-Raas dancing
- Dance performances and choreographed routines by friends and family
- A DJ playing garba songs or open dance floor Bollywood music

Depending on the guest count, this event can take place at a banquet hall, temple hall, or any place that accommodates your plan.

**What guests wear:** Women wear the chaniya choli — a long, flared, brightly colored skirt, short top, and long odhni (veil) embellished with embroidery. Men wear kurta pyjamas. The traditional chaniya choli / kurta dress code makes for color-filled and vibrant photos.

**How garba and dandiya raas works:** The women and men form a circle to dance the graceful garba. Later, energetic dandiya raas is danced in concentric circles with dandiya batons (wooden sticks painted in bright colors) connecting to the dancers opposite, while the music revs up the tempo. A murti (idol) is typically placed in the center. There are also fun Gujarati songs like Sanedo that can be played depending on the crowd.

**Food at Sangeet/Garba Night:** Fun street-style food with stations of different items — often fusion. Popular options include Pav Bhaji stations, pizza stations, noodle stations, ice gola stations, and other creative choices. Dinner is usually chaat stations set up around the room and open for most of the night. Families can get very creative.

**What you need:** DJ, dandiya sticks, murti in center

---

## WEDDING DAY MUSIC (Lagan Geets)

Music is a very important part of Gujarati wedding ceremonies. Special songs called lagan geets are sung during the wedding period. In smaller events, the aunties and bas (grandmothers) will sing these. In bigger events like the wedding ceremony, a DJ will typically play them. You can also hire singers to sing these geets based on your budget.

Traditional lagan geets for each ceremony:
- **Kanku Chhanti Kankotri Mokali** — sung during the Lagan Lakhvanu (invitation) ceremony
- **Pratham Pahela Samariye** — sung at the beginning of Gujarati wedding rituals like the vidhi or wedding puja; a traditional bhajan asking everyone to first remember and pray to Lord Ganesha before any auspicious ceremony starts
- **Pithi Pili Cholo Re** — sung while applying the pithi
- **Aavi Rudi Ambaliya Ni** — sung during the Grah Shanti
- **Mandvada Ma** — sung during the Mameru
- **Mangalashtak** — sung right before the antarpat lifts and the bride and groom see each other for the first time
- **Pahelu Re Pahelu** — sung during the pheras
- **Dhol Dhamkya Ne Var Vahu** — sung during the Hast Melap
- **Akhanda Saubhagya** — sung during the Saubhagyavanti blessing
- **Lado Ladi Jame Re Kansar** — sung after the tying of the Mangalsutra and application of Sindoor; the bride's mom feeds the bride and groom kansar or something sweet — their first meal together in their new life
- **Joote Lelo Paise De Do** — sung when the bride's sisters and friends steal the groom's shoes (Joota Chupai)
- **Vidai songs** — Babul Ki Duayen Leti Ja, Mehlon Ka Raja Mila, and many emotional options
- **Baarat** — all Bollywood modern fusion songs for the groom and his family/friends to dance to

Newer Hindi Bollywood songs are also typically played throughout the wedding events.

---

## THE WEDDING DAY

### Varghodo (Baarat / Groom's Procession)

On the evening of the wedding, the groom wears traditional attire:
- Groom's wedding sherwani outfit
- Pagadi (groom's hat/turban)
- Mojris (hand-made traditional shoes)
- He may choose to wear a long pearl and gold necklace
- Flower garland
- Can carry a flower bouquet or kalgi

"Var ugla vano samay" — this literally means "time for the bridegroom to leave for the wedding"!

The priest gives the groom's sister a small bowl filled with coins and wrapped with cloth on which a Hindu swastika has been drawn. She rattles this over her brother's head to ward off the evil eye — and to warn her brother that even though he is about to get married, he must not forget his sister! For this she receives a gift from her brother. The groom's father's sister-in-law garlands him when it is time to leave and gives him a cluster of flowers.

According to tradition, he mounts a richly decorated white horse to travel to the wedding venue. Nobility use elephants, and some prefer a horse-drawn carriage. Today, modern grooms sometimes opt for a fancy supercar — a Lamborghini, Ferrari, or other exotic sports car — rather than a white horse. Varghodo is usually called baarat and takes place outside the wedding venue.

The groom may have a first look with the bride in the morning before the baraat begins.

**What you need:** Sherwani outfit, mojhris, pagdi, bowl and coins wrapped in fabric, gift for sister, live wedding band or mobile DJ, decorated horse/carriage or decorated supercar

---

### Jaan Agman / Var Ponke (Welcoming the Groom)

The groom and the baraat arrive at the venue with the band announcing their arrival. The bride's mother receives the groom. She wears a modh (headpiece woven with beads) and has a khes (cotton stole) draped over one shoulder, along with a decorative plate/samput, kumkum (vermilion), rice grains, water, and a diya (lamp).

Before he can enter the premises, the groom is made to step onto a bajat (low stool). The bride's mother performs a brief aarti, puts a tikka of kumkum and rice on his forehead, and exchanges the flowers he carries for a decorated coconut. She feeds him sweets.

**Playful tradition:** In a playful moment, the bride's mother attempts to pull the groom's nose — reminding him to be humble as he has come to ask for their daughter's hand. The groom in return tries to escape the nose-pulling, making this moment joyful.

The bride's mother sets the two clay pots with rice on the ground before the groom. He steps down from the bajat onto the pots, smashing them, and then enters. His sisters escort him to the mandva (the wedding canopy), which has been beautifully decorated with marigold and jasmine flowers. He is seated inside the mandva to the left of the bride's parents, accompanied by his brother or a friend.

In some regions, before the groom is led to the mandap, the bride will come and put a garland on the groom — although many modern brides skip this step as they would like their guests to see them for the first time on the aisle.

**What you need:** Cotton khes, kumkum, bajat, 2 clay pots, coconuts, rice, items for aarti, decorative plate/samput

---

### Bride's Attire

A Gujarati bride traditionally wears the bridal sari called the panetar — a white silk sari with red and green border presented to her by her mama (mother's brother). He also gifts her a nath (nose ring) and paayals (silver anklets), silver toe rings, and the choodo (red-and-white ivory wedding bangles — now often acrylic). In modern times, many brides opt for a styled red lehenga instead.

Along with gold bangles and the ivory bangles, she wears green glass bangles: three on one wrist, two on the other — always an odd number. The green glass bangles are a symbol of fertility.

The rest of the bridal jewelry includes:
- Bandhi (gold band with pendant worn on the head) or tikka (pendant worn on forehead)
- Necklaces
- Earrings
- Paancha saankra (five rings connected to chains attached at the wrists)
- Kapoor na gajra — a unique and aromatic necklace made of real camphor beads with red, green, and gold thread wound intricately around them

---

### Joota Chupai (Shoe Hiding)

As the groom removes his shoes to enter the mandap, the bride's sisters, bridesmaids, and female friends steal them — in spite of resistance from his friends. He has to forget about the shoes for now and address himself to more important things! The negotiations to get the shoes back happen later during the bridal send-off, and the girls show no mercy.

The song **"Joote Lelo Paise De Do"** is usually played during this tradition to match the energy.

---

### Madhuparka / Vaarpooja

The bride's mother leads the groom to the mandap and washes his feet with milk and water. She then offers him Panchamrut — a sacred mixture of milk, yoghurt, sugar, ghee, and honey.

---

### Antarpat

An antarpat (or antarpatta) is a sacred, decorative cloth held as a partition between the bride and groom once the bride enters the mandap. It temporarily prevents the couple from seeing each other until specific mantras are recited, building anticipation and symbolizing the union of their souls. It is typically held by the bride's brothers, sisters, or close family members.

---

### Jaimala / Varmala (Exchange of Garlands)

The bride's mama (maternal uncle) escorts her to the mandva — or she may walk under a decorative canopy (phoolon ki chadar) held by her brothers or cousins, or in some traditions be carried in a decorated palanquin (doli) by her male relatives. The groom enters with his groomsmen and family to an upbeat song signifying his arrival.

After a few minutes into the ceremony, the priest announces the bride's entrance. The bride garlands the groom, and he reciprocates, signaling their willingness to marry. She now sits facing him. The priest puts a tikka of kumkum and rice on both their foreheads and blesses them.

The song **Mangalashtak** is played right before the antarpat lifts and the bride and groom see each other for the first time.

**What you need:** Garlands, rice confetti, kumkum

---

### Kanyadaan (Kanyadan) / Hast Melap

Like in most Hindu weddings, a Gujarati wedding follows a Kanyadaan tradition where the father of the bride gives away his daughter to the groom.

The bride's parents apply tikkas on the couple, and the bride's father performs the kanyadaan. He first washes the groom's feet. With folded hands, he places his daughter's right hand in the right hand of the groom, both reaching out over the unlit sacred fire below. With this gesture the father of the bride symbolizes this promise: "I offer you this most precious gift of my daughter to take as your own, to cherish and to protect."

**Hast Melap** is translated from Sanskrit to mean "the joining of the hands." The couple is united with the union of their hands in the presence of Agni Devta (the Lord of Fire), represented by the sacred fire lit during the Vivaah Homa. To strengthen their bond, the groom's sister or mother ties the ends of the scarves worn by the bride and groom together — signifying their unity and literally "tying the knot." The couple vows to treat others with respect, love, compassion, and sympathy, and pledges to show goodwill and affection to each other's families.

The bride's mother then connects the couple by tying the nada chari (a length of sacred red thread) across them and looping it like a garland over their hands. They are then made to sit together. The nada chari is taken off their hands and placed around the bride's neck. The parents then leave the mandap. Family elders form a circle around the couple to witness and bless the transition.

The song **"Dhol Dhamkya Ne Var Vahu"** is played during the Hast Melap.

**What you need:** Puja items, nada chari, kumkum

---

### Mangal Pheras (Angi Fera)

The pujari lights the sacred fire amidst Vedic chants and the mangal pheras begin. The couple circles the fire four times — not seven as in many other Hindu traditions. Each of the four circles represents one of the foundational goals of human life in Hindu philosophy:

1. **Dharma** — Duty and righteousness
2. **Artha** — Prosperity and providing for the family
3. **Kama** — Love, passion, and happiness
4. **Moksha** — Spiritual liberation and unity

During the first three rounds, the groom leads the bride. During the fourth round, the bride leads the groom. Each time, different groups of the bride's brother figures put flowers and vermilion in her right hand and place it in the groom's right hand, and they consign these to the fire. The group of brothers receives a gift after each phera. As the pheras are happening, family will gather around the mandap and throw flower petals. After the last phera, there is a slight tussle to see who gets back to the seat first — the one who returns first will have the upper hand in the marriage!

At the end of each phera, the groom receives a gift of gold or money from his father-in-law (called posh bharave). After the four rounds, the bride is asked to sit on the left side of the groom to signify that she is now closer to his heart.

The song **"Pahelu Re Pahelu"** is played during the pheras.

**What you need:** Flower petals, gifts of gold or money for the groom (posh bharave), kumkum, gifts for brothers

---

### Saptapadi (Seven Steps)

The Saptapadi ritual is one of the most crucial in a Gujarati wedding. Directly following the pheras, the bride and groom take seven steps together around the sacred fire while the groom helps the bride touch seven betel nuts with her right toe with each step. With each step a vow is taken:

1. With this 1st step — be the giver of food
2. With this 2nd step — be my source of strength
3. With this 3rd step — be my prosperity
4. With this 4th step — be my source of happiness
5. With this 5th step — be the mother of our children
6. With this 6th step — be my companion in all seasons
7. With this 7th step — be my eternal friend

**Playful tradition during Saptapadi:** The bride's brothers or close male cousins may jokingly hold or pull the groom's toe, symbolically "stopping" him from proceeding. This is a lighthearted tradition (not a formal requirement in all families) done in a teasing spirit that reflects the bonding between the two families. The groom typically offers a small cash gift as a "ransom" before the wedding continues.

---

### Sindoor, Mangalsutra, Saubhagyavati Bhava, and Kansar

The next four steps in a Gujarati wedding ceremony:

1. **Sindoor** — The groom applies vermilion (sindoor) in the middle parting of the bride's hair. This marks the bride's first symbol as a married woman.

2. **Mangalsutra** — The groom ties the Mangalsutra (necklace of black beads on red thread) around the bride's neck.

3. **Saubhagyavati Bhava** — Seven married women are invited to bless the just-married couple. When the couple seeks their blessings, each woman whispers the phrase "Saubhagyavati Bhava" to the bride — meaning "may your marital life flourish with eternal glory." The groom's mother gives each lady a gift of steel or silver. The song **"Akhanda Saubhagya"** is played during this blessing. Playful tradition: ladies will try to playfully pull the groom's nose, and he is able to hold onto their sari to stop them.

4. **Kansar** — The newly married couple feeds sweets to each other. The bride's mom feeds the bride and groom kansar or something sweet — their first meal together in their new life. The song **"Lado Ladi Jame Re Kansar"** is played during the Kansar feeding.

---

### Chhedo Pakadyo (Pakadyo Chhedo)

A rather funny Gujarati wedding custom — the groom catches the pallav (end) of his mother-in-law's sari and asks for more gifts! Everyone then fills her sari pallav with cash and presents, which are later given to the groom's family.

---

## POST-WEDDING CEREMONIES

### Bidaai / Shoe Negotiations / Vadava Vanu

The time has come for the hilarious negotiations the groom and his friends must engage in to "buy" his shoes back. The girls who stole the shoes show no mercy and stand their ground until they extract the maximum possible in cash or gifts.

The bride and groom leave together at the mahurat (auspicious time) determined by the priests — even if it means waiting late into the night, or even a day or two.

The bride bids a tearful farewell to her parents, family, and friends. She throws rice grains from behind her head toward the house she is leaving — symbolizing repayment of her debts and gratitude to her family. The priest performs a small puja for the car and puts a tikka on the hood. The bride's mother breaks a coconut in front of the car, invoking blessings for a safe journey. The car must have five people — the bride's brother usually escorts her to her new home.

Popular Vidai songs: Babul Ki Duayen Leti Ja, Mehlon Ka Raja Mila, and many other emotional options.

**What you need:** Basic puja items, coconut, envelopes with cash for shoe negotiations

---

### Var Ghodyu Pokvanu Che / Griha Pravesh / Ghar Nu Laxmi (Welcoming the Bride Into Her New Home)

The groom's mother and sisters, who left the wedding ahead of the couple, welcome them home. The bride is welcomed as Ghar Nu Laxmi — the embodiment of Goddess Lakshmi, symbolizing prosperity and abundance.

The groom's mother performs a small aarti, puts a tikka on their foreheads, and places something sweet in their mouths before they enter. She gifts the bride a piece of jewelry.

The bride enters the house by pushing over a pot filled with grain right at the doorstep — considered an auspicious custom believed to bring good luck and prosperity. In some traditions, the bride leaves footprints dipped in alta or kumkum-mixed water, symbolizing the arrival of Lakshmi and the good fortune she brings.

The couple is blessed by the family and receives gifts from them.

**Playful tradition:** In some families, the groom's mother may playfully pull or touch the groom's nose in a teasing and affectionate way — adding humor and warmth to the moment of welcoming the bride.

**What you need:** Items for the aarti, gifts for the couple, jewelry for the bride, grain-filled pot, kumkum

---

### Aeki Beki

Aeki Beki is a joyful game played by the newly-wed couple. A large vessel is filled with milk, vermilion, water, coins, and a gold ring. With only their right hands, the couple must find the ring within the vessel. The family gives a token cash or a gift to the winner. Legend says the winner will be the more dominant partner in the marriage!

---

### The Reception

The reception is an event borrowed from the West — it can be as simple or as elaborate as desired. It is the most flexible and least ritual-driven event of the entire celebration, with no religious requirements, focused mainly on celebration, entertainment, and socializing.

Most receptions follow a format similar to a Western-style wedding:

1. **Cocktail Hour** — Guests mingle, enjoy appetizers and cocktails. The bride, groom, bridal party, and immediate family take photos inside. People typically go home or to a hotel between the wedding ceremony and the cocktail hour to change into their reception outfits.
2. **Entrances** — Parents and siblings enter first to their favorite songs, followed by bridesmaids and groomsmen, then the grand entrance of the bride and groom to an abundance of cheers
3. **First dance** — Sometimes a traditional slow waltz, sometimes a choreographed dance that starts slow and cuts into an upbeat song
4. **Cake cutting** — A simple, sweet love song is played as the couple cuts and feeds each other cake
5. **Father/Daughter and Mother/Son dances** — A heartwarming moment with songs that describe the relationship
6. **Speeches** — Given by bridal party members and parents
7. **Performances** — Family and friends perform choreographed dances or skits reenacting the couple's love story
8. **Dinner** — Served buffet or station style. Soft music, uplights, and sometimes a slideshow of childhood photos or a same-day edit video from the videographer
9. **Dancing** — A mix of Bollywood, Punjabi, and popular Western/top 40 music. Everyone from young to old has a great time

Food at the reception is flexible — it can range from traditional Gujarati cuisine to Punjabi food to international fusion menus, depending on the family.

Alcohol at Gujarati wedding receptions varies. In more traditional Jain or Swaminarayan households, alcohol is not served. In other families, a licensed bar or designated serving area may be included. This is entirely up to the family.

**What you need:** Venue, caterer, DJ, drinks

---

## WEDDING FOOD GUIDE

- **Pithi / Vidhi Day / Grah Shanti:** Traditional Gujarati food — typically a full traditional Gujarati lunch and dinner
- **Sangeet / Garba Night:** Fun street-style and fusion food stations — Pav Bhaji, pizza, noodle stations, ice gola, chaat stations, and other creative options
- **Wedding Ceremony Meal:** Traditional Gujarati food; always vegetarian
- **Reception:** Flexible — Punjabi food, fusion cuisine, international menus, or anything the family prefers

Gujarati weddings are mainly vegetarian, especially for the wedding meal and the Pithi day meal. If non-vegetarian food is served, it is most commonly at the reception or Sangeet night where the food concept is already more flexible. This depends entirely on the family and their preferences.

---

## GIFTS AND GIFTING ETIQUETTE

Almost everything at a Gujarati wedding is given as cash or gold — box gifts are usually not accepted. Close family and friends typically give gold; others give cash in envelopes. This applies across all ceremonies including the Pithi, wedding, and reception.

When guests come up to apply pithi to the bride or groom, they typically hand over an envelope with money — close family and friends may give gold instead.

---

## COMMUNITY STYLES

### Patel (Leuva & Kadva Patel) Weddings

Patel weddings are often the most elaborate and high-energy in modern settings, especially in the diaspora.

Typical traits:
- Very large guest lists and multi-day celebrations
- Extremely energetic Pithi and Garba nights
- Strong emphasis on music, dance, and social celebration
- Pithi is often very playful and chaotic with friends and cousins
- Mameru is a major and very visible ritual from the bride's maternal side
- Lavish décor and large-scale production-style weddings are common
- The bride and groom receive large amounts of clothing, jewelry, and cash as gifts
- After almost every ceremony — and after each parikrama — the groom's palms are crossed with gold

Overall vibe: festive, loud, highly social, and very celebration-forward.

---

### Brahmin Gujarati Weddings

Brahmin weddings tend to be more ritual-focused and traditionally structured.

Typical traits:
- Strong emphasis on Vedic rituals and priest-led ceremonies
- More structured mandap rituals and precise timing
- Simpler, more traditional approach to décor and events compared to Patel weddings
- Food is often strictly vegetarian and more traditional Gujarati Brahmin cuisine
- Less emphasis on large-scale partying; more focus on spiritual meaning
- Ceremonies like Grah Shanti and wedding mandap rituals are very detailed and time-specific

Overall vibe: traditional, spiritual, ceremony-centered, and ritual-heavy.

---

### Jain Gujarati Weddings

Jain weddings are similar in structure to other Gujarati weddings but with specific religious preferences.

Typical traits:
- Strict vegetarian food (no root vegetables in many Jain households)
- Emphasis on simplicity and non-extravagance in some families
- Rituals are still similar but often slightly more minimalistic depending on sect
- Religious ceremonies may be shorter or simplified
- Strong focus on family blessings and cultural continuity
- Alcohol is typically not served at the reception

Overall vibe: simple to moderately elaborate, with strong religious dietary and ritual guidelines.

---

## COMMON QUESTIONS

### How many pheras are in a Gujarati wedding?
A traditional Gujarati wedding has four pheras (Mangal Pheras) around the sacred fire — not seven as in many other Hindu traditions. The four circles represent Dharma (duty), Artha (prosperity), Kama (love and happiness), and Moksha (spiritual liberation). During the first three rounds the groom leads the bride, and during the fourth round the bride leads the groom. Directly following the pheras, the couple completes the Saptapadi — seven steps together where the groom helps the bride touch seven betel nuts with her right toe.

### Why do the bride's side steal the groom's shoes?
This tradition is called Joota Chupai (meaning "hiding the shoes"). As the groom removes his shoes to enter the ceremony, the bride's sisters and bridesmaids steal them and hold them ransom until the groom's side pays cash or gifts to get them back. The negotiations happen during the bridal send-off and are famously hilarious. The song "Joote Lelo Paise De Do" is played during this tradition.

### What is the cloth held in front of the couple when the bride enters?
It is called the antarpat (or antarpatta) — a sacred, decorative cloth held as a partition between the bride and groom. It temporarily prevents them from seeing each other until specific mantras are recited, building anticipation. It is typically held by the bride's brothers, sisters, or close family. The song Mangalashtak is played right before the antarpat lifts and the bride and groom see each other for the first time.

### Who walks the bride down the aisle?
The bride is typically escorted to the mandap by her mama (maternal uncle). In some traditions, she may walk under a decorative canopy (phoolon ki chadar) held by her brothers or cousins, or be carried in a decorated palanquin (doli) by her male relatives. The order of the procession is typically: flower girls first, followed by bridesmaids, then the bride with her mama or parents.

### What is the Pithi ceremony?
Pithi is a pre-wedding beautification and purification ritual where a paste of turmeric, sandalwood, herbs, and rosewater is applied to the bride and groom's skin. It is held on Vidhi Day — typically the day before the wedding, alongside the Mandva Mahurat and Grah Shanti. Modern Pithis are often very playful and energetic, with water guns, music, and dancing. Many couples now do a joint Pithi together.

### What does the groom wear?
The groom traditionally wears a sherwani outfit, a pagadi (turban/hat), mojris (handmade traditional shoes), and may wear a long pearl and gold necklace and flower garland.

### What does the bride wear?
The bride traditionally wears a panetar saree (white silk with red and green border, gifted by her mama), choodo (red and white ivory bangles), green glass bangles in an odd number, a nath (nose ring), paayals (silver anklets), silver toe rings, a kapoor na gajra (camphor bead necklace with red, green, and gold thread), a bandhi or tikka (forehead jewelry), necklaces, earrings, and paancha saankra. In modern times, many brides opt for a red lehenga instead.

### What is Kanyadaan?
Kanyadaan is the ceremony where the bride's father formally gives his daughter to the groom. He washes the groom's feet, then places his daughter's right hand into the groom's right hand over the unlit sacred fire, symbolizing the transfer of her care and protection with the promise to cherish and protect her.

### What is Hast Melap?
Hast Melap means "the joining of the hands" in Sanskrit. It is often grouped together with the Kanyadaan ceremony. The bride and groom are united with the union of their hands in the presence of Agni Devta (Lord of Fire). The groom's sister or mother ties the ends of the scarves worn by the bride and groom together — literally "tying the knot." The couple vows to treat others with respect, love, compassion, and sympathy, and to show goodwill to each other's families.

### What is the Mameru ceremony?
Mameru is the ceremony where the bride's maternal uncle (mama) arrives with gifts including the panetar saree, choodo bangles, gold jewelry, nath, paayals, sweets, and dry fruits — all presented in decorated trousseau trays. All members of the maternal side gather and parade into the ceremony with the gifts. It represents the maternal family's love and lifelong support for the bride and is an eternal bond between brother and sister.

### What is Grah Shanti?
Grah Shanti (also called Griha Shanti, Saatak in Surat, or Navagraha Shanti Puja) is a puja held on Vidhi Day to seek harmony among all nine planets and remove any astrological obstacles from the couple's married life. A Hindu priest leads the ceremony, chanting mantras and making offerings to a sacred fire.

### What is the Saptapadi?
Saptapadi means "seven steps." After the four mangal pheras, the bride and groom take seven steps together around the sacred fire, each accompanied by a sacred vow — to nourish, strengthen, prosper, find happiness, have children, be companions in all seasons, and be eternal friends.

### What gifts do you bring to a Gujarati wedding?
Almost everything at a Gujarati wedding is gifted as cash or gold — box gifts are usually not accepted. Close family and friends give gold; others give cash in envelopes. This applies across all ceremonies including the Pithi, wedding, and reception.

### What do guests wear to a Gujarati wedding?
- **Pithi/Vidhi Day:** Many guests dress in yellow or coordinated colors to match the festive haldi theme
- **Sangeet/Garba Night:** Chaniya choli for women (bright, flared skirt with embroidered odhni), kurta pyjama for men
- **Wedding ceremony:** Traditional Indian formal wear — saris, lehengas, or salwar kameez for women; sherwanis or kurta pyjamas for men
- **Reception:** Luxurious Indian or Western formal wear — dress to impress

### Can non-Indian or non-Hindu guests attend?
Absolutely yes. Indian weddings are open to all — they are celebrations meant to be shared with everyone close to the couple, regardless of background or religion. There are no restrictions. The main guideline for non-Indian guests is to wear colorful clothing — bright and festive colors are always appropriate and welcome. Avoid white (traditionally associated with mourning) and aim for something colorful and celebratory.

### How long does a Gujarati wedding last?
Modern Gujarati weddings typically last three to four days over a long weekend, though the exact schedule varies by family. Vidhi Day (Pithi, Mandva Mahurat, Grah Shanti, Mameru, Varadh) is typically Day 1; Mehendi and Garba are often Day 2; followed by the wedding ceremony Day 3 and the reception Day 4.

### What time do events start?
Timing is flexible and up to the couple and their families. An important factor is that ceremony times are often chosen to be at an auspicious muhurat (time) — your pandit (priest) will help you navigate this. Contact your pandit early in the planning process to determine the right timing for each ceremony.

### How long does the mandap ceremony take?
This varies and is much more flexible in modern times than it used to be. The length depends on you, your pandit, your time constraints, and how detailed you want the rituals to be. Your pandit can adjust the pace and scope of the ceremony. Discuss your preferences early on.

### Is food at a Gujarati wedding vegetarian?
Gujarati weddings are mainly vegetarian, especially for the wedding ceremony meal and the Pithi/Vidhi day meal. However, other events are more flexible depending on the family. If non-vegetarian food is served, it is most commonly at the reception or Sangeet/Garba night. This depends entirely on the family and their preferences.

### How formal or elaborate is the Mehendi event?
It depends entirely on the family, budget, and vision. It can be a low-key, chill event at home where family gathers, applies mehndi, and hangs out — or it can be a bigger event with music, dancing, and a DJ. Both are completely valid. Families can make it as simple or elaborate as they choose.

### What is the Kankotri ceremony?
Kankotri refers to both the Gujarati wedding invitation and the ceremony around sending it. Before invitations are distributed, families perform a small puja offering the kankotri first to Lord Ganesha and optionally to the family Kuldevi. Invitations may then be hand-delivered house to house by family members. It marks the official beginning of the wedding journey.

### What is the Varadh / Gotaido ceremony?
Varadh (also called Gotaido or Gotedo) is a procession ceremony that takes place after the Grah Shanti on Vidhi Day. Female family members carry beautifully decorated pots (ghadas) on their heads in a procession, symbolically inviting ancestors and the Kuldevi and seeking their blessings. After the procession, the women do garba, are fed something sweet by the hosts, and receive a small gift such as an envelope of money or gold.

---

## GLOSSARY OF KEY TERMS

### Kuldevi
Kuldevi is the protective family deity of the paternal lineage in Hindu families. She is not a general goddess but one specifically tied to a particular family line, passed down through generations on the father's side.

The core belief is that the Kuldevi watches over the entire lineage — not just individuals — and protects the family through major life events, challenges, and transitions including health, stability, prosperity, and safety across generations. She is considered the spiritual anchor of the family tree, ensuring the family line continues smoothly and remains blessed over time.

Because of this deep connection to the family line, Kuldevi is included in important life rituals such as weddings, births, and naming ceremonies. During weddings, families perform prayers or offerings to the Kuldevi as a way of acknowledging their ancestors and asking for blessings as a new generation begins a new chapter. She is believed to remove obstacles during these major milestones.

In Gujarati wedding rituals, references to the Kuldevi often appear alongside Lord Ganesha during ceremonies like the Kankotri, Grah Shanti, Varadh, and other vidhis performed by the paternal side of the family.

### Shagun
Shagun is a token amount of money given as a blessing during ceremonies and auspicious occasions. It is symbolic — representing goodwill, love, and blessings from the giver, not meant to be a large gift. Shagun is given throughout Gujarati wedding events by elders and family members to the couple and sometimes to other participants in rituals.

### Najar / Nazar (Evil Eye)
Najar (also spelled nazar) refers to the evil eye — the belief that envy, admiration, or ill intent from others can bring bad luck or harm, especially during joyful moments like a wedding. Many protective rituals throughout a Gujarati wedding guard against najar, including the bride's mother hiding clay pots under her stole during the groom's welcome, the groom's sister rattling coins over his head before the baraat, and various uses of kumkum, coconut, and red thread throughout ceremonies.

### Bajat / Bajot
A bajat (also called bajot or bajoth) is a small, flat, low wooden stool used throughout Gujarati wedding ceremonies. The bride, groom, and sometimes parents sit or stand on the bajat during key ritual moments as a mark of honor and ritual significance.

### Pandit / Pujari (Hindu Priest)
A pandit (also called pujari or maharaj) is the Hindu priest who officiates and guides the wedding ceremonies. The pandit chants Sanskrit mantras, oversees the sacred fire (homa), determines auspicious timings (muhurat) for ceremonies, and guides the couple and family through each ritual.

When planning a Gujarati wedding, contact your pandit early. They will help you choose auspicious dates and times for each ceremony, decide which rituals to include, and determine the length and pace of the ceremony based on your time constraints. Pandits do not need to speak Gujarati — many conduct ceremonies in Sanskrit with explanations in English or Gujarati depending on the family's preference.

### Nada Chari (Sacred Red Thread)
Nada chari is a sacred red thread used throughout Gujarati wedding ceremonies. It is tied around wrists, used to wrap items like coconuts and pouches, and used to bind objects together as part of ritual consecration. It symbolizes auspiciousness, protection, and the sacred nature of the ceremony.

### Shriphal / Coconut
The coconut (shriphal) holds great sacred significance in Hindu ceremonies. It represents purity, prosperity, and the divine. The three eyes of the coconut are said to be the three eyes of Lord Shiva. Breaking a coconut at the start of an event or journey is considered auspicious and a symbol of removing obstacles. Coconuts appear in almost every Gujarati wedding ceremony.

### Kumkum
Kumkum is a red vermilion powder used throughout Hindu ceremonies. It is applied as a tikka (dot) on the forehead as a mark of blessing and auspiciousness. During Gujarati weddings, kumkum is used in almost every ritual.

### Modh
A modh is a decorative headpiece woven with beads, worn by the bride's mother during key ceremonies such as the Grah Shanti and the welcoming of the groom. It is a traditional adornment specific to the mother's ceremonial role.

### Patla / Bajat
A patla (also called bajat or bajot) is a flat, low wooden seat used during ceremonies. The couple and parents sit on patlas during key ritual moments as a mark of honor and ceremony.

### Panchamrut
Panchamrut is a sacred mixture of five ingredients: milk, yoghurt, sugar, ghee (clarified butter), and honey. It is offered to the groom during the Madhuparka ceremony as a sacred welcoming offering. "Pancha" means five and "amrut" means nectar.

### Homa / Havan
The sacred fire used in Hindu wedding ceremonies. It is the central element around which the mangal pheras and saptapadi are performed. The fire is believed to be a divine witness to the wedding vows.

### Mandap / Mandva
The decorated wedding canopy under which the wedding ceremony takes place. It is traditionally decorated with marigold and jasmine flowers. Setting up the mandap is the purpose of the Mandva Mahurat ceremony.

### Akhand Sowbhagyavati
A phrase and blessing meaning "a woman who enjoys a lifelong, unbroken marriage." During the Pithi, the bride wears red glass bangles symbolic of akhand sowbhagyavati. After the Saptapadi, married female relatives whisper "Akhand sowbhagyavati" to the bride as a blessing.

### Lagan Geets
Special traditional songs sung specifically during Gujarati wedding ceremonies and events. In smaller, more intimate events, the aunties and bas (grandmothers) sing these songs. In larger events, a DJ plays them. Singers can also be hired specifically to sing lagan geets.

### Muhurat
An auspicious time determined by a pandit (priest) or astrologer based on planetary positions and the couple's birth charts. Muhurats are chosen for key moments throughout the wedding — including ceremony start times, the time the bride departs from her home, and more. Contacting your pandit early helps navigate the muhurat selection.

### Panetar
The traditional Gujarati bridal saree — white silk with a red and green border. It is gifted to the bride by her mama (maternal uncle) during the Mameru ceremony and worn during the wedding ceremony. The white, red, and green colors are deeply symbolic and iconic in Gujarati wedding tradition. In modern times, many brides choose a red lehenga instead.

### Choodo
The traditional wedding bangles worn by a Gujarati bride — red and white, traditionally made of ivory and now often made of acrylic or plastic. The choodo is gifted to the bride by her mama during the Mameru ceremony and is a symbol of marriage.

### Kapoor Na Gajra
A unique and aromatic piece of bridal jewelry worn by Gujarati brides — a necklace made of real camphor beads with red, green, and gold thread wound intricately around them. It is specific to Gujarati bridal attire.
`;

function chunkKnowledgeBase(markdown: string): { title: string; content: string }[] {
  const chunks: { title: string; content: string }[] = [];
  
  // Split by ### headers (individual ceremony sections)
  const sections = markdown.split(/(?=###\s)/);
  
  for (const section of sections) {
    const trimmed = section.trim();
    if (!trimmed) continue;
    
    const lines = trimmed.split("\n");
    const firstLine = lines[0].trim();
    
    // Extract title - remove ### prefix
    const title = firstLine.replace(/^###\s+/, "").replace(/^##\s+/, "").replace(/^#\s+/, "").trim();
    const body = lines.slice(1).join("\n").trim();
    
    if (title && body.length > 50) {
      chunks.push({ title, content: `${title}\n\n${body}` });
    }
  }
  
  return chunks;
}

export async function seedKnowledge() {
  try {
    const [{ value: existingCount }] = await db
      .select({ value: count() })
      .from(knowledgeChunks);
    
    if (existingCount > 0) {
      return; // Already seeded
    }
    
    const chunks = chunkKnowledgeBase(KNOWLEDGE_BASE);
    
    if (chunks.length === 0) return;
    
    await db.insert(knowledgeChunks).values(chunks);
    
    console.log(`Seeded ${chunks.length} knowledge chunks`);
  } catch (err) {
    console.error("Failed to seed knowledge base:", err);
  }
}
