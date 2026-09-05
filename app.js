/* =========================================================
   ZAYN MASSAGE & SPA — app.js
   Jezik, navigacija, animacije, before/after slider
   ========================================================= */

(function () {
  "use strict";

  let currentLang = "bs";

  const i18n = {
    bs: {
      "brand.sub": "MASSAGE & SPA",
      "nav.about": "O nama", "nav.services": "Usluge", "nav.gallery": "Galerija", "nav.reviews": "Recenzije", "nav.contact": "Kontakt", "nav.book": "Pošalji upit", "nav.viewAll": "Pogledaj cijelu ponudu",
      "hero.eyebrow": "Ferhadija · Srce Sarajeva",
      "hero.word1": "Trenutak", "hero.word2": "posvećen", "hero.word3": "samo", "hero.word4": "Vama.",
      "hero.sub": "Butik salon za masažu i spa u samom srcu starog Sarajeva —<br> gdje prigušeno svjetlo i tišina rade jednako koliko i naše ruke.",
      "hero.cta1": "Rezerviši termin", "hero.cta2": "Pogledaj ponudu", "hero.scroll": "Skroluj",
      "transform.title": "Ostavite vanjski svijet iza sebe",
      "transform.beforeLabel": "Prije", "transform.before1": "Napetost", "transform.before2": "Stres", "transform.before3": "Umor",
      "transform.afterLabel": "Poslije", "transform.after1": "Opušteno", "transform.after2": "Obnovljeno", "transform.after3": "Uravnoteženo",
      "transform.hint": "Povucite klizač",
      "wa.eyebrow": "Upit", "wa.title": "Pošaljite upit",
      "wa.sub": "Ispunite kratku formu — zatim odaberite WhatsApp ili Viber. Poruka se šalje na naš broj 061 231 251.",
      "wa.lname": "Ime i prezime", "wa.lphone": "Broj telefona", "wa.lservice": "Usluga", "wa.selectPlaceholder": "Odaberite uslugu",
      "wa.ldate": "Željeni datum (opcionalno)", "wa.lnote": "Napišite poruku / upit", "wa.notePlaceholder": "Napišite svoj upit ovdje...", "wa.errNote": "Unesite poruku.",
      "wa.errName": "Unesite ime i prezime.", "wa.errPhone": "Unesite broj telefona.", "wa.errService": "Molimo odaberite uslugu.",
      "wa.submit": "Pošalji upit na WhatsApp", "wa.submitViber": "Pošalji upit putem Vibera",
      "wa.msgIntro": "Zdravo Zayn Massage & Spa!\nŽelim poslati upit:",
      "wa.msgName": "Ime", "wa.msgPhone": "Telefon", "wa.msgService": "Usluga", "wa.msgDate": "Željeni datum", "wa.msgNote": "Poruka",

      "about.tag": "Zayn Lounge", "about.eyebrow": "O nama", "about.quote": "„Opuštanje nije luksuz — to je povratak sebi.“",
      "about.p1": "Zayn Massage & Spa je butik salon smješten na Ferhadiji, u samom srcu Sarajeva. Iza starih zidina krije se prostor u prigušenom, toplom tonu — baršun, mesing i miris eteričnih ulja — stvoren da usporite i predahnete.",
      "about.p2": "Spajamo tradicionalne bosanske tehnike masaže s modernim ritualima opuštanja, uz pažnju posvećenu svakom detalju — od svjetla do tišine.",
      "about.stat1n": "6", "about.stat1l": "Različitih tretmana", "about.stat2n": "100%", "about.stat2l": "Prirodna ulja", "about.stat3n": "365", "about.stat3l": "Dana posvećenosti", "about.stat4n": "60+", "about.stat4l": "Minuta relaksacije",
      "services.eyebrow": "Ponuda", "services.title": "Naš meni tretmana", "services.sub": "Svaki tretman je prilagođen Vašem tempu —<br> birajte trajanje i tehniku koja Vam najviše odgovara danas.",
      "services.g1": "Klasične masaže", "services.g1types": "Relax • Sportska • Medicinska masaža",
      "services.r30.h": "Kratki predah", "services.r30.p": "Kratka, ali učinkovita masaža namijenjena opuštanju i oslobađanju od svakodnevne napetosti. Idealna je kada Vam je potrebno brzo osvježenje tijela, posebno nakon napornog dana, dugog sjedenja ili fizičkog napora.",
      "services.r45.h": "Uravnoteženi tretman", "services.r45.p": "Duži tretman koji omogućava detaljniju masažu i posvećenost područjima u kojima osjećate najveću napetost. Posebno je pogodan za leđa, vrat, ramena i noge, uz izbor tehnike prema Vašim potrebama.",
      "services.r60.h": "Potpuno opuštanje", "services.r60.p": "Sat vremena posvećenih potpunom opuštanju i njezi cijelog tijela. Masaža se prilagođava Vašim željama i potrebama, uz posebnu pažnju na područja koja su opterećena napetošću. Savršen izbor za potpuni predah od svakodnevnog stresa.",
      "services.gFoot": "Masaža stopala",
      "services.foot.h": "Opuštanje i rasterećenje", "services.foot.p": "Posebno namijenjena umornim i opterećenim stopalima. Masaža pomaže u smanjenju osjećaja težine i napetosti, potiče osjećaj bolje cirkulacije i pruža ugodno olakšanje nakon dugog stajanja, hodanja ili svakodnevnog opterećenja. Idealna za trenutke kada Vašim stopalima treba poseban odmor i pažnja.",
      "services.gVip": "VIP tretmani",
      "services.vip.h": "VIP paket", "services.vip.p": "Ekskluzivni tretman osmišljen kao potpuno iskustvo njege i opuštanja. Paket uključuje 60 minuta masaže po Vašem izboru, 15 minuta pilinga lica, masažu lica, umirujuću masku za lice, masažu glave i tjemena te masažu stopala. Nakon tretmana, <strong>sauna je uključena</strong> za dodatni osjećaj relaksacije i potpunog uživanja.",
      "services.harmony.h": "VIP HARMONY paket", "services.harmony.p": "Harmoničan spoj njege kože i dubokog opuštanja. Tretman započinje sa 30 minuta pilinga tijela sa solnim pilingom iz Mrtvog mora, nakon čega slijedi 30 minuta opuštajuće masaže. Nakon masaže, <strong>sauna je uključena</strong>, kako biste tretman završili u potpunom miru i osjećaju lakoće.",
      "services.gHij": "Hidžama",
      "services.hij.h": "Tradicionalno kupiranje", "services.hij.p": "Hidžama je tradicionalna metoda njege koja koristi kontrolisani vakuum na koži i stoljećima se praktikuje kao dio različitih wellness i tradicionalnih pristupa. Tretman je namijenjen onima koji žele prirodan i tradicionalan način opuštanja i osjećaj rasterećenja organizma, uz profesionalan i pažljiv pristup.",
      "services.gBos": "Bosanska masaža",
      "services.bos.h": "Tradicionalni bosanski ritual", "services.bos.p": "Jedinstveni tretman inspirisan tradicionalnim bosanskim načinom njege tijela. Birate tip masaže koji Vam najviše odgovara, a tretman se izvodi toplom vodom i prirodnim kozjim sapunom. Nakon masaže slijedi tuširanje, kako biste završili tretman osjećajem čistoće, svježine i potpunog opuštanja.",
      "quote.text": "Svaki dodir priča svoju priču o miru.", "quote.cite": "Zayn Massage & Spa",
      "reviews.eyebrow": "Recenzije", "reviews.title": "Riječi naših gostiju",
      "reviews.r1": "„Zayn Massage je bez sumnje najbolja masaža u Sarajevu! Profesionalno osoblje, opuštajuća atmosfera i nevjerovatna tehnika. Otišla sam osjećajući se potpuno osvježeno, a čvorovi na leđima su se osjećali znatno bolje. Toplo preporučujem!!!“", "reviews.n1": "Nina O.",
      "reviews.r2": "„Ovo mjesto je nevjerovatno, kao i osoblje, vlasnik je također skroman i profesionalan. Nećete otići nezadovoljni, masaža je bila nevjerovatna, a masažerka se pobrinula da mi je ugodno tokom cijele usluge. Na kraju su nam napravili i bosansku kafu... ovo ne možete dobiti nigdje drugdje...“", "reviews.n2": "Mikky M.",
      "reviews.r3": "„Posjetila sam ovaj salon masaže i mogu reći da sam prezadovoljna uslugom. Prostor je čist, uredan i veoma ugodan, a atmosfera opuštajuća od samog ulaska. Osoblje je ljubazno, profesionalno i posvećeno klijentima☺️“", "reviews.n3": "Nejla M.",
      "reviews.r4": "„ Za svaku preporuku! Profesionalnost, ljubaznost i usluga su iznad svih očekivanja. Nigdje nismo dobili efikasniju i profesionalniju masažu, a bili smo kod bezbroj drugih, i važno je napomenuti da smo imali velikih problema, tako da kada smo otišli više nije bilo bolova, jer su vješte i profesionalne ruke obavile posao. Ništa slično nama nije urađeno sa svim dodatnim aparatima koji su korišteni u svim fizikalnim terapijama na kojima smo do sada bili. Nakon 10 dana, kao novi smo i kao da nikada nismo imali problema s kičmom. Veliko hvala cijelom osoblju i samo tako nastavite. Zlatne ruke Mia, najbolji fizioterapeut ❤️. Veliki pozdrav gospodinu Omaru i hvala mu na profesionalnosti u poslu koji obavlja kao i njegovoj supruzi na velikoj ljubaznosti. Vidimo se uskoro, jer se definitivno isplati putovati više od naših 350 km do vas, riješiti probleme i vratiti se kući kao novi❤️❤️❤️“", "reviews.n4": "Ana O.",
      "reviews.r5": "„Predivno iskustvo od trenutka kada sam ušla u salon do trenutka kada sam izašla. Ambijent je miran, čist i vrlo opuštajući, a terapeuti su izuzetno profesionalni i stručni. Masaža je urađena umjereno, tačno po potrebi, bez žurbe ili improvizacije. Možete osjetiti da znaju šta rade i da im je stalo do klijenta. Nakon tretmana, osjećala sam se lagano i potpuno opušteno. Toplo preporučujem, definitivno ću se vratiti!“", "reviews.n5": "Mill.",
      "reviews.r6": "„Ako dolazite u Sarajevo, obavezno dođite ovdje - imala sam terapeutkinju po imenu Jenni i došla sam s mamom, imala je terapeutkinju po imenu Tera i bili su tako divni, 100% preporučujem! Uspjela sam se opustiti i osjećam se kao da je sav stres koji sam imala nestao. Vrlo su ljubazni i osjećam se opušteno.“", "reviews.n6": "Thanjeela K.",
      "reviews.r7": "„Bilo je nevjerovatno, a djevojke su nas dočekale u toploj atmosferi, zaista vam preporučujem da ovdje zakažete masažu!“", "reviews.n7": "Micaela P.",
      "reviews.r8": "„Veoma sam zadovoljna uslugom. Ambijent je opuštajući, prostor je čist i prijatan, a osoblje profesionalno i ljubazno.Hidzama je bila izuzetno kvalitetna tačno ono što mi je trebalo za opuštanje i otklanjanje napetosti. Topla preporuka svima koji žele da se istinski odmore.Takodjer Omar i djevojke koji rade tu su veoma profesionalni i ljubazni. “", "reviews.n8": "Lejla M.",
      "reviews.showMore": "Prikaži više", "reviews.showLess": "Prikaži manje",
      "booking.eyebrow": "Rezervacija", "booking.title": "Rezervišite svoj termin",
      "booking.sub": "Odaberite uslugu, datum i vrijeme koje Vam odgovara — potvrdu rezervacije šaljemo putem telefona ili emaila.",
      "booking.f1t": "Radno vrijeme", "booking.f1d": "Pon – Sub: 10:00 – 20:00", "booking.f2t": "Lokacija", "booking.f2d": "Ferhadija 24, Sarajevo", "booking.f3t": "Telefon",
      "booking.lservice": "Usluga", "booking.selectPlaceholder": "Odaberite uslugu",
      "booking.opt.r30": "Relax masaža — 30 min (40 KM)", "booking.opt.r45": "Relax masaža — 45 min (55 KM)", "booking.opt.r60": "Relax masaža — 60 min (70 KM)",
      "booking.opt.vip": "VIP masaža — 90 min (120 KM)", "booking.opt.bos": "Bosanska masaža — 60 min (65 KM)", "booking.opt.hij": "Hidžama — 45 min (60 KM)",
      "booking.ldate": "Datum", "booking.ltime": "Vrijeme", "booking.lname": "Ime i prezime", "booking.lphone": "Broj telefona", "booking.lemail": "Email", "booking.lnote": "Napomena (opcionalno)",
      "booking.errService": "Molimo odaberite uslugu.", "booking.errDate": "Molimo odaberite datum.", "booking.errTime": "Molimo odaberite termin.",
      "booking.errName": "Unesite ime i prezime.", "booking.errPhone": "Unesite broj telefona.", "booking.errEmail": "Unesite ispravan email.",
      "booking.submit": "Potvrdi rezervaciju", "booking.thanksTitle": "Hvala Vam!", "booking.thanksText": "Vaša rezervacija je zabilježena. Kontaktirat ćemo Vas uskoro radi potvrde termina.",
      "booking.newBooking": "Nova rezervacija", "booking.sumService": "Usluga", "booking.sumDate": "Datum", "booking.sumTime": "Vrijeme", "booking.sumName": "Ime", "booking.sumTotal": "Cijena", "booking.pickHint": "Odabrano",
      "contact.eyebrow": "Kontakt", "contact.title": "Posjetite nas", "contact.addrT": "Adresa", "contact.addrD": "Ferhadija 24, 71000 Sarajevo — u srcu starog grada",
      "contact.phoneT": "Telefon", "contact.emailT": "Email", "contact.hoursT": "Radno vrijeme", "contact.hoursD": "Pon – Ned: 11:00 – 23:00",
      "footer.desc": "Butik salon za masažu i spa na Ferhadiji, u srcu Sarajeva. Prostor stvoren za usporavanje.",
      "footer.linksT": "Brzi linkovi", "footer.contactT": "Kontakt", "footer.copy": "© 2026 Zayn Massage & Spa. Sva prava zadržana.", "footer.made": "Ferhadija · Sarajevo"
    },

    en: {
      "brand.sub": "MASSAGE & SPA", "nav.about": "About", "nav.services": "Services", "nav.gallery": "Gallery", "nav.reviews": "Reviews", "nav.contact": "Contact", "nav.book": "Send inquiry", "nav.viewAll": "View full menu",
      "hero.eyebrow": "Ferhadija · Heart of Sarajevo", "hero.word1": "A moment", "hero.word2": "devoted", "hero.word3": "only", "hero.word4": "to you.",
      "hero.sub": "A boutique massage & spa salon in the heart of Sarajevo's old town — where dim light and quiet do as much as our hands.",
      "hero.cta1": "Book an appointment", "hero.cta2": "View our menu", "hero.scroll": "Scroll",
      "transform.title": "Leave the outside world behind",
      "transform.beforeLabel": "Before", "transform.before1": "Tension", "transform.before2": "Stress", "transform.before3": "Fatigue",
      "transform.afterLabel": "After", "transform.after1": "Relaxed", "transform.after2": "Restored", "transform.after3": "Rebalanced",
      "transform.hint": "Drag the slider",
      "wa.eyebrow": "Inquiry", "wa.title": "Send an inquiry",
      "wa.sub": "Fill in the short form — then choose WhatsApp or Viber. Your message will be sent to 061 231 251.",
      "wa.lname": "Full name", "wa.lphone": "Phone number", "wa.lservice": "Service", "wa.selectPlaceholder": "Choose a service",
      "wa.ldate": "Preferred date (optional)", "wa.lnote": "Write your message / inquiry", "wa.notePlaceholder": "Write your inquiry here...", "wa.errNote": "Please enter a message.",
      "wa.errName": "Please enter your full name.", "wa.errPhone": "Please enter your phone number.", "wa.errService": "Please choose a service.",
      "wa.submit": "Send via WhatsApp", "wa.submitViber": "Send via Viber",
      "wa.msgIntro": "Hello Zayn Massage & Spa!\nI would like to send an inquiry:",
      "wa.msgName": "Name", "wa.msgPhone": "Phone", "wa.msgService": "Service", "wa.msgDate": "Preferred date", "wa.msgNote": "Message",

      "about.tag": "Zayn Lounge", "about.eyebrow": "About us", "about.quote": "“Relaxation isn't a luxury — it's a return to yourself.”",
      "about.p1": "Zayn Massage & Spa is a boutique salon on Ferhadija, right in the heart of Sarajevo. Behind the old walls is a dim, warm-toned space — velvet, brass and the scent of essential oils — built for slowing down.",
      "about.p2": "We blend traditional Bosnian massage techniques with modern relaxation rituals, with care given to every detail — from the light to the silence.",
      "about.stat1n": "6", "about.stat1l": "Different treatments", "about.stat2n": "100%", "about.stat2l": "Natural oils", "about.stat3n": "365", "about.stat3l": "Days of dedication", "about.stat4n": "60+", "about.stat4l": "Minutes of relaxation",
      "services.eyebrow": "Menu", "services.title": "Our treatment menu", "services.sub": "Every treatment is tailored to your pace —<br> choose the duration and technique that suits you today.",
      "services.g1": "Classic massages", "services.g1types": "Relax • Sports • Medical massage",
      "services.r30.h": "A short break", "services.r30.p": "A short but effective massage for relaxation and release from everyday tension. Ideal when you need a quick refresh — especially after a long day, prolonged sitting, or physical effort.",
      "services.r45.h": "Balanced treatment", "services.r45.p": "A longer treatment that allows a more detailed massage and focus on the areas where you feel the most tension. Especially suited for the back, neck, shoulders and legs, with the technique chosen to match your needs.",
      "services.r60.h": "Complete relaxation", "services.r60.p": "An hour devoted to full-body care and deep relaxation. The massage is adapted to your wishes and needs, with special attention to areas under strain. The perfect choice for a complete break from everyday stress.",
      "services.gFoot": "Foot massage",
      "services.foot.h": "Relief and release", "services.foot.p": "Especially for tired, overworked feet. The massage helps ease heaviness and tension, supports a sense of better circulation, and brings pleasant relief after long standing, walking, or daily strain. Ideal when your feet need rest and care.",
      "services.gVip": "VIP treatments",
      "services.vip.h": "VIP package", "services.vip.p": "An exclusive treatment designed as a full experience of care and relaxation. The package includes 60 minutes of massage of your choice, 15 minutes of facial scrub, a facial massage, a soothing face mask, a head and scalp massage, and a foot massage. After the treatment, <strong>the sauna is included</strong> for an extra sense of relaxation and complete enjoyment.",
      "services.harmony.h": "VIP HARMONY package", "services.harmony.p": "A harmonious blend of skin care and deep relaxation. The treatment begins with 30 minutes of body scrub using Dead Sea salt scrub, followed by 30 minutes of relaxing massage. After the massage, <strong>the sauna is included</strong>, so you finish in complete calm and lightness.",
      "services.gHij": "Hijama",
      "services.hij.h": "Traditional cupping", "services.hij.p": "Hijama is a traditional care method that uses controlled suction on the skin and has been practiced for centuries as part of various wellness and traditional approaches. The treatment is for those who want a natural, traditional way to relax and feel a sense of bodily relief, with a professional and careful approach.",
      "services.gBos": "Bosnian massage",
      "services.bos.h": "Traditional Bosnian ritual", "services.bos.p": "A unique treatment inspired by the traditional Bosnian way of body care. You choose the type of massage that suits you best, and the treatment is performed with warm water and natural goat soap. After the massage comes a shower, so you finish with a feeling of cleanliness, freshness, and complete relaxation.",
      "quote.text": "Every touch tells its own story of peace.", "quote.cite": "Zayn Massage & Spa",
      "reviews.eyebrow": "Reviews", "reviews.title": "What our guests say",
      "reviews.r1": "“Zayn Massage is without a doubt the best massage in Sarajevo! Professional staff, a relaxing atmosphere and incredible technique. I left feeling completely refreshed, and the knots in my back felt significantly better. Highly recommend!!!”", "reviews.n1": "Nina O.",
      "reviews.r2": "“This place is incredible, and so is the staff — the owner is also humble and professional. You won't leave dissatisfied; the massage was amazing, and the masseuse made sure I was comfortable throughout. At the end they even made us Bosnian coffee… you can't get this anywhere else…”", "reviews.n2": "Mikky M.",
      "reviews.r3": "“I visited this massage salon and I can say I'm completely satisfied with the service. The space is clean, tidy and very pleasant, and the atmosphere is relaxing from the moment you walk in. The staff is kind, professional and devoted to clients☺️”", "reviews.n3": "Nejla M.",
      "reviews.r4": "“ Highly recommended! Professionalism, kindness and service are beyond all expectations. Nowhere else have we received a more effective and professional massage — and we've been to countless others. Importantly, we had serious problems, so when we left the pain was gone, because skilled, professional hands did the job. Nothing like this was done for us with all the extra machines used in every physical therapy we've had so far. After 10 days we feel brand new, as if we never had spine issues. Huge thanks to the whole team — keep it up. Golden hands Mia, the best physiotherapist ❤️. Warm regards to Mr. Omar and thanks for his professionalism, and to his wife for her great kindness. See you soon — it's definitely worth travelling more than our 350 km to you, solve the problems, and go home feeling new ❤️❤️❤️”", "reviews.n4": "Ana O.",
      "reviews.r5": "“A wonderful experience from the moment I entered the salon until I left. The ambience is calm, clean and very relaxing, and the therapists are extremely professional and skilled. The massage was done moderately, exactly as needed, without rush or improvisation. You can feel they know what they're doing and that they care about the client. After the treatment I felt light and completely relaxed. Highly recommend — I'll definitely be back!”", "reviews.n5": "Mill.",
      "reviews.r6": "“If you're coming to Sarajevo, you must come here — I had a therapist named Jenni and I came with my mum, who had a therapist named Tera, and they were so lovely, 100% recommend! I managed to relax and it feels like all the stress I had disappeared. They're very kind and I feel relaxed.”", "reviews.n6": "Thanjeela K.",
      "reviews.r7": "“It was incredible, and the girls welcomed us in such a warm atmosphere — I truly recommend booking a massage here!”", "reviews.n7": "Micaela P.",
      "reviews.r8": "“I'm very satisfied with the service. The ambience is relaxing, the space is clean and pleasant, and the staff is professional and kind. The hijama was exceptionally good — exactly what I needed for relaxation and releasing tension. Warm recommendation to everyone who wants a true rest. Also Omar and the girls who work there are very professional and kind.”", "reviews.n8": "Lejla M.",
      "reviews.showMore": "Show more", "reviews.showLess": "Show less",
      "booking.eyebrow": "Booking", "booking.title": "Book your appointment", "booking.sub": "Choose a service, date and time that suits you — we'll confirm your booking by phone or email.",
      "booking.f1t": "Opening hours", "booking.f1d": "Mon – Sat: 10:00 – 20:00", "booking.f2t": "Location", "booking.f2d": "Ferhadija 24, Sarajevo", "booking.f3t": "Phone",
      "booking.lservice": "Service", "booking.selectPlaceholder": "Choose a service",
      "booking.opt.r30": "Relax massage — 30 min (40 KM)", "booking.opt.r45": "Relax massage — 45 min (55 KM)", "booking.opt.r60": "Relax massage — 60 min (70 KM)", "booking.opt.vip": "VIP massage — 90 min (120 KM)", "booking.opt.bos": "Bosnian massage — 60 min (65 KM)", "booking.opt.hij": "Hijama — 45 min (60 KM)",
      "booking.ldate": "Date", "booking.ltime": "Time", "booking.lname": "Full name", "booking.lphone": "Phone number", "booking.lemail": "Email", "booking.lnote": "Note (optional)",
      "booking.errService": "Please choose a service.", "booking.errDate": "Please choose a date.", "booking.errTime": "Please choose a time slot.", "booking.errName": "Please enter your full name.", "booking.errPhone": "Please enter your phone number.", "booking.errEmail": "Please enter a valid email.",
      "booking.submit": "Confirm booking", "booking.thanksTitle": "Thank you!", "booking.thanksText": "Your booking has been recorded. We'll contact you shortly to confirm your appointment.",
      "booking.newBooking": "New booking", "booking.sumService": "Service", "booking.sumDate": "Date", "booking.sumTime": "Time", "booking.sumName": "Name", "booking.sumTotal": "Price", "booking.pickHint": "Selected",
      "contact.eyebrow": "Contact", "contact.title": "Visit us", "contact.addrT": "Address", "contact.addrD": "Ferhadija 24, 71000 Sarajevo — in the heart of the old town",
      "contact.phoneT": "Phone", "contact.emailT": "Email", "contact.hoursT": "Opening hours", "contact.hoursD": "Mon – Sun: 11:00 – 23:00",
      "footer.desc": "A boutique massage & spa salon on Ferhadija, in the heart of Sarajevo. A space built for slowing down.",
      "footer.linksT": "Quick links", "footer.contactT": "Contact", "footer.copy": "© 2026 Zayn Massage & Spa. All rights reserved.", "footer.made": "Ferhadija · Sarajevo"
    },

    fr: {
      "brand.sub": "MASSAGE & SPA", "nav.about": "À propos", "nav.services": "Services", "nav.gallery": "Galerie", "nav.reviews": "Avis", "nav.contact": "Contact", "nav.book": "Envoyer une demande", "nav.viewAll": "Voir toute la carte",
      "hero.eyebrow": "Ferhadija · Cœur de Sarajevo", "hero.word1": "Un moment", "hero.word2": "dédié", "hero.word3": "uniquement", "hero.word4": "à vous.",
      "hero.sub": "Un salon de massage et spa au cœur de la vieille ville de Sarajevo — où la lumière tamisée et le silence agissent autant que nos mains.",
      "hero.cta1": "Réserver un rendez-vous", "hero.cta2": "Voir la carte", "hero.scroll": "Faire défiler",
      "transform.title": "Laissez le monde extérieur derrière vous",
      "transform.beforeLabel": "Avant", "transform.before1": "Tension", "transform.before2": "Stress", "transform.before3": "Fatigue",
      "transform.afterLabel": "Après", "transform.after1": "Détendu", "transform.after2": "Régénéré", "transform.after3": "Rééquilibré",
      "transform.hint": "Faites glisser le curseur",
      "wa.eyebrow": "Demande", "wa.title": "Envoyez une demande",
      "wa.sub": "Remplissez le formulaire — puis choisissez WhatsApp ou Viber. Le message est envoyé au 061 231 251.",
      "wa.lname": "Nom et prénom", "wa.lphone": "Téléphone", "wa.lservice": "Service", "wa.selectPlaceholder": "Choisir un service",
      "wa.ldate": "Date souhaitée (optionnel)", "wa.lnote": "Écrivez votre message / demande", "wa.notePlaceholder": "Écrivez votre demande ici...", "wa.errNote": "Entrez un message.",
      "wa.errName": "Entrez votre nom.", "wa.errPhone": "Entrez votre téléphone.", "wa.errService": "Veuillez choisir un service.",
      "wa.submit": "Envoyer via WhatsApp", "wa.submitViber": "Envoyer via Viber",
      "wa.msgIntro": "Bonjour Zayn Massage & Spa !\nJe souhaite envoyer une demande :",
      "wa.msgName": "Nom", "wa.msgPhone": "Téléphone", "wa.msgService": "Service", "wa.msgDate": "Date souhaitée", "wa.msgNote": "Message",

      "about.tag": "Zayn Lounge", "about.eyebrow": "À propos", "about.quote": "« La relaxation n'est pas un luxe — c'est un retour à soi. »",
      "about.p1": "Zayn Massage & Spa est un salon boutique situé à Ferhadija, au cœur de Sarajevo.",
      "about.p2": "Nous associons les techniques de massage traditionnelles bosniaques aux rituels de relaxation modernes.",
      "about.stat1n": "6", "about.stat1l": "Soins différents", "about.stat2n": "100%", "about.stat2l": "Huiles naturelles", "about.stat3n": "365", "about.stat3l": "Jours de dévouement", "about.stat4n": "60+", "about.stat4l": "Minutes de relaxation",
      "services.eyebrow": "Carte", "services.title": "Notre carte de soins", "services.sub": "Chaque soin est adapté à votre rythme —<br> choisissez la durée et la technique qui vous conviennent aujourd'hui.",
      "services.g1": "Massages classiques", "services.g1types": "Relax • Sportif • Massage médical",
      "services.r30.h": "Courte pause", "services.r30.p": "Un massage court mais efficace pour se détendre et se libérer des tensions du quotidien. Idéal quand vous avez besoin d'un regain rapide — surtout après une journée chargée, une longue position assise ou un effort physique.",
      "services.r45.h": "Soin équilibré", "services.r45.p": "Un soin plus long qui permet un massage plus détaillé et une attention aux zones où vous ressentez le plus de tension. Particulièrement adapté au dos, au cou, aux épaules et aux jambes, avec une technique choisie selon vos besoins.",
      "services.r60.h": "Relaxation totale", "services.r60.p": "Une heure dédiée à la détente complète et au soin du corps entier. Le massage s'adapte à vos envies et besoins, avec une attention particulière aux zones sous tension. Le choix parfait pour une vraie pause face au stress quotidien.",
      "services.gFoot": "Massage des pieds",
      "services.foot.h": "Détente et soulagement", "services.foot.p": "Spécialement conçu pour des pieds fatigués et sollicités. Le massage aide à réduire la sensation de lourdeur et de tension, favorise une meilleure circulation et apporte un soulagement agréable après une longue station debout, la marche ou les efforts du quotidien. Idéal quand vos pieds ont besoin de repos et d'attention.",
      "services.gVip": "Soins VIP",
      "services.vip.h": "Pack VIP", "services.vip.p": "Un soin exclusif pensé comme une expérience complète de bien-être et de détente. Le pack comprend 60 minutes de massage au choix, 15 minutes de gommage du visage, un massage du visage, un masque apaisant, un massage de la tête et du cuir chevelu, ainsi qu'un massage des pieds. Après le soin, <strong>le sauna est inclus</strong> pour un sentiment supplémentaire de détente et de plaisir total.",
      "services.harmony.h": "Pack VIP HARMONY", "services.harmony.p": "Un mariage harmonieux entre soin de la peau et détente profonde. Le soin commence par 30 minutes de gommage corporel au sel de la mer Morte, suivies de 30 minutes de massage relaxant. Après le massage, <strong>le sauna est inclus</strong>, pour terminer dans un calme complet et une sensation de légèreté.",
      "services.gHij": "Hijama",
      "services.hij.h": "Ventouses traditionnelles", "services.hij.p": "La hijama est une méthode traditionnelle de soin utilisant une aspiration contrôlée sur la peau, pratiquée depuis des siècles dans différents approches wellness et traditionnelles. Le soin s'adresse à ceux qui recherchent une façon naturelle et traditionnelle de se détendre et de ressentir un soulagement du corps, avec une approche professionnelle et attentive.",
      "services.gBos": "Massage bosniaque",
      "services.bos.h": "Rituel bosniaque traditionnel", "services.bos.p": "Un soin unique inspiré de la tradition bosniaque du soin du corps. Vous choisissez le type de massage qui vous convient le mieux ; le soin se pratique à l'eau chaude et au savon de chèvre naturel. Après le massage vient la douche, pour terminer avec une sensation de propreté, de fraîcheur et de détente totale.",
      "quote.text": "Chaque toucher raconte sa propre histoire de paix.", "quote.cite": "Zayn Massage & Spa",
      "reviews.eyebrow": "Avis", "reviews.title": "Ce que disent nos clients",
      "reviews.r1": "« Zayn Massage est sans aucun doute le meilleur massage de Sarajevo ! Personnel professionnel, atmosphère relaxante et technique incroyable. Je suis repartie complètement rafraîchie, et les nœuds dans mon dos se sentaient nettement mieux. Je recommande vivement !!! »", "reviews.n1": "Nina O.",
      "reviews.r2": "« Cet endroit est incroyable, tout comme le personnel — le propriétaire est aussi humble et professionnel. Vous ne partirez pas déçus ; le massage était fantastique, et la masseuse a veillé à mon confort pendant tout le service. À la fin, ils nous ont même préparé un café bosniaque… on ne trouve ça nulle part ailleurs… »", "reviews.n2": "Mikky M.",
      "reviews.r3": "« J'ai visité ce salon de massage et je peux dire que je suis pleinement satisfaite du service. L'espace est propre, rangé et très agréable, et l'atmosphère est relaxante dès l'entrée. Le personnel est gentil, professionnel et dévoué aux clients☺️ »", "reviews.n3": "Nejla M.",
      "reviews.r4": "« À recommander sans hésiter ! Professionnalisme, gentillesse et service au-delà de toutes les attentes. Nulle part ailleurs nous n'avons reçu un massage plus efficace et professionnel — et nous en avons essayé d'innombrables. Il est important de noter que nous avions de gros problèmes ; en partant, la douleur avait disparu, car des mains habiles et professionnelles ont fait le travail. Rien de comparable ne nous a été fait avec tous les appareils supplémentaires utilisés dans toutes les thérapies physiques que nous avons eues jusqu'ici. Après 10 jours, nous sommes comme neufs, comme si nous n'avions jamais eu de problèmes de colonne. Un grand merci à toute l'équipe — continuez ainsi. Mains d'or Mia, la meilleure physiothérapeute ❤️. Salutations à M. Omar pour son professionnalisme, et à son épouse pour sa grande gentillesse. À bientôt — ça vaut vraiment le coup de faire plus de 350 km jusqu'à vous, résoudre les problèmes et rentrer comme neufs ❤️❤️❤️ »", "reviews.n4": "Ana O.",
      "reviews.r5": "« Une expérience magnifique du moment où je suis entrée jusqu'à ma sortie. L'ambiance est calme, propre et très relaxante, et les thérapeutes sont extrêmement professionnels et compétents. Le massage a été fait avec mesure, exactement selon le besoin, sans précipitation ni improvisation. On sent qu'ils savent ce qu'ils font et qu'ils se soucient du client. Après le soin, je me suis sentie légère et totalement détendue. Je recommande vivement — je reviendrai sans hésiter ! »", "reviews.n5": "Mill.",
      "reviews.r6": "« Si vous venez à Sarajevo, venez absolument ici — j'ai eu une thérapeute nommée Jenni et je suis venue avec ma mère, qui a eu une thérapeute nommée Tera ; elles étaient tellement adorables, je recommande à 100 % ! J'ai réussi à me détendre et j'ai l'impression que tout le stress a disparu. Elles sont très gentilles et je me sens détendue. »", "reviews.n6": "Thanjeela K.",
      "reviews.r7": "« C'était incroyable, et les filles nous ont accueillis dans une atmosphère chaleureuse — je vous recommande vraiment de réserver un massage ici ! »", "reviews.n7": "Micaela P.",
      "reviews.r8": "« Je suis très satisfaite du service. L'ambiance est relaxante, l'espace est propre et agréable, et le personnel est professionnel et gentil. La hijama était d'une qualité exceptionnelle — exactement ce qu'il me fallait pour me détendre et éliminer les tensions. Chaude recommandation à tous ceux qui veulent vraiment se reposer. Omar et les filles qui y travaillent sont aussi très professionnels et gentils. »", "reviews.n8": "Lejla M.",
      "reviews.showMore": "Voir plus", "reviews.showLess": "Voir moins",
      "booking.eyebrow": "Réservation", "booking.title": "Réservez votre créneau", "booking.sub": "Choisissez un service, une date et une heure.",
      "booking.f1t": "Heures d'ouverture", "booking.f1d": "Lun – Sam: 10:00 – 20:00", "booking.f2t": "Emplacement", "booking.f2d": "Ferhadija 24, Sarajevo", "booking.f3t": "Téléphone",
      "booking.lservice": "Service", "booking.selectPlaceholder": "Choisir un service",
      "booking.opt.r30": "Massage Relax — 30 min (40 KM)", "booking.opt.r45": "Massage Relax — 45 min (55 KM)", "booking.opt.r60": "Massage Relax — 60 min (70 KM)", "booking.opt.vip": "Massage VIP — 90 min (120 KM)", "booking.opt.bos": "Massage Bosniaque — 60 min (65 KM)", "booking.opt.hij": "Hijama — 45 min (60 KM)",
      "booking.ldate": "Date", "booking.ltime": "Heure", "booking.lname": "Nom et prénom", "booking.lphone": "Téléphone", "booking.lemail": "E-mail", "booking.lnote": "Note (optionnel)",
      "booking.errService": "Veuillez choisir un service.", "booking.errDate": "Veuillez choisir une date.", "booking.errTime": "Veuillez choisir un créneau.", "booking.errName": "Entrez votre nom.", "booking.errPhone": "Entrez votre téléphone.", "booking.errEmail": "Entrez un e-mail valide.",
      "booking.submit": "Confirmer la réservation", "booking.thanksTitle": "Merci !", "booking.thanksText": "Votre réservation est enregistrée.",
      "booking.newBooking": "Nouvelle réservation", "booking.sumService": "Service", "booking.sumDate": "Date", "booking.sumTime": "Heure", "booking.sumName": "Nom", "booking.sumTotal": "Prix", "booking.pickHint": "Sélectionné",
      "contact.eyebrow": "Contact", "contact.title": "Rendez-nous visite", "contact.addrT": "Adresse", "contact.addrD": "Ferhadija 24, 71000 Sarajevo",
      "contact.phoneT": "Téléphone", "contact.emailT": "E-mail", "contact.hoursT": "Heures d'ouverture", "contact.hoursD": "Lun – Dim: 11:00 – 23:00",
      "footer.desc": "Salon boutique de massage et spa à Ferhadija, au cœur de Sarajevo.",
      "footer.linksT": "Liens rapides", "footer.contactT": "Contact", "footer.copy": "© 2026 Zayn Massage & Spa. Tous droits réservés.", "footer.made": "Ferhadija · Sarajevo"
    },

    it: {
      "brand.sub": "MASSAGE & SPA", "nav.about": "Chi siamo", "nav.services": "Servizi", "nav.gallery": "Galleria", "nav.reviews": "Recensioni", "nav.contact": "Contatti", "nav.book": "Invia richiesta", "nav.viewAll": "Vedi tutto il menu",
      "hero.eyebrow": "Ferhadija · Cuore di Sarajevo", "hero.word1": "Un momento", "hero.word2": "dedicato", "hero.word3": "solo", "hero.word4": "a te.",
      "hero.sub": "Un boutique salon di massaggi e spa nel centro storico di Sarajevo.",
      "hero.cta1": "Prenota un appuntamento", "hero.cta2": "Vedi il menu", "hero.scroll": "Scorri",
      "transform.title": "Lascia il mondo esterno alle spalle",
      "transform.beforeLabel": "Prima", "transform.before1": "Tensione", "transform.before2": "Stress", "transform.before3": "Fatica",
      "transform.afterLabel": "Dopo", "transform.after1": "Rilassato", "transform.after2": "Rigenerato", "transform.after3": "Riequilibrato",
      "transform.hint": "Trascina il cursore",
      "wa.eyebrow": "Richiesta", "wa.title": "Invia una richiesta",
      "wa.sub": "Compila il breve modulo — poi scegli WhatsApp o Viber. Il messaggio viene inviato al 061 231 251.",
      "wa.lname": "Nome e cognome", "wa.lphone": "Telefono", "wa.lservice": "Servizio", "wa.selectPlaceholder": "Scegli un servizio",
      "wa.ldate": "Data desiderata (opzionale)", "wa.lnote": "Scrivi il messaggio / richiesta", "wa.notePlaceholder": "Scrivi la tua richiesta qui...", "wa.errNote": "Inserisci un messaggio.",
      "wa.errName": "Inserisci il tuo nome.", "wa.errPhone": "Inserisci il telefono.", "wa.errService": "Seleziona un servizio.",
      "wa.submit": "Invia su WhatsApp", "wa.submitViber": "Invia su Viber",
      "wa.msgIntro": "Ciao Zayn Massage & Spa!\nVorrei inviare una richiesta:",
      "wa.msgName": "Nome", "wa.msgPhone": "Telefono", "wa.msgService": "Servizio", "wa.msgDate": "Data desiderata", "wa.msgNote": "Messaggio",

      "about.tag": "Zayn Lounge", "about.eyebrow": "Chi siamo", "about.quote": "“Il relax non è un lusso — è un ritorno a se stessi.”",
      "about.p1": "Zayn Massage & Spa è un boutique salon situato in via Ferhadija, nel cuore di Sarajevo.",
      "about.p2": "Uniamo le tradizionali tecniche di massaggio bosniache con i moderni rituali di relax.",
      "about.stat1n": "6", "about.stat1l": "Trattamenti diversi", "about.stat2n": "100%", "about.stat2l": "Oli naturali", "about.stat3n": "365", "about.stat3l": "Giorni di dedizione", "about.stat4n": "60+", "about.stat4l": "Minuti di relax",
      "services.eyebrow": "Menu", "services.title": "Il nostro menu trattamenti", "services.sub": "Ogni trattamento è adattato al tuo ritmo —<br> scegli durata e tecnica più adatte a te oggi.",
      "services.g1": "Massaggi classici", "services.g1types": "Relax • Sportivo • Massaggio medico",
      "services.r30.h": "Breve pausa", "services.r30.p": "Un massaggio breve ma efficace per rilassarsi e liberarsi dalle tensioni quotidiane. Ideale quando serve un rapido rinfresco — soprattutto dopo una giornata impegnativa, tanto stare seduti o uno sforzo fisico.",
      "services.r45.h": "Trattamento equilibrato", "services.r45.p": "Un trattamento più lungo che consente un massaggio più dettagliato e attenzione alle zone in cui senti più tensione. Particolarmente adatto a schiena, collo, spalle e gambe, con tecnica scelta in base alle tue esigenze.",
      "services.r60.h": "Rilassamento completo", "services.r60.p": "Un'ora dedicata al relax completo e alla cura di tutto il corpo. Il massaggio si adatta ai tuoi desideri e bisogni, con particolare attenzione alle zone sotto tensione. La scelta perfetta per una vera pausa dallo stress quotidiano.",
      "services.gFoot": "Massaggio ai piedi",
      "services.foot.h": "Sollievo e rilascio", "services.foot.p": "Pensato soprattutto per piedi stanchi e affaticati. Il massaggio aiuta a ridurre la sensazione di pesantezza e tensione, favorisce una migliore circolazione e offre un piacevole sollievo dopo tanto stare in piedi, camminare o lo stress quotidiano. Ideale quando i piedi hanno bisogno di riposo e cura.",
      "services.gVip": "Trattamenti VIP",
      "services.vip.h": "Pacchetto VIP", "services.vip.p": "Un trattamento esclusivo pensato come un'esperienza completa di cura e relax. Il pacchetto include 60 minuti di massaggio a tua scelta, 15 minuti di scrub viso, massaggio viso, maschera lenitiva, massaggio di testa e cuoio capelluto e massaggio ai piedi. Dopo il trattamento, <strong>la sauna è inclusa</strong> per un ulteriore senso di relax e pieno godimento.",
      "services.harmony.h": "Pacchetto VIP HARMONY", "services.harmony.p": "Un'armoniosa unione di cura della pelle e relax profondo. Il trattamento inizia con 30 minuti di scrub corpo con sale del Mar Morto, seguiti da 30 minuti di massaggio rilassante. Dopo il massaggio, <strong>la sauna è inclusa</strong>, per concludere in totale calma e leggerezza.",
      "services.gHij": "Hijama",
      "services.hij.h": "Coppettazione tradizionale", "services.hij.p": "La hijama è un metodo tradizionale di cura che usa un vuoto controllato sulla pelle ed è praticata da secoli in diversi approcci wellness e tradizionali. Il trattamento è per chi desidera un modo naturale e tradizionale di rilassarsi e sentirsi alleggerito, con un approccio professionale e attento.",
      "services.gBos": "Massaggio bosniaco",
      "services.bos.h": "Rituale bosniaco tradizionale", "services.bos.p": "Un trattamento unico ispirato al modo tradizionale bosniaco di curare il corpo. Scegli il tipo di massaggio più adatto a te; il trattamento si svolge con acqua calda e sapone di capra naturale. Dopo il massaggio segue la doccia, per terminare con una sensazione di pulizia, freschezza e relax completo.",
      "quote.text": "Ogni tocco racconta la sua storia di pace.", "quote.cite": "Zayn Massage & Spa",
      "reviews.eyebrow": "Recensioni", "reviews.title": "Cosa dicono i nostri ospiti",
      "reviews.r1": "“Zayn Massage è senza dubbio il miglior massaggio a Sarajevo! Personale professionale, atmosfera rilassante e tecnica incredibile. Sono uscita sentendomi completamente rinfrescata e i nodi alla schiena si sentivano nettamente meglio. Consigliatissimo!!!”", "reviews.n1": "Nina O.",
      "reviews.r2": "“Questo posto è incredibile, così come lo staff — anche il proprietario è umile e professionale. Non andrete via insoddisfatti; il massaggio è stato fantastico e la massaggiatrice si è assicurata che stessi comoda per tutto il servizio. Alla fine ci hanno preparato anche il caffè bosniaco… non si trova da nessun'altra parte…”", "reviews.n2": "Mikky M.",
      "reviews.r3": "“Ho visitato questo salone di massaggi e posso dire di essere pienamente soddisfatta del servizio. Lo spazio è pulito, ordinato e molto piacevole, e l'atmosfera è rilassante fin dall'ingresso. Lo staff è gentile, professionale e dedicato ai clienti☺️”", "reviews.n3": "Nejla M.",
      "reviews.r4": "“ Consigliatissimo! Professionalità, gentilezza e servizio oltre ogni aspettativa. Da nessun'altra parte abbiamo ricevuto un massaggio più efficace e professionale — e ne abbiamo provati tantissimi. È importante dire che avevamo grossi problemi; quando siamo usciti il dolore era sparito, perché mani abili e professionali hanno fatto il lavoro. Niente di simile ci era stato fatto con tutte le apparecchiature usate in ogni terapia fisica fatta finora. Dopo 10 giorni siamo come nuovi, come se non avessimo mai avuto problemi alla schiena. Grazie di cuore a tutto lo staff — continuate così. Mani d'oro Mia, la migliore fisioterapista ❤️. Un grande saluto al signor Omar per la professionalità e a sua moglie per la grande gentilezza. A presto — vale davvero la pena viaggiare più dei nostri 350 km fino a voi, risolvere i problemi e tornare a casa come nuovi ❤️❤️❤️”", "reviews.n4": "Ana O.",
      "reviews.r5": "“Un'esperienza meravigliosa dal momento in cui sono entrata fino all'uscita. L'ambiente è calmo, pulito e molto rilassante, e i terapeuti sono estremamente professionali e competenti. Il massaggio è stato fatto con misura, esattamente secondo necessità, senza fretta né improvvisazione. Si sente che sanno cosa fanno e che tengono al cliente. Dopo il trattamento mi sentivo leggera e completamente rilassata. Consigliatissimo — tornerò di certo!”", "reviews.n5": "Mill.",
      "reviews.r6": "“Se venite a Sarajevo, venite assolutamente qui — ho avuto una terapista di nome Jenni e sono venuta con mia mamma, che ha avuto una terapista di nome Tera, ed erano meravigliose, consiglio al 100%! Sono riuscita a rilassarmi e sembra che tutto lo stress sia sparito. Sono molto gentili e mi sento rilassata.”", "reviews.n6": "Thanjeela K.",
      "reviews.r7": "“È stato incredibile, e le ragazze ci hanno accolto in un'atmosfera calda — vi consiglio davvero di prenotare un massaggio qui!”", "reviews.n7": "Micaela P.",
      "reviews.r8": "“Sono molto soddisfatta del servizio. L'ambiente è rilassante, lo spazio è pulito e piacevole, e lo staff è professionale e gentile. La hijama è stata di qualità eccezionale — esattamente ciò di cui avevo bisogno per rilassarmi e sciogliere le tensioni. Calda raccomandazione a chiunque voglia davvero riposarsi. Anche Omar e le ragazze che lavorano lì sono molto professionali e gentili.”", "reviews.n8": "Lejla M.",
      "reviews.showMore": "Mostra di più", "reviews.showLess": "Mostra meno",
      "booking.eyebrow": "Prenotazione", "booking.title": "Prenota il tuo appuntamento", "booking.sub": "Scegli il servizio, la data e l'ora che preferisci.",
      "booking.f1t": "Orari di apertura", "booking.f1d": "Lun – Sab: 10:00 – 20:00", "booking.f2t": "Posizione", "booking.f2d": "Ferhadija 24, Sarajevo", "booking.f3t": "Telefono",
      "booking.lservice": "Servizio", "booking.selectPlaceholder": "Scegli un servizio",
      "booking.opt.r30": "Massaggio Relax — 30 min (40 KM)", "booking.opt.r45": "Massaggio Relax — 45 min (55 KM)", "booking.opt.r60": "Massaggio Relax — 60 min (70 KM)", "booking.opt.vip": "Massaggio VIP — 90 min (120 KM)", "booking.opt.bos": "Massaggio Bosniaco — 60 min (65 KM)", "booking.opt.hij": "Hijama — 45 min (60 KM)",
      "booking.ldate": "Data", "booking.ltime": "Ora", "booking.lname": "Nome e cognome", "booking.lphone": "Telefono", "booking.lemail": "Email", "booking.lnote": "Nota (opzionale)",
      "booking.errService": "Seleziona un servizio.", "booking.errDate": "Seleziona una data.", "booking.errTime": "Seleziona un orario.", "booking.errName": "Inserisci il tuo nome.", "booking.errPhone": "Inserisci il tuo telefono.", "booking.errEmail": "Inserisci un'email valida.",
      "booking.submit": "Conferma prenotazione", "booking.thanksTitle": "Grazie!", "booking.thanksText": "La tua prenotazione è stata registrata.",
      "booking.newBooking": "Nuova prenotazione", "booking.sumService": "Servizio", "booking.sumDate": "Data", "booking.sumTime": "Ora", "booking.sumName": "Nome", "booking.sumTotal": "Prezzo", "booking.pickHint": "Selezionato",
      "contact.eyebrow": "Contatti", "contact.title": "Vieni a trovarci", "contact.addrT": "Indirizzo", "contact.addrD": "Ferhadija 24, 71000 Sarajevo",
      "contact.phoneT": "Telefono", "contact.emailT": "Email", "contact.hoursT": "Orari di apertura", "contact.hoursD": "Lun – Dom: 11:00 – 23:00",
      "footer.desc": "Boutique massage & spa salon in via Ferhadija, nel cuore di Sarajevo.",
      "footer.linksT": "Link rapidi", "footer.contactT": "Contatti", "footer.copy": "© 2026 Zayn Massage & Spa. Tutti i diritti riservati.", "footer.made": "Ferhadija · Sarajevo"
    },

    de: {
      "brand.sub": "MASSAGE & SPA", "nav.about": "Über uns", "nav.services": "Leistungen", "nav.gallery": "Galerie", "nav.reviews": "Bewertungen", "nav.contact": "Kontakt", "nav.book": "Anfrage senden", "nav.viewAll": "Gesamtes Menü ansehen",
      "hero.eyebrow": "Ferhadija · Herz von Sarajevo", "hero.word1": "Ein Moment,", "hero.word2": "der nur", "hero.word3": "Ihnen", "hero.word4": "gewidmet ist.",
      "hero.sub": "Ein Boutique-Massage- & Spa-Salon im Herzen der Altstadt von Sarajevo.",
      "hero.cta1": "Termin buchen", "hero.cta2": "Menü ansehen", "hero.scroll": "Scrollen",
      "transform.title": "Lassen Sie die Außenwelt hinter sich",
      "transform.beforeLabel": "Vorher", "transform.before1": "Spannung", "transform.before2": "Stress", "transform.before3": "Müdigkeit",
      "transform.afterLabel": "Nachher", "transform.after1": "Entspannt", "transform.after2": "Erneuert", "transform.after3": "Ausgeglichen",
      "transform.hint": "Schieberegler ziehen",
      "wa.eyebrow": "Anfrage", "wa.title": "Anfrage senden",
      "wa.sub": "Füllen Sie das kurze Formular aus — wählen Sie dann WhatsApp oder Viber. Die Nachricht geht an 061 231 251.",
      "wa.lname": "Vor- und Nachname", "wa.lphone": "Telefonnummer", "wa.lservice": "Leistung", "wa.selectPlaceholder": "Leistung wählen",
      "wa.ldate": "Wunschdatum (optional)", "wa.lnote": "Schreiben Sie Ihre Nachricht / Anfrage", "wa.notePlaceholder": "Schreiben Sie Ihre Anfrage hier...", "wa.errNote": "Bitte Nachricht eingeben.",
      "wa.errName": "Geben Sie Ihren Namen ein.", "wa.errPhone": "Geben Sie Ihre Telefonnummer ein.", "wa.errService": "Bitte wählen Sie eine Leistung.",
      "wa.submit": "Per WhatsApp senden", "wa.submitViber": "Per Viber senden",
      "wa.msgIntro": "Hallo Zayn Massage & Spa!\nIch möchte eine Anfrage senden:",
      "wa.msgName": "Name", "wa.msgPhone": "Telefon", "wa.msgService": "Leistung", "wa.msgDate": "Wunschdatum", "wa.msgNote": "Nachricht",

      "about.tag": "Zayn Lounge", "about.eyebrow": "Über uns", "about.quote": "„Entspannung ist kein Luxus — sie ist eine Rückkehr zu sich selbst.“",
      "about.p1": "Zayn Massage & Spa ist ein Boutique-Salon in der Ferhadija-Straße im Herzen von Sarajevo.",
      "about.p2": "Wir verbinden traditionelle bosnische Massagetechniken mit modernen Entspannungsritualen.",
      "about.stat1n": "6", "about.stat1l": "Verschiedene Behandlungen", "about.stat2n": "100%", "about.stat2l": "Natürliche Öle", "about.stat3n": "365", "about.stat3l": "Tage Hingabe", "about.stat4n": "60+", "about.stat4l": "Minuten Entspannung",
      "services.eyebrow": "Menü", "services.title": "Unser Behandlungsmenü", "services.sub": "Jede Behandlung wird an Ihr Tempo angepasst —<br> wählen Sie Dauer und Technik, die heute zu Ihnen passen.",
      "services.g1": "Klassische Massagen", "services.g1types": "Relax • Sport • Medizinische Massage",
      "services.r30.h": "Kurze Auszeit", "services.r30.p": "Eine kurze, aber wirksame Massage zum Entspannen und Lösen alltäglicher Verspannungen. Ideal, wenn Sie eine schnelle Erfrischung brauchen — besonders nach einem anstrengenden Tag, langem Sitzen oder körperlicher Belastung.",
      "services.r45.h": "Ausgewogene Behandlung", "services.r45.p": "Eine längere Behandlung, die eine detailliertere Massage und Aufmerksamkeit für die Bereiche mit der größten Spannung ermöglicht. Besonders geeignet für Rücken, Nacken, Schultern und Beine, mit Technikwahl nach Ihren Bedürfnissen.",
      "services.r60.h": "Vollständige Entspannung", "services.r60.p": "Eine Stunde für vollständige Entspannung und Pflege des ganzen Körpers. Die Massage wird an Ihre Wünsche und Bedürfnisse angepasst, mit besonderer Aufmerksamkeit für verspannte Bereiche. Die perfekte Wahl für eine echte Pause vom Alltagsstress.",
      "services.gFoot": "Fußmassage",
      "services.foot.h": "Entspannung und Entlastung", "services.foot.p": "Besonders für müde und belastete Füße. Die Massage hilft, Schwere und Spannung zu mindern, unterstützt das Gefühl besserer Durchblutung und bringt angenehme Erleichterung nach langem Stehen, Gehen oder täglicher Belastung. Ideal, wenn Ihre Füße Ruhe und Aufmerksamkeit brauchen.",
      "services.gVip": "VIP-Behandlungen",
      "services.vip.h": "VIP-Paket", "services.vip.p": "Eine exklusive Behandlung als vollständiges Pflege- und Entspannungserlebnis. Das Paket umfasst 60 Minuten Massage nach Ihrer Wahl, 15 Minuten Gesichtspeeling, Gesichtsmassage, beruhigende Maske, Kopf- und Kopfhautmassage sowie Fußmassage. Nach der Behandlung ist die <strong>Sauna inklusive</strong> für ein Extra an Entspannung und Genuss.",
      "services.harmony.h": "VIP HARMONY Paket", "services.harmony.p": "Eine harmonische Verbindung aus Hautpflege und tiefer Entspannung. Die Behandlung beginnt mit 30 Minuten Körperpeeling mit Totes-Meer-Salz, gefolgt von 30 Minuten entspannender Massage. Nach der Massage ist die <strong>Sauna inklusive</strong>, damit Sie in vollkommener Ruhe und Leichtigkeit abschließen.",
      "services.gHij": "Hijama",
      "services.hij.h": "Traditionelles Schröpfen", "services.hij.p": "Hijama ist eine traditionelle Pflegemethode mit kontrolliertem Unterdruck auf der Haut und wird seit Jahrhunderten in verschiedenen Wellness- und traditionellen Ansätzen praktiziert. Die Behandlung richtet sich an alle, die eine natürliche, traditionelle Art der Entspannung und körperlichen Entlastung wünschen — mit professionellem, sorgfältigem Ansatz.",
      "services.gBos": "Bosnische Massage",
      "services.bos.h": "Traditionelles bosnisches Ritual", "services.bos.p": "Eine einzigartige Behandlung, inspiriert von der traditionellen bosnischen Körperpflege. Sie wählen die Massageart, die am besten zu Ihnen passt; die Behandlung erfolgt mit warmem Wasser und natürlicher Ziegenseife. Nach der Massage folgt eine Dusche, damit Sie mit dem Gefühl von Reinheit, Frische und vollständiger Entspannung abschließen.",
      "quote.text": "Jede Berührung erzählt ihre eigene Geschichte vom Frieden.", "quote.cite": "Zayn Massage & Spa",
      "reviews.eyebrow": "Bewertungen", "reviews.title": "Was unsere Gäste sagen",
      "reviews.r1": "„Zayn Massage ist zweifellos die beste Massage in Sarajevo! Professionelles Personal, entspannende Atmosphäre und unglaubliche Technik. Ich ging völlig erfrischt hinaus, und die Knoten im Rücken fühlten sich deutlich besser an. Sehr empfehlenswert!!!“", "reviews.n1": "Nina O.",
      "reviews.r2": "„Dieser Ort ist unglaublich, ebenso das Personal — der Inhaber ist auch bescheiden und professionell. Sie werden nicht unzufrieden gehen; die Massage war fantastisch, und die Masseurin sorgte während des gesamten Service für mein Wohlbefinden. Am Ende haben sie uns sogar bosnischen Kaffee gemacht… das bekommt man nirgendwo sonst…“", "reviews.n2": "Mikky M.",
      "reviews.r3": "„Ich habe diesen Massagesalon besucht und bin mit dem Service vollauf zufrieden. Der Raum ist sauber, ordentlich und sehr angenehm, und die Atmosphäre ist entspannend vom ersten Moment an. Das Personal ist freundlich, professionell und den Kunden zugewandt☺️“", "reviews.n3": "Nejla M.",
      "reviews.r4": "„ Absolut empfehlenswert! Professionalität, Freundlichkeit und Service übertreffen alle Erwartungen. Nirgendwo sonst haben wir eine wirksamere und professionellere Massage bekommen — und wir waren bei unzähligen anderen. Wichtig: Wir hatten große Probleme; als wir gingen, war der Schmerz weg, weil geübte, professionelle Hände die Arbeit gemacht haben. Nichts Vergleichbares wurde uns mit all den Extra-Geräten in allen Physio-Therapien bisher gemacht. Nach 10 Tagen fühlen wir uns wie neu, als hätten wir nie Wirbelsäulenprobleme gehabt. Großer Dank an das ganze Team — weiter so. Goldene Hände Mia, die beste Physiotherapeutin ❤️. Grüße an Herrn Omar für seine Professionalität und an seine Frau für ihre große Freundlichkeit. Bis bald — es lohnt sich definitiv, mehr als unsere 350 km zu Ihnen zu fahren, die Probleme zu lösen und wie neu nach Hause zu kommen ❤️❤️❤️“", "reviews.n4": "Ana O.",
      "reviews.r5": "„Wunderschönes Erlebnis vom Moment des Eintretens bis zum Verlassen. Die Atmosphäre ist ruhig, sauber und sehr entspannend, und die Therapeuten sind äußerst professionell und kompetent. Die Massage wurde maßvoll, genau nach Bedarf gemacht, ohne Hetze oder Improvisation. Man spürt, dass sie wissen, was sie tun, und dass ihnen der Kunde wichtig ist. Nach der Behandlung fühlte ich mich leicht und völlig entspannt. Sehr empfehlenswert — ich komme definitiv wieder!“", "reviews.n5": "Mill.",
      "reviews.r6": "„Wenn Sie nach Sarajevo kommen, müssen Sie hierher — ich hatte eine Therapeutin namens Jenni und kam mit meiner Mutter, die eine Therapeutin namens Tera hatte, und sie waren so lieb, 100% Empfehlung! Ich konnte mich entspannen und es fühlt sich an, als wäre aller Stress verschwunden. Sie sind sehr freundlich und ich fühle mich entspannt.“", "reviews.n6": "Thanjeela K.",
      "reviews.r7": "„Es war unglaublich, und die Mädchen haben uns in warmer Atmosphäre begrüßt — ich empfehle wirklich, hier eine Massage zu buchen!“", "reviews.n7": "Micaela P.",
      "reviews.r8": "„Ich bin sehr zufrieden mit dem Service. Die Atmosphäre ist entspannend, der Raum sauber und angenehm, und das Personal professionell und freundlich. Die Hijama war außergewöhnlich gut — genau das, was ich zum Entspannen und Lösen von Spannungen brauchte. Warme Empfehlung an alle, die sich wirklich ausruhen wollen. Auch Omar und die Mädchen, die dort arbeiten, sind sehr professionell und freundlich.“", "reviews.n8": "Lejla M.",
      "reviews.showMore": "Mehr anzeigen", "reviews.showLess": "Weniger anzeigen",
      "booking.eyebrow": "Buchung", "booking.title": "Buchen Sie Ihren Termin", "booking.sub": "Wählen Sie Service, Datum und Uhrzeit aus.",
      "booking.f1t": "Öffnungszeiten", "booking.f1d": "Mo – Sa: 10:00 – 20:00", "booking.f2t": "Standort", "booking.f2d": "Ferhadija 24, Sarajevo", "booking.f3t": "Telefon",
      "booking.lservice": "Leistung", "booking.selectPlaceholder": "Leistung wählen",
      "booking.opt.r30": "Relax-Massage — 30 Min (40 KM)", "booking.opt.r45": "Relax-Massage — 45 Min (55 KM)", "booking.opt.r60": "Relax-Massage — 60 Min (70 KM)", "booking.opt.vip": "VIP-Massage — 90 Min (120 KM)", "booking.opt.bos": "Bosnische Massage — 60 Min (65 KM)", "booking.opt.hij": "Hijama — 45 Min (60 KM)",
      "booking.ldate": "Datum", "booking.ltime": "Uhrzeit", "booking.lname": "Vor- und Nachname", "booking.lphone": "Telefonnummer", "booking.lemail": "E-Mail", "booking.lnote": "Hinweis (optional)",
      "booking.errService": "Bitte wählen Sie eine Leistung.", "booking.errDate": "Bitte wählen Sie ein Datum.", "booking.errTime": "Bitte wählen Sie eine Uhrzeit.", "booking.errName": "Geben Sie Ihren Namen ein.", "booking.errPhone": "Geben Sie Ihre Telefonnummer ein.", "booking.errEmail": "Geben Sie eine gültige E-Mail ein.",
      "booking.submit": "Buchung bestätigen", "booking.thanksTitle": "Vielen Dank!", "booking.thanksText": "Ihre Buchung wurde registriert.",
      "booking.newBooking": "Neue Buchung", "booking.sumService": "Leistung", "booking.sumDate": "Datum", "booking.sumTime": "Uhrzeit", "booking.sumName": "Name", "booking.sumTotal": "Preis", "booking.pickHint": "Ausgewählt",
      "contact.eyebrow": "Kontakt", "contact.title": "Besuchen Sie uns", "contact.addrT": "Adresse", "contact.addrD": "Ferhadija 24, 71000 Sarajevo",
      "contact.phoneT": "Telefon", "contact.emailT": "E-Mail", "contact.hoursT": "Öffnungszeiten", "contact.hoursD": "Mo – So: 11:00 – 23:00",
      "footer.desc": "Boutique-Massage & Spa Salon auf Ferhadija im Herzen von Sarajevo.",
      "footer.linksT": "Quick-Links", "footer.contactT": "Kontakt", "footer.copy": "© 2026 Zayn Massage & Spa. Alle Rechte vorbehalten.", "footer.made": "Ferhadija · Sarajevo"
    },

    ar: {
      "brand.sub": "تدليك وسبا", "nav.about": "من نحن", "nav.services": "الخدمات", "nav.gallery": "المعرض", "nav.reviews": "التقييمات", "nav.contact": "اتصل بنا", "nav.book": "أرسل استفساراً", "nav.viewAll": "عرض القائمة الكاملة",
      "hero.eyebrow": "فرهادية · قلب سراييفو", "hero.word1": "لحظة", "hero.word2": "مخصصة", "hero.word3": "لك", "hero.word4": "وحدك.",
      "hero.sub": "صالون تدليك وسبا متميز في قلب مدينة سراييفو القديمة.",
      "hero.cta1": "احجز موعداً", "hero.cta2": "عرض قائمة الخدمات", "hero.scroll": "التمرير لأسفل",
      "transform.title": "اترك العالم الخارجي خلفك",
      "transform.beforeLabel": "قبل", "transform.before1": "توتر", "transform.before2": "ضغط", "transform.before3": "إرهاق",
      "transform.afterLabel": "بعد", "transform.after1": "مسترخٍ", "transform.after2": "متجدد", "transform.after3": "متوازن",
      "transform.hint": "اسحب المنزلق",
      "wa.eyebrow": "استفسار", "wa.title": "أرسل استفساراً",
      "wa.sub": "املأ النموذج القصير — ثم اختر واتساب أو فايبر. تُرسل الرسالة إلى الرقم 061 231 251.",
      "wa.lname": "الاسم الكامل", "wa.lphone": "رقم الهاتف", "wa.lservice": "الخدمة", "wa.selectPlaceholder": "اختر الخدمة",
      "wa.ldate": "التاريخ المفضل (اختياري)", "wa.lnote": "اكتب رسالتك / استفسارك", "wa.notePlaceholder": "اكتب استفسارك هنا...", "wa.errNote": "أدخل رسالة.",
      "wa.errName": "أدخل الاسم الكامل.", "wa.errPhone": "أدخل رقم الهاتف.", "wa.errService": "يرجى اختيار الخدمة.",
      "wa.submit": "أرسل عبر واتساب", "wa.submitViber": "أرسل عبر فايبر",
      "wa.msgIntro": "مرحباً Zayn Massage & Spa!\nأود إرسال استفسار:",
      "wa.msgName": "الاسم", "wa.msgPhone": "الهاتف", "wa.msgService": "الخدمة", "wa.msgDate": "التاريخ المفضل", "wa.msgNote": "الرسالة",

      "about.tag": "صالة زين", "about.eyebrow": "من نحن", "about.quote": "«الاسترخاء ليس رفاهية — بل هو العودة إلى الذات.»",
      "about.p1": "زين للمساج والسبا هو صالون فاخر يقع في شارع فرهادية في قلب سراييفو.",
      "about.p2": "نجمع بين تقنيات التدليك البوسنية التقليدية وطقوس الاسترخاء الحديثة.",
      "about.stat1n": "6", "about.stat1l": "علاجات مختلفة", "about.stat2n": "100%", "about.stat2l": "زيوت طبيعية", "about.stat3n": "365", "about.stat3l": "يوم من التفاني", "about.stat4n": "60+", "about.stat4l": "دقيقة استرخاء",
      "services.eyebrow": "القائمة", "services.title": "قائمة العلاجات", "services.sub": "كل علاج مصمم وفق وتيرتكم —<br> اختاروا المدة والتقنية الأنسب لكم اليوم.",
      "services.g1": "التدليك الكلاسيكي", "services.g1types": "استرخاء • رياضي • تدليك طبي",
      "services.r30.h": "استراحة قصيرة", "services.r30.p": "تدليك قصير وفعّال للاسترخاء والتحرر من توتر الحياة اليومية. مثالي عندما تحتاجون إلى انتعاش سريع — خاصة بعد يوم شاق أو جلوس طويل أو مجهود بدني.",
      "services.r45.h": "علاج متوازن", "services.r45.p": "علاج أطول يتيح تدليكاً أدق واهتماماً بالمناطق التي تشعرون فيها بأكبر توتر. مناسب خصوصاً للظهر والرقبة والكتفين والساقين، مع اختيار التقنية حسب حاجتكم.",
      "services.r60.h": "استرخاء تام", "services.r60.p": "ساعة مخصصة للاسترخاء الكامل والعناية بالجسم كله. يُكيَّف التدليك حسب رغباتكم واحتياجاتكم، مع اهتمام خاص بالمناطق المتوترة. الخيار الأمثل لاستراحة كاملة من ضغط الحياة اليومية.",
      "services.gFoot": "تدليك القدمين",
      "services.foot.h": "استرخاء وتخفيف", "services.foot.p": "مخصص خصوصاً للقدمين المتعبتين والمجهودتين. يساعد التدليك على تخفيف الشعور بالثقل والتوتر، ويدعم إحساساً بدوران أفضل، ويمنح راحة ممتعة بعد الوقوف الطويل أو المشي أو الإرهاق اليومي. مثالي عندما تحتاج قدماكم إلى راحة واهتمام خاص.",
      "services.gVip": "علاجات VIP",
      "services.vip.h": "باقة VIP", "services.vip.p": "علاج حصري صُمم كتجربة كاملة للعناية والاسترخاء. تشمل الباقة 60 دقيقة تدليك من اختياركم، و15 دقيقة تقشير للوجه، وتدليك الوجه، وقناعاً مهدئاً، وتدليك الرأس وفروة الرأس، وتدليك القدمين. بعد العلاج، <strong>الساونا مشمولة</strong> لمزيد من الاسترخاء والاستمتاع التام.",
      "services.harmony.h": "باقة VIP HARMONY", "services.harmony.p": "مزيج متناغم من العناية بالبشرة والاسترخاء العميق. يبدأ العلاج بـ 30 دقيقة تقشير للجسم بملح البحر الميت، يليها 30 دقيقة تدليك مريح. بعد التدليك، <strong>الساونا مشمولة</strong> لتنهوا العلاج بهدوء تام وإحساس بالخفة.",
      "services.gHij": "الحجامة",
      "services.hij.h": "الحجامة التقليدية", "services.hij.p": "الحجامة طريقة تقليدية للعناية تستخدم فراغاً مضبوطاً على الجلد، وتُمارس منذ قرون ضمن مقاربات العافية والتقاليد المختلفة. العلاج مخصص لمن يريدون طريقة طبيعية وتقليدية للاسترخاء والشعور بتخفيف الجسم، مع نهج مهني وحريص.",
      "services.gBos": "التدليك البوسني",
      "services.bos.h": "طقوس بوسنية تقليدية", "services.bos.p": "علاج فريد مستوحى من الطريقة البوسنية التقليدية للعناية بالجسم. تختارون نوع التدليك الأنسب لكم، ويُجرى العلاج بماء دافئ وصابون الماعز الطبيعي. بعد التدليك يأتي الاستحمام، لتنهوا بشعور بالنظافة والانتعاش والاسترخاء التام.",
      "quote.text": "كل لمسة تروي قصتها عن السلام.", "quote.cite": "Zayn Massage & Spa",
      "reviews.eyebrow": "التقييمات", "reviews.title": "آراء ضيوفنا",
      "reviews.r1": "«زين مساج بلا شك أفضل مساج في سراييفو! طاقم محترف، أجواء مريحة وتقنية مذهلة. غادرت وأنا أشعر بانتعاش تام، والعقد في ظهري أصبحت أفضل بكثير. أنصح بشدة!!!»", "reviews.n1": "Nina O.",
      "reviews.r2": "«هذا المكان رائع، وكذلك الطاقم — والمالك أيضاً متواضع ومحترف. لن تغادروا غير راضين؛ كان المساج مذهلاً، وحرصت المعالِجة على راحتي طوال الخدمة. وفي النهاية صنعوا لنا قهوة بوسنية… هذا لا تجدونه في أي مكان آخر…»", "reviews.n2": "Mikky M.",
      "reviews.r3": "«زرت صالون المساج هذا ويمكنني القول إنني راضية تماماً عن الخدمة. المكان نظيف ومرتب ومريح جداً، والأجواء مريحة منذ لحظة الدخول. الطاقم لطيف ومحترف ومخلص للزبائن☺️»", "reviews.n3": "Nejla M.",
      "reviews.r4": "« أنصح به بشدة! الاحتراف واللطف والخدمة تفوق كل التوقعات. لم نحصل في أي مكان آخر على مساج أكثر فعالية واحترافية — وقد جربنا أماكن لا تُحصى. ومن المهم أن نذكر أننا كنا نعاني من مشاكل كبيرة، فعندما غادرنا اختفى الألم لأن أيدي ماهرة ومحترفة أنجزت العمل. لم يُفعل لنا شيء مشابه مع كل الأجهزة الإضافية المستخدمة في كل علاجات العلاج الطبيعي التي خضناها حتى الآن. بعد 10 أيام نشعر كأننا جدد وكأننا لم نعانِ قط من مشاكل في العمود الفقري. شكر كبير لكل الطاقم — واصلوا. أيدي ذهبية ميا، أفضل أخصائية علاج طبيعي ❤️. تحية كبيرة للسيد عمر على احترافه ولزوجته على لطفها الكبير. نراكم قريباً — يستحق الأمر حقاً السفر أكثر من 350 كم إليكم، حل المشاكل والعودة إلى البيت كأننا جدد ❤️❤️❤️»", "reviews.n4": "Ana O.",
      "reviews.r5": "«تجربة رائعة من لحظة دخولي الصالون حتى خروجي. الأجواء هادئة ونظيفة ومريحة جداً، والمعالجون محترفون وماهرون للغاية. نُفّذ المساج باعتدال، تماماً حسب الحاجة، دون استعجال أو ارتجال. يمكنكم أن تشعروا أنهم يعرفون ما يفعلون وأنهم يهتمون بالزبون. بعد العلاج شعرت بالخفة والاسترخاء التام. أنصح بشدة — سأعود بالتأكيد!»", "reviews.n5": "Mill.",
      "reviews.r6": "«إذا كنتم تزورون سراييفو، عليكم المجيء إلى هنا — كانت لدي معالِجة اسمها جيني وجئت مع أمي التي كانت معالجتها تيرا، وكانتا رائعتين، أنصح بنسبة 100%! استطعت الاسترخاء وأشعر أن كل التوتر قد اختفى. إنهن لطيفات جداً وأشعر بالاسترخاء.»", "reviews.n6": "Thanjeela K.",
      "reviews.r7": "«كان الأمر مذهلاً، واستقبلتنا الفتيات في أجواء دافئة — أنصحكم حقاً بحجز مساج هنا!»", "reviews.n7": "Micaela P.",
      "reviews.r8": "«راضية جداً عن الخدمة. الأجواء مريحة، والمكان نظيف ولطيف، والطاقم محترف ولطيف. كانت الحجامة ممتازة جداً — بالضبط ما احتجته للاسترخاء وإزالة التوتر. توصية حارة لكل من يريد راحة حقيقية. وكذلك عمر والفتيات اللواتي يعملن هناك محترفون ولطيفون جداً.»", "reviews.n8": "Lejla M.",
      "reviews.showMore": "عرض المزيد", "reviews.showLess": "عرض أقل",
      "booking.eyebrow": "الحجز", "booking.title": "احجز موعدك", "booking.sub": "اختر الخدمة والتاريخ والوقت المناسب لك.",
      "booking.f1t": "ساعات العمل", "booking.f1d": "الإثنين – السبت: 10:00 – 20:00", "booking.f2t": "الموقع", "booking.f2d": "فرهادية 24، سراييفو", "booking.f3t": "الهاتف",
      "booking.lservice": "الخدمة", "booking.selectPlaceholder": "اختر الخدمة",
      "booking.opt.r30": "تدليك استرخاء — 30 دقيقة (40 KM)", "booking.opt.r45": "تدليك استرخاء — 45 دقيقة (55 KM)", "booking.opt.r60": "تدليك استرخاء — 60 دقيقة (70 KM)", "booking.opt.vip": "تدليك VIP — 90 دقيقة (120 KM)", "booking.opt.bos": "تدليك بوسني — 60 دقيقة (65 KM)", "booking.opt.hij": "حجامة — 45 دقيقة (60 KM)",
      "booking.ldate": "التاريخ", "booking.ltime": "الوقت", "booking.lname": "الاسم الكامل", "booking.lphone": "رقم الهاتف", "booking.lemail": "البريد الإلكتروني", "booking.lnote": "ملاحظات (اختياري)",
      "booking.errService": "يرجى اختيار الخدمة.", "booking.errDate": "يرجى اختيار التاريخ.", "booking.errTime": "يرجى اختيار الوقت.", "booking.errName": "أدخل الاسم الكامل.", "booking.errPhone": "أدخل رقم الهاتف.", "booking.errEmail": "أدخل بريد إلكتروني صحيح.",
      "booking.submit": "تأكيد الحجز", "booking.thanksTitle": "شكراً لك!", "booking.thanksText": "تم تسجيل حجزك بنجاح.",
      "booking.newBooking": "حجز جديد", "booking.sumService": "الخدمة", "booking.sumDate": "التاريخ", "booking.sumTime": "الوقت", "booking.sumName": "الاسم", "booking.sumTotal": "السعر", "booking.pickHint": "تم اختيار",
      "contact.eyebrow": "اتصل بنا", "contact.title": "تفضل بزيارتنا", "contact.addrT": "العنوان", "contact.addrD": "فرهادية 24، 71000 سراييفو",
      "contact.phoneT": "الهاتف", "contact.emailT": "البريد الإلكتروني", "contact.hoursT": "ساعات العمل", "contact.hoursD": "الإثنين – الأحد: 11:00 – 23:00",
      "footer.desc": "صالون تدليك وسبا فاخر في فرهادية في قلب سراييفو.",
      "footer.linksT": "روابط سريعة", "footer.contactT": "اتصل بنا", "footer.copy": "© 2026 Zayn Massage & Spa. جميع الحقوق محفوظة.", "footer.made": "فرهادية · سراييفو"
    },

    tr: {
      "brand.sub": "MASSAGE & SPA", "nav.about": "Hakkımızda", "nav.services": "Hizmetler", "nav.gallery": "Galeri", "nav.reviews": "Yorumlar", "nav.contact": "İletişim", "nav.book": "Soru gönder", "nav.viewAll": "Tüm menüyü gör",
      "hero.eyebrow": "Ferhadija · Saraybosna'nın Kalbi", "hero.word1": "Size", "hero.word2": "özel", "hero.word3": "bir", "hero.word4": "an.",
      "hero.sub": "Saraybosna'nın eski şehrinin kalbinde butik masaj ve spa salonu.",
      "hero.cta1": "Randevu al", "hero.cta2": "Menüyü gör", "hero.scroll": "Kaydır",
      "transform.title": "Dış dünyayı geride bırakın",
      "transform.beforeLabel": "Önce", "transform.before1": "Gerginlik", "transform.before2": "Stres", "transform.before3": "Yorgunluk",
      "transform.afterLabel": "Sonra", "transform.after1": "Rahat", "transform.after2": "Yenilenmiş", "transform.after3": "Dengeli",
      "transform.hint": "Kaydırıcıyı sürükleyin",
      "wa.eyebrow": "Soru", "wa.title": "Soru gönderin",
      "wa.sub": "Kısa formu doldurun — ardından WhatsApp veya Viber seçin. Mesaj 061 231 251 numarasına gönderilir.",
      "wa.lname": "Ad soyad", "wa.lphone": "Telefon", "wa.lservice": "Hizmet", "wa.selectPlaceholder": "Hizmet seçin",
      "wa.ldate": "Tercih edilen tarih (isteğe bağlı)", "wa.lnote": "Mesajınızı / sorunuzu yazın", "wa.notePlaceholder": "Sorunuzu buraya yazın...", "wa.errNote": "Mesaj girin.",
      "wa.errName": "Ad soyad girin.", "wa.errPhone": "Telefon numarası girin.", "wa.errService": "Lütfen bir hizmet seçin.",
      "wa.submit": "WhatsApp'tan gönder", "wa.submitViber": "Viber'dan gönder",
      "wa.msgIntro": "Merhaba Zayn Massage & Spa!\nBir soru göndermek istiyorum:",
      "wa.msgName": "Ad", "wa.msgPhone": "Telefon", "wa.msgService": "Hizmet", "wa.msgDate": "Tercih edilen tarih", "wa.msgNote": "Mesaj",

      "about.tag": "Zayn Lounge", "about.eyebrow": "Hakkımızda", "about.quote": "„Rahatlama bir lüks değil — kendinize dönüştür.“",
      "about.p1": "Zayn Massage & Spa, Saraybosna'nın kalbinde Ferhadija'da yer alan butik bir salondur.",
      "about.p2": "Geleneksel Bosna masaj tekniklerini modern rahatlama ritüelleriyle birleştiriyoruz.",
      "about.stat1n": "6", "about.stat1l": "Farklı tedavi", "about.stat2n": "100%", "about.stat2l": "Doğal yağlar", "about.stat3n": "365", "about.stat3l": "Gün özveri", "about.stat4n": "60+", "about.stat4l": "Dakika rahatlama",
      "services.eyebrow": "Menü", "services.title": "Tedavi menümüz", "services.sub": "Her tedavi temponuza göre uyarlanır —<br> bugün size en uygun süreyi ve tekniği seçin.",
      "services.g1": "Klasik masajlar", "services.g1types": "Relax • Spor • Medikal masaj",
      "services.r30.h": "Kısa mola", "services.r30.p": "Günlük gerilimden kurtulmak ve rahatlamak için kısa ama etkili bir masaj. Özellikle yorucu bir gün, uzun oturma veya fiziksel efordan sonra hızlı bir yenilenmeye ihtiyaç duyduğunuzda idealdir.",
      "services.r45.h": "Dengeli tedavi", "services.r45.p": "Daha ayrıntılı masaj ve en çok gerilim hissettiğiniz bölgelere odaklanma imkânı veren daha uzun bir tedavi. Özellikle sırt, boyun, omuzlar ve bacaklar için uygundur; teknik ihtiyaçlarınıza göre seçilir.",
      "services.r60.h": "Tam rahatlama", "services.r60.p": "Tüm vücut bakımı ve derin rahatlamaya ayrılmış bir saat. Masaj isteklerinize ve ihtiyaçlarınıza göre uyarlanır; gergin bölgelere özel dikkat gösterilir. Günlük stresten tam bir mola için mükemmel seçim.",
      "services.gFoot": "Ayak masajı",
      "services.foot.h": "Rahatlama ve ferahlama", "services.foot.p": "Özellikle yorgun ve yüklenmiş ayaklar için. Masaj ağırlık ve gerginlik hissini azaltmaya yardımcı olur, daha iyi dolaşım hissini destekler ve uzun ayakta kalma, yürüme veya günlük yorgunluktan sonra hoş bir rahatlama sağlar. Ayaklarınızın dinlenmeye ve özen göstermeye ihtiyaç duyduğu anlar için idealdir.",
      "services.gVip": "VIP tedaviler",
      "services.vip.h": "VIP paket", "services.vip.p": "Bakım ve rahatlamanın tam bir deneyimi olarak tasarlanmış özel bir tedavi. Paket, tercihinize göre 60 dakika masaj, 15 dakika yüz peelingi, yüz masajı, yatıştırıcı yüz maskesi, baş ve saç derisi masajı ile ayak masajını içerir. Tedaviden sonra <strong>sauna dahildir</strong> — ekstra rahatlama ve tam keyif için.",
      "services.harmony.h": "VIP HARMONY paket", "services.harmony.p": "Cilt bakımı ile derin rahatlamanın uyumlu birleşimi. Tedavi, Ölü Deniz tuzu ile 30 dakika vücut peelingi ile başlar; ardından 30 dakika rahatlatıcı masaj gelir. Masajdan sonra <strong>sauna dahildir</strong>, böylece tedaviyi tam bir huzur ve hafiflik hissiyle tamamlayabilirsiniz.",
      "services.gHij": "Hacamat",
      "services.hij.h": "Geleneksel kupa", "services.hij.p": "Hacamat, cilt üzerinde kontrollü vakum kullanan geleneksel bir bakım yöntemidir ve yüzyıllardır çeşitli wellness ve geleneksel yaklaşımların parçası olarak uygulanır. Doğal ve geleneksel bir rahatlama ile vücutta ferahlama hissi isteyenler için, profesyonel ve özenli bir yaklaşımla sunulur.",
      "services.gBos": "Bosna masajı",
      "services.bos.h": "Geleneksel Bosna ritüeli", "services.bos.p": "Geleneksel Bosna vücut bakımı yönteminden ilham alan eşsiz bir tedavi. Size en uygun masaj türünü seçersiniz; tedavi ılık su ve doğal keçi sabunu ile uygulanır. Masajdan sonra duş gelir; tedaviyi temizlik, tazelik ve tam rahatlama hissiyle tamamlarsınız.",
      "quote.text": "Her dokunuş kendi huzur hikâyesini anlatır.", "quote.cite": "Zayn Massage & Spa",
      "reviews.eyebrow": "Yorumlar", "reviews.title": "Misafirlerimiz ne diyor",
      "reviews.r1": "“Zayn Massage şüphesiz Saraybosna'nın en iyi masajı! Profesyonel ekip, rahatlatıcı atmosfer ve inanılmaz teknik. Kendimi tamamen yenilenmiş hissederek çıktım, sırtımdaki düğümler de belirgin şekilde daha iyiydi. Şiddetle tavsiye ederim!!!”", "reviews.n1": "Nina O.",
      "reviews.r2": "“Burası inanılmaz, ekip de öyle — sahibi de mütevazı ve profesyonel. Memnuniyetsiz ayrılmazsınız; masaj harikaydı ve masöz tüm hizmet boyunca rahat etmemi sağladı. Sonunda bize Bosna kahvesi bile yaptılar… bunu başka hiçbir yerde bulamazsınız…”", "reviews.n2": "Mikky M.",
      "reviews.r3": "“Bu masaj salonunu ziyaret ettim ve hizmetten tamamen memnunum diyebilirim. Mekân temiz, düzenli ve çok hoş; atmosfer girişten itibaren rahatlatıcı. Ekip nazik, profesyonel ve müşterilere bağlı☺️”", "reviews.n3": "Nejla M.",
      "reviews.r4": "“ Kesinlikle tavsiye ederim! Profesyonellik, nezaket ve hizmet tüm beklentilerin ötesinde. Daha etkili ve profesyonel bir masaj hiçbir yerde almadık — sayısız yere gittik. Önemli: büyük sorunlarımız vardı; ayrıldığımızda ağrı kalmamıştı çünkü usta, profesyonel eller işini yapmıştı. Şimdiye kadar gittiğimiz tüm fizik tedavilerdeki ek cihazlarla bile bize böyle bir şey yapılmamıştı. 10 gün sonra yeniden doğmuş gibiyiz, hiç omurga sorunumuz olmamış gibi. Tüm ekibe büyük teşekkür — böyle devam edin. Altın eller Mia, en iyi fizyoterapist ❤️. Sayın Omar'a profesyonelliği, eşine de büyük nezaketi için selamlar. Yakında görüşürüz — 350 km'den fazla yol gelmeye, sorunları çözüp yeni gibi eve dönmeye kesinlikle değer ❤️❤️❤️”", "reviews.n4": "Ana O.",
      "reviews.r5": "“Salona girdiğim andan çıktığım ana kadar harika bir deneyim. Ortam sakin, temiz ve çok rahatlatıcı; terapistler son derece profesyonel ve yetkin. Masaj ölçülü, tam ihtiyaca göre, acele veya doğaçlama olmadan yapıldı. Ne yaptıklarını bildiklerini ve müşteriye önem verdiklerini hissediyorsunuz. Tedaviden sonra hafif ve tamamen rahatlamış hissettim. Şiddetle tavsiye ederim — kesinlikle döneceğim!”", "reviews.n5": "Mill.",
      "reviews.r6": "“Saraybosna'ya geliyorsanız mutlaka buraya gelin — Jenni adında bir terapistim vardı, annemle geldim, onun terapisti Tera'ydı ve çok tatlıydılar, %100 tavsiye! Rahatlayabildim ve tüm stresin yok olduğu gibi hissediyorum. Çok nazikler ve kendimi rahatlamış hissediyorum.”", "reviews.n6": "Thanjeela K.",
      "reviews.r7": "“İnanılmazdı ve kızlar bizi sıcak bir atmosferde karşıladı — gerçekten buradan masaj randevusu almanızı tavsiye ederim!”", "reviews.n7": "Micaela P.",
      "reviews.r8": "“Hizmetten çok memnunum. Ortam rahatlatıcı, mekân temiz ve hoş, ekip profesyonel ve nazik. Hacamat son derece kaliteliydi — rahatlamak ve gerginliği atmak için tam ihtiyacım olan şey. Gerçekten dinlenmek isteyen herkese sıcak tavsiye. Orada çalışan Omar ve kızlar da çok profesyonel ve nazik.”", "reviews.n8": "Lejla M.",
      "reviews.showMore": "Daha fazla göster", "reviews.showLess": "Daha az göster",
      "booking.eyebrow": "Rezervasyon", "booking.title": "Randevunuzu alın", "booking.sub": "Size uygun hizmet, tarih ve saati seçin.",
      "booking.f1t": "Çalışma saatleri", "booking.f1d": "Pzt – Cmt: 10:00 – 20:00", "booking.f2t": "Konum", "booking.f2d": "Ferhadija 24, Saraybosna", "booking.f3t": "Telefon",
      "booking.lservice": "Hizmet", "booking.selectPlaceholder": "Hizmet seçin",
      "booking.opt.r30": "Rahatlama masajı — 30 dk (40 KM)", "booking.opt.r45": "Rahatlama masajı — 45 dk (55 KM)", "booking.opt.r60": "Rahatlama masajı — 60 dk (70 KM)", "booking.opt.vip": "VIP masaj — 90 dk (120 KM)", "booking.opt.bos": "Bosna masajı — 60 dk (65 KM)", "booking.opt.hij": "Hacamat — 45 dk (60 KM)",
      "booking.ldate": "Tarih", "booking.ltime": "Saat", "booking.lname": "Ad soyad", "booking.lphone": "Telefon", "booking.lemail": "E-posta", "booking.lnote": "Not (isteğe bağlı)",
      "booking.errService": "Lütfen bir hizmet seçin.", "booking.errDate": "Lütfen bir tarih seçin.", "booking.errTime": "Lütfen bir saat seçin.", "booking.errName": "Ad soyad girin.", "booking.errPhone": "Telefon numarası girin.", "booking.errEmail": "Geçerli bir e-posta girin.",
      "booking.submit": "Rezervasyonu onayla", "booking.thanksTitle": "Teşekkürler!", "booking.thanksText": "Rezervasyonunuz kaydedildi.",
      "booking.newBooking": "Yeni rezervasyon", "booking.sumService": "Hizmet", "booking.sumDate": "Tarih", "booking.sumTime": "Saat", "booking.sumName": "Ad", "booking.sumTotal": "Fiyat", "booking.pickHint": "Seçildi",
      "contact.eyebrow": "İletişim", "contact.title": "Bizi ziyaret edin", "contact.addrT": "Adres", "contact.addrD": "Ferhadija 24, 71000 Saraybosna",
      "contact.phoneT": "Telefon", "contact.emailT": "E-posta", "contact.hoursT": "Çalışma saatleri", "contact.hoursD": "Pzt – Paz: 11:00 – 23:00",
      "footer.desc": "Saraybosna'nın kalbinde Ferhadija'da butik masaj ve spa salonu.",
      "footer.linksT": "Hızlı bağlantılar", "footer.contactT": "İletişim", "footer.copy": "© 2026 Zayn Massage & Spa. Tüm hakları saklıdır.", "footer.made": "Ferhadija · Saraybosna"
    },

    ja: {
      "brand.sub": "MASSAGE & SPA", "nav.about": "私たちについて", "nav.services": "サービス", "nav.gallery": "ギャラリー", "nav.reviews": "レビュー", "nav.contact": "お問い合わせ", "nav.book": "お問い合わせ", "nav.viewAll": "メニュー全体を見る",
      "hero.eyebrow": "フェルハディヤ · サラエボの中心", "hero.word1": "あなた", "hero.word2": "だけの", "hero.word3": "特別な", "hero.word4": "ひととき。",
      "hero.sub": "サラエボ旧市街の中心にあるブティックマッサージ＆スパ。",
      "hero.cta1": "予約する", "hero.cta2": "メニューを見る", "hero.scroll": "スクロール",
      "transform.title": "外の世界を置いていきましょう",
      "transform.beforeLabel": "ビフォー", "transform.before1": "緊張", "transform.before2": "ストレス", "transform.before3": "疲労",
      "transform.afterLabel": "アフター", "transform.after1": "リラックス", "transform.after2": "回復", "transform.after3": "バランス",
      "transform.hint": "スライダーをドラッグ",
      "wa.eyebrow": "お問い合わせ", "wa.title": "お問い合わせを送る",
      "wa.sub": "短いフォームにご記入のうえ、WhatsApp または Viber を選んでください。メッセージは 061 231 251 に送信されます。",
      "wa.lname": "お名前", "wa.lphone": "電話番号", "wa.lservice": "サービス", "wa.selectPlaceholder": "サービスを選択",
      "wa.ldate": "希望日（任意）", "wa.lnote": "メッセージ / お問い合わせ", "wa.notePlaceholder": "お問い合わせ内容を書いてください...", "wa.errNote": "メッセージを入力してください。",
      "wa.errName": "お名前を入力してください。", "wa.errPhone": "電話番号を入力してください。", "wa.errService": "サービスを選択してください。",
      "wa.submit": "WhatsAppで送信", "wa.submitViber": "Viberで送信",
      "wa.msgIntro": "こんにちは Zayn Massage & Spa!\nお問い合わせを送りたいです:",
      "wa.msgName": "名前", "wa.msgPhone": "電話", "wa.msgService": "サービス", "wa.msgDate": "希望日", "wa.msgNote": "メッセージ",

      "about.tag": "Zayn Lounge", "about.eyebrow": "私たちについて", "about.quote": "「リラックスは贅沢ではなく、自分自身への回帰です。」",
      "about.p1": "Zayn Massage & Spaは、サラエボの中心フェルハディヤにあるブティックサロンです。",
      "about.p2": "伝統的なボスニア式マッサージ技法と現代のリラクゼーション儀式を融合しています。",
      "about.stat1n": "6", "about.stat1l": "異なるトリートメント", "about.stat2n": "100%", "about.stat2l": "天然オイル", "about.stat3n": "365", "about.stat3l": "日間の献身", "about.stat4n": "60+", "about.stat4l": "分のリラックス",
      "services.eyebrow": "メニュー", "services.title": "トリートメントメニュー", "services.sub": "すべてのトリートメントはあなたのペースに合わせて —<br> 今日に合う時間と技法をお選びください。",
      "services.g1": "クラシックマッサージ", "services.g1types": "リラックス • スポーツ • メディカルマッサージ",
      "services.r30.h": "短い休息", "services.r30.p": "日常の緊張から解放され、リラックスするための短くて効果的なマッサージ。長い一日、長時間の座位、身体的な負担のあとなど、素早くリフレッシュしたいときに最適です。",
      "services.r45.h": "バランスのとれたトリートメント", "services.r45.p": "より丁寧なマッサージと、もっとも緊張を感じる部位への集中を可能にする長めのトリートメント。背中・首・肩・脚に特に適しており、ご希望に合わせて技法を選びます。",
      "services.r60.h": "完全なリラックス", "services.r60.p": "全身のケアと深いリラックスに捧げる1時間。ご希望とニーズに合わせてマッサージを調整し、緊張している部位に特別な注意を払います。日常のストレスから完全に離れるための最適な選択です。",
      "services.gFoot": "フットマッサージ",
      "services.foot.h": "リラックスと解放", "services.foot.p": "疲れや負担のかかった足のために特別に。重さや緊張感を和らげ、より良い循環の感覚をサポートし、長時間の立ち仕事・歩行・日常の負担のあとに心地よい解放をもたらします。足に休息とケアが必要なときに理想的です。",
      "services.gVip": "VIPトリートメント",
      "services.vip.h": "VIPパッケージ", "services.vip.p": "ケアとリラックスの完全な体験としてデザインされた特別なトリートメント。お好みのマッサージ60分、顔のスクラブ15分、フェイシャルマッサージ、鎮静マスク、頭皮マッサージ、フットマッサージを含みます。トリートメント後は<strong>サウナ込み</strong>で、さらなるリラックスと充足感を。",
      "services.harmony.h": "VIP HARMONYパッケージ", "services.harmony.p": "スキンケアと深いリラックスの調和した組み合わせ。死海の塩スクラブによるボディスクラブ30分から始まり、リラックスマッサージ30分が続きます。マッサージ後は<strong>サウナ込み</strong>で、完全な静けさと軽やかさのうちに終えます。",
      "services.gHij": "ヒジャマ",
      "services.hij.h": "伝統的カッピング", "services.hij.p": "ヒジャマは皮膚にコントロールされた吸引を用いる伝統的なケア法で、何世紀にもわたり様々なウェルネスや伝統的アプローチの一部として行われてきました。自然で伝統的なリラックスと身体の解放感を求める方へ、プロフェッショナルで丁寧なアプローチで提供します。",
      "services.gBos": "ボスニアマッサージ",
      "services.bos.h": "伝統的ボスニア儀式", "services.bos.p": "伝統的なボスニアのボディケアに着想を得たユニークなトリートメント。お好みのマッサージタイプを選び、温かいお湯と天然のヤギせっけんで施術します。マッサージ後はシャワーがあり、清潔感・爽快感・完全なリラックスとともに終えます。",
      "quote.text": "すべてのタッチが、平和の物語を語ります。", "quote.cite": "Zayn Massage & Spa",
      "reviews.eyebrow": "レビュー", "reviews.title": "お客様の声",
      "reviews.r1": "「Zayn Massageは間違いなくサラエボで最高のマッサージ！プロのスタッフ、リラックスできる雰囲気、驚異的な技術。完全にリフレッシュして帰り、背中のコリも明らかに良くなりました。強くおすすめします！！！」", "reviews.n1": "Nina O.",
      "reviews.r2": "「この場所は素晴らしく、スタッフも同じです — オーナーも控えめでプロフェッショナル。不満で帰ることはありません。マッサージは素晴らしく、施術者はサービス中ずっと快適にしてくれました。最後にはボスニアコーヒーまで出してくれました…こんな体験は他では得られません…」", "reviews.n2": "Mikky M.",
      "reviews.r3": "「このマッサージサロンを訪れ、サービスに完全に満足しています。空間は清潔で整っておりとても心地よく、入った瞬間から雰囲気がリラックスできます。スタッフは親切でプロフェッショナル、お客様に献身的です☺️」", "reviews.n3": "Nejla M.",
      "reviews.r4": "「 大推薦！プロ意識・親切さ・サービスは期待を超えています。これほど効果的でプロフェッショナルなマッサージは他では受けたことがありません — 数え切れないほど他も行きました。重要なのは大きな問題があったこと。帰る頃には痛みがなく、熟練したプロの手が仕事をしてくれました。これまで受けたあらゆる物理療法の追加機器でも、このようなことはされませんでした。10日後には新品のように、背骨の問題などなかったかのようです。チーム全体に大きな感謝 — このまま続けてください。金の手のMia、最高の理学療法士 ❤️。Omarさんにプロ意識を、奥様に大きな親切を。またすぐに — 350km以上かけて来る価値は間違いなくあり、問題を解決して新品のように家に帰れます ❤️❤️❤️」", "reviews.n4": "Ana O.",
      "reviews.r5": "「入店から退店まで素晴らしい体験。雰囲気は静かで清潔、とてもリラックスでき、セラピストは非常にプロで熟練しています。マッサージは適度で、必要に正確に合わせ、急がず即興もなく。何をしているか分かっていて、お客様を大切にしていると感じられます。トリートメント後は軽く完全にリラックスできました。強くおすすめ — 必ず戻ります！」", "reviews.n5": "Mill.",
      "reviews.r6": "「サラエボに来るなら必ずここへ — Jenniというセラピストがいて、母と来ました。母はTeraというセラピストで、とても素敵でした。100%おすすめ！リラックスでき、持っていたストレスがすべて消えたようです。とても親切で、リラックスできています。」", "reviews.n6": "Thanjeela K.",
      "reviews.r7": "「信じられないほど素晴らしく、女の子たちが温かい雰囲気で迎えてくれました — 本当にここでマッサージの予約をおすすめします！」", "reviews.n7": "Micaela P.",
      "reviews.r8": "「サービスにとても満足しています。雰囲気はリラックスでき、空間は清潔で心地よく、スタッフはプロで親切。ヒジャマは非常に高品質で、リラックスと緊張の解消にちょうど必要なものでした。本当に休みたいすべての方に温かくおすすめ。Omarさんとそこで働く女の子たちもとてもプロで親切です。」", "reviews.n8": "Lejla M.",
      "reviews.showMore": "もっと見る", "reviews.showLess": "閉じる",
      "booking.eyebrow": "予約", "booking.title": "ご予約", "booking.sub": "ご希望のサービス、日時をお選びください。",
      "booking.f1t": "営業時間", "booking.f1d": "月 – 土: 10:00 – 20:00", "booking.f2t": "所在地", "booking.f2d": "Ferhadija 24, サラエボ", "booking.f3t": "電話",
      "booking.lservice": "サービス", "booking.selectPlaceholder": "サービスを選択",
      "booking.opt.r30": "リラックスマッサージ — 30分 (40 KM)", "booking.opt.r45": "リラックスマッサージ — 45分 (55 KM)", "booking.opt.r60": "リラックスマッサージ — 60分 (70 KM)", "booking.opt.vip": "VIPマッサージ — 90分 (120 KM)", "booking.opt.bos": "ボスニアマッサージ — 60分 (65 KM)", "booking.opt.hij": "ハジャマ — 45分 (60 KM)",
      "booking.ldate": "日付", "booking.ltime": "時間", "booking.lname": "お名前", "booking.lphone": "電話番号", "booking.lemail": "メール", "booking.lnote": "備考（任意）",
      "booking.errService": "サービスを選択してください。", "booking.errDate": "日付を選択してください。", "booking.errTime": "時間を選択してください。", "booking.errName": "お名前を入力してください。", "booking.errPhone": "電話番号を入力してください。", "booking.errEmail": "有効なメールを入力してください。",
      "booking.submit": "予約を確定", "booking.thanksTitle": "ありがとうございます！", "booking.thanksText": "ご予約を受け付けました。",
      "booking.newBooking": "新しい予約", "booking.sumService": "サービス", "booking.sumDate": "日付", "booking.sumTime": "時間", "booking.sumName": "名前", "booking.sumTotal": "料金", "booking.pickHint": "選択済み",
      "contact.eyebrow": "お問い合わせ", "contact.title": "ご来店ください", "contact.addrT": "住所", "contact.addrD": "Ferhadija 24, 71000 サラエボ",
      "contact.phoneT": "電話", "contact.emailT": "メール", "contact.hoursT": "営業時間", "contact.hoursD": "月 – 日: 11:00 – 23:00",
      "footer.desc": "サラエボの中心フェルハディヤにあるブティックマッサージ＆スパ。",
      "footer.linksT": "クイックリンク", "footer.contactT": "お問い合わせ", "footer.copy": "© 2026 Zayn Massage & Spa. All rights reserved.", "footer.made": "Ferhadija · Sarajevo"
    },

    zh: {
      "brand.sub": "MASSAGE & SPA", "nav.about": "关于我们", "nav.services": "服务", "nav.gallery": "画廊", "nav.reviews": "评价", "nav.contact": "联系", "nav.book": "发送咨询", "nav.viewAll": "查看完整菜单",
      "hero.eyebrow": "Ferhadija · 萨拉热窝之心", "hero.word1": "专属", "hero.word2": "于您的", "hero.word3": "美好", "hero.word4": "时刻。",
      "hero.sub": "位于萨拉热窝老城中心的精品按摩与水疗沙龙。",
      "hero.cta1": "立即预约", "hero.cta2": "查看服务", "hero.scroll": "向下滚动",
      "transform.title": "将外界留在身后",
      "transform.beforeLabel": "之前", "transform.before1": "紧张", "transform.before2": "压力", "transform.before3": "疲劳",
      "transform.afterLabel": "之后", "transform.after1": "放松", "transform.after2": "恢复", "transform.after3": "平衡",
      "transform.hint": "拖动滑块",
      "wa.eyebrow": "咨询", "wa.title": "发送咨询",
      "wa.sub": "填写简短表格 — 然后选择 WhatsApp 或 Viber。消息将发送至 061 231 251。",
      "wa.lname": "姓名", "wa.lphone": "电话", "wa.lservice": "服务", "wa.selectPlaceholder": "选择服务",
      "wa.ldate": "希望日期（可选）", "wa.lnote": "写下留言 / 咨询", "wa.notePlaceholder": "在此写下您的咨询...", "wa.errNote": "请输入留言。",
      "wa.errName": "请输入姓名。", "wa.errPhone": "请输入电话。", "wa.errService": "请选择服务。",
      "wa.submit": "通过 WhatsApp 发送", "wa.submitViber": "通过 Viber 发送",
      "wa.msgIntro": "您好 Zayn Massage & Spa!\n我想发送咨询:",
      "wa.msgName": "姓名", "wa.msgPhone": "电话", "wa.msgService": "服务", "wa.msgDate": "希望日期", "wa.msgNote": "留言",

      "about.tag": "Zayn Lounge", "about.eyebrow": "关于我们", "about.quote": "「放松不是奢侈 — 而是回归自我。」",
      "about.p1": "Zayn Massage & Spa 是一家位于萨拉热窝中心 Ferhadija 街的精品沙龙。",
      "about.p2": "我们将传统波斯尼亚按摩技法与现代放松仪式相结合。",
      "about.stat1n": "6", "about.stat1l": "种不同护理", "about.stat2n": "100%", "about.stat2l": "天然精油", "about.stat3n": "365", "about.stat3l": "天全心投入", "about.stat4n": "60+", "about.stat4l": "分钟放松",
      "services.eyebrow": "菜单", "services.title": "护理菜单", "services.sub": "每项护理都按您的节奏定制 —<br> 选择今天最适合您的时长与手法。",
      "services.g1": "经典按摩", "services.g1types": "放松 • 运动 • 医疗按摩",
      "services.r30.h": "短暂休憩", "services.r30.p": "短而有效的按摩，帮助放松并释放日常紧张。当您需要快速恢复时尤为理想 — 尤其是在劳累的一天、久坐或体力消耗之后。",
      "services.r45.h": "均衡护理", "services.r45.p": "更长时间的护理，可进行更细致的按摩，并专注于您感觉最紧张的部位。特别适合背部、颈部、肩部和腿部，并根据您的需求选择手法。",
      "services.r60.h": "完全放松", "services.r60.p": "一小时全身护理与深度放松。按摩根据您的愿望与需求调整，特别关注紧张部位。是从日常压力中彻底抽离的完美选择。",
      "services.gFoot": "足部按摩",
      "services.foot.h": "放松与舒缓", "services.foot.p": "专为疲倦、负担过重的双脚设计。按摩有助于减轻沉重与紧绷感，促进更好的循环感受，并在长时间站立、行走或日常负荷后带来舒适的缓解。当双脚需要休息与呵护时最为理想。",
      "services.gVip": "VIP护理",
      "services.vip.h": "VIP套餐", "services.vip.p": "专属护理，打造完整的呵护与放松体验。套餐包含您选择的60分钟按摩、15分钟面部磨砂、面部按摩、舒缓面膜、头皮按摩以及足部按摩。护理结束后<strong>含桑拿</strong>，带来额外的放松与完整享受。",
      "services.harmony.h": "VIP HARMONY套餐", "services.harmony.p": "护肤与深度放松的和谐结合。护理以30分钟死海盐身体磨砂开始，随后是30分钟放松按摩。按摩后<strong>含桑拿</strong>，让您在全然平静与轻盈中结束。",
      "services.gHij": "拔罐（Hijama）",
      "services.hij.h": "传统拔罐", "services.hij.p": "Hijama是一种传统护理方法，在皮肤上使用可控负压，数百年来作为多种养生与传统方法的一部分被实践。适合希望以自然、传统方式放松并感受身体舒缓的人，以专业细致的方式进行。",
      "services.gBos": "波斯尼亚按摩",
      "services.bos.h": "传统波斯尼亚仪式", "services.bos.p": "受传统波斯尼亚身体护理启发的独特护理。您选择最适合的按摩类型，护理以温水与天然山羊皂进行。按摩后淋浴，以清洁、清新与完全放松的感受结束。",
      "quote.text": "每一次触碰，都讲述着安宁的故事。", "quote.cite": "Zayn Massage & Spa",
      "reviews.eyebrow": "评价", "reviews.title": "客人怎么说",
      "reviews.r1": "“Zayn Massage无疑是萨拉热窝最好的按摩！专业的员工、放松的氛围和惊人的技术。离开时我感觉完全焕然一新，背上的结节也明显好转。强烈推荐！！！”", "reviews.n1": "Nina O.",
      "reviews.r2": "“这个地方棒极了，员工也是 — 店主也很谦逊专业。您不会失望离开；按摩非常出色，按摩师全程确保我舒适。最后他们甚至为我们做了波斯尼亚咖啡……别处找不到这样的体验……”", "reviews.n2": "Mikky M.",
      "reviews.r3": "“我来过这家按摩沙龙，可以说对服务完全满意。空间干净整洁非常舒适，一进门气氛就很放松。员工友好、专业、用心对待客人☺️”", "reviews.n3": "Nejla M.",
      "reviews.r4": "“ 强烈推荐！专业、友善与服务超出所有预期。我们从未在别处获得过更有效、更专业的按摩 — 我们去过无数地方。重要的是我们有严重问题；离开时疼痛已消失，因为熟练专业的双手完成了工作。在我们迄今所有物理治疗中使用的额外仪器也从未做到类似效果。10天后我们感觉焕然一新，仿佛从未有过脊柱问题。衷心感谢整个团队 — 请继续保持。金手Mia，最好的理疗师 ❤️。向Omar先生致敬并感谢他的专业，也感谢他妻子的极大善意。很快再见 — 绝对值得从350多公里赶来，解决问题，像全新一样回家 ❤️❤️❤️”", "reviews.n4": "Ana O.",
      "reviews.r5": "“从进店到离开都是美妙体验。氛围平静、干净、非常放松，治疗师极其专业熟练。按摩力度适中，完全按需，不匆忙也不即兴。能感觉到他们知道自己在做什么，并且关心客人。护理后我感觉轻盈、完全放松。强烈推荐 — 一定会再来！”", "reviews.n5": "Mill.",
      "reviews.r6": "“如果来萨拉热窝，一定要来这里 — 我的治疗师叫Jenni，我和妈妈一起来，她的治疗师叫Tera，她们太好了，100%推荐！我放松下来，感觉所有压力都消失了。她们非常友善，我感到很放松。”", "reviews.n6": "Thanjeela K.",
      "reviews.r7": "“太棒了，女孩们用温暖的氛围迎接我们 — 真心推荐在这里预约按摩！”", "reviews.n7": "Micaela P.",
      "reviews.r8": "“我对服务非常满意。氛围放松，空间干净舒适，员工专业友好。拔罐质量极佳 — 正是我放松和释放紧张所需的。热忱推荐给所有想真正休息的人。Omar和在那里工作的女孩们也非常专业友善。”", "reviews.n8": "Lejla M.",
      "reviews.showMore": "显示更多", "reviews.showLess": "收起",
      "booking.eyebrow": "预约", "booking.title": "预约您的时段", "booking.sub": "选择适合您的服务、日期和时间。",
      "booking.f1t": "营业时间", "booking.f1d": "周一至周六: 10:00 – 20:00", "booking.f2t": "地址", "booking.f2d": "Ferhadija 24, 萨拉热窝", "booking.f3t": "电话",
      "booking.lservice": "服务", "booking.selectPlaceholder": "选择服务",
      "booking.opt.r30": "放松按摩 — 30分钟 (40 KM)", "booking.opt.r45": "放松按摩 — 45分钟 (55 KM)", "booking.opt.r60": "放松按摩 — 60分钟 (70 KM)", "booking.opt.vip": "VIP按摩 — 90分钟 (120 KM)", "booking.opt.bos": "波斯尼亚按摩 — 60分钟 (65 KM)", "booking.opt.hij": "拔罐 — 45分钟 (60 KM)",
      "booking.ldate": "日期", "booking.ltime": "时间", "booking.lname": "姓名", "booking.lphone": "电话", "booking.lemail": "邮箱", "booking.lnote": "备注（可选）",
      "booking.errService": "请选择服务。", "booking.errDate": "请选择日期。", "booking.errTime": "请选择时间。", "booking.errName": "请输入姓名。", "booking.errPhone": "请输入电话。", "booking.errEmail": "请输入有效邮箱。",
      "booking.submit": "确认预约", "booking.thanksTitle": "谢谢您！", "booking.thanksText": "您的预约已记录。",
      "booking.newBooking": "新预约", "booking.sumService": "服务", "booking.sumDate": "日期", "booking.sumTime": "时间", "booking.sumName": "姓名", "booking.sumTotal": "价格", "booking.pickHint": "已选",
      "contact.eyebrow": "联系", "contact.title": "欢迎来访", "contact.addrT": "地址", "contact.addrD": "Ferhadija 24, 71000 萨拉热窝",
      "contact.phoneT": "电话", "contact.emailT": "邮箱", "contact.hoursT": "营业时间", "contact.hoursD": "周一至周日: 11:00 – 23:00",
      "footer.desc": "位于萨拉热窝中心 Ferhadija 的精品按摩与水疗沙龙。",
      "footer.linksT": "快速链接", "footer.contactT": "联系", "footer.copy": "© 2026 Zayn Massage & Spa. 保留所有权利。", "footer.made": "Ferhadija · Sarajevo"
    },

    ko: {
      "brand.sub": "MASSAGE & SPA", "nav.about": "소개", "nav.services": "서비스", "nav.gallery": "갤러리", "nav.reviews": "리뷰", "nav.contact": "연락처", "nav.book": "문의 보내기", "nav.viewAll": "전체 메뉴 보기",
      "hero.eyebrow": "페르하디야 · 사라예보의 중심", "hero.word1": "오직", "hero.word2": "당신만을", "hero.word3": "위한", "hero.word4": "순간.",
      "hero.sub": "사라예보 구시가지 중심의 부티크 마사지 & 스파.",
      "hero.cta1": "예약하기", "hero.cta2": "메뉴 보기", "hero.scroll": "스크롤",
      "transform.title": "바깥 세상은 뒤에 두세요",
      "transform.beforeLabel": "이전", "transform.before1": "긴장", "transform.before2": "스트레스", "transform.before3": "피로",
      "transform.afterLabel": "이후", "transform.after1": "이완", "transform.after2": "회복", "transform.after3": "균형",
      "transform.hint": "슬라이더를 드래그하세요",
      "wa.eyebrow": "문의", "wa.title": "문의 보내기",
      "wa.sub": "짧은 양식을 작성한 뒤 WhatsApp 또는 Viber를 선택하세요. 메시지는 061 231 251로 전송됩니다.",
      "wa.lname": "이름", "wa.lphone": "전화번호", "wa.lservice": "서비스", "wa.selectPlaceholder": "서비스 선택",
      "wa.ldate": "희망 날짜 (선택)", "wa.lnote": "메시지 / 문의 작성", "wa.notePlaceholder": "문의를 여기에 작성하세요...", "wa.errNote": "메시지를 입력해 주세요.",
      "wa.errName": "이름을 입력해 주세요.", "wa.errPhone": "전화번호를 입력해 주세요.", "wa.errService": "서비스를 선택해 주세요.",
      "wa.submit": "WhatsApp으로 보내기", "wa.submitViber": "Viber로 보내기",
      "wa.msgIntro": "안녕하세요 Zayn Massage & Spa!\n문의를 보내고 싶습니다:",
      "wa.msgName": "이름", "wa.msgPhone": "전화", "wa.msgService": "서비스", "wa.msgDate": "희망 날짜", "wa.msgNote": "메시지",

      "about.tag": "Zayn Lounge", "about.eyebrow": "소개", "about.quote": "「휴식은 사치가 아니라 자신에게 돌아가는 것입니다.」",
      "about.p1": "Zayn Massage & Spa는 사라예보 중심 페르하디야에 위치한 부티크 살롱입니다.",
      "about.p2": "전통 보스니아 마사지 기법과 현대적인 휴식 의식을 결합합니다.",
      "about.stat1n": "6", "about.stat1l": "가지 트리트먼트", "about.stat2n": "100%", "about.stat2l": "천연 오일", "about.stat3n": "365", "about.stat3l": "일 헌신", "about.stat4n": "60+", "about.stat4l": "분 릴랙스",
      "services.eyebrow": "메뉴", "services.title": "트리트먼트 메뉴", "services.sub": "모든 트리트먼트는 귀하의 페이스에 맞춰 —<br> 오늘 맞는 시간과 기법을 선택하세요.",
      "services.g1": "클래식 마사지", "services.g1types": "릴렉스 • 스포츠 • 메디컬 마사지",
      "services.r30.h": "짧은 휴식", "services.r30.p": "일상의 긴장에서 벗어나 이완하기 위한 짧지만 효과적인 마사지입니다. 힘든 하루, 오래 앉아 있거나 신체 활동 후 빠른 회복이 필요할 때 이상적입니다.",
      "services.r45.h": "균형 잡힌 트리트먼트", "services.r45.p": "더 세밀한 마사지와 긴장이 가장 심한 부위에 집중할 수 있는 더 긴 트리트먼트입니다. 특히 등, 목, 어깨, 다리에 적합하며, 필요에 따라 기법을 선택합니다.",
      "services.r60.h": "완전한 이완", "services.r60.p": "전신 케어와 깊은 이완에 바치는 한 시간입니다. 마사지는 원하시는 바와 필요에 맞게 조정되며, 긴장된 부위에 특별한 주의를 기울입니다. 일상 스트레스에서 완전히 벗어나는 완벽한 선택입니다.",
      "services.gFoot": "발 마사지",
      "services.foot.h": "이완과 해소", "services.foot.p": "피곤하고 부담이 쌓인 발을 위해 특별히 마련되었습니다. 마사지는 무거움과 긴장감을 줄이고, 더 나은 순환감을 느끼도록 도우며, 오래 서 있거나 걷거나 일상 부담 후 기분 좋은 완화를 줍니다. 발에 휴식과 관심이 필요할 때 이상적입니다.",
      "services.gVip": "VIP 트리트먼트",
      "services.vip.h": "VIP 패키지", "services.vip.p": "케어와 이완의 완전한 경험으로 설계된 독점 트리트먼트입니다. 원하시는 마사지 60분, 얼굴 스크럽 15분, 얼굴 마사지, 진정 마스크, 두피 마사지, 발 마사지가 포함됩니다. 트리트먼트 후 <strong>사우나 포함</strong>으로 추가적인 이완과 완전한 즐거움을 드립니다.",
      "services.harmony.h": "VIP HARMONY 패키지", "services.harmony.p": "피부 케어와 깊은 이완의 조화로운 결합입니다. 사해 소금 바디 스크럽 30분으로 시작한 뒤, 이완 마사지 30분이 이어집니다. 마사지 후 <strong>사우나 포함</strong>으로 완전한 고요함과 가벼움 속에서 마무리합니다.",
      "services.gHij": "히자마",
      "services.hij.h": "전통 부항", "services.hij.p": "히자마는 피부에 조절된 흡입을 사용하는 전통 케어 방법으로, 수 세기 동안 다양한 웰니스와 전통적 접근의 일부로 시행되어 왔습니다. 자연스럽고 전통적인 이완과 몸의 해소감을 원하는 분들을 위해, 전문적이고 세심한 방식으로 제공됩니다.",
      "services.gBos": "보스니아 마사지",
      "services.bos.h": "전통 보스니아 의식", "services.bos.p": "전통적인 보스니아 바디 케어에서 영감을 받은 독특한 트리트먼트입니다. 가장 맞는 마사지 유형을 선택하시면, 따뜻한 물과 천연 염소 비누로 진행됩니다. 마사지 후 샤워가 이어져 청결함, 상쾌함, 완전한 이완감으로 마무리합니다.",
      "quote.text": "모든 손길이 평화의 이야기를 전합니다.", "quote.cite": "Zayn Massage & Spa",
      "reviews.eyebrow": "후기", "reviews.title": "손님들의 이야기",
      "reviews.r1": "“Zayn Massage는 의심할 여지 없이 사라예보 최고의 마사지입니다! 전문 직원, 편안한 분위기, 놀라운 테크닉. 완전히 상쾌하게 나왔고 등 결림도 눈에 띄게 나아졌습니다. 강력 추천!!!”", "reviews.n1": "Nina O.",
      "reviews.r2": "“이곳은 정말 대단하고 직원도 마찬가지입니다 — 사장님도 겸손하고 전문적입니다. 불만족스럽게 떠나지 않을 거예요. 마사지가 훌륭했고, 마사지사가 서비스 내내 편안하게 해 주었습니다. 마지막에는 보스니아 커피까지 만들어 주셨어요… 이런 건 어디에서도 못 얻습니다…”", "reviews.n2": "Mikky M.",
      "reviews.r3": "“이 마사지 살롱을 방문했고 서비스에 완전히 만족한다고 말할 수 있습니다. 공간이 깨끗하고 정돈되어 매우 쾌적하며, 들어서는 순간부터 분위기가 편안합니다. 직원은 친절하고 전문적이며 고객에게 헌신적입니다☺️”", "reviews.n3": "Nejla M.",
      "reviews.r4": "“ 강력 추천합니다! 전문성, 친절함, 서비스가 모든 기대를 뛰어넘습니다. 이보다 효과적이고 전문적인 마사지는 어디에서도 받지 못했습니다 — 수없이 다른 곳을 다녀봤습니다. 중요한 점은 큰 문제가 있었다는 것. 떠날 때 통증이 사라졌는데, 숙련되고 전문적인 손이 일을 해 주었기 때문입니다. 지금까지 받은 모든 물리치료의 추가 기기들로도 이런 것은 해 주지 않았습니다. 10일 후 새사람이 된 기분이고 척추 문제가 없었던 것 같습니다. 팀 전체에 큰 감사 — 계속해 주세요. 황금 손 Mia, 최고의 물리치료사 ❤️. Omar 씨께 전문성에 감사드리고, 부인께도 큰 친절에 감사드립니다. 곧 뵙겠습니다 — 350km 이상 와서 문제를 해결하고 새사람처럼 집에 돌아갈 가치가 분명히 있습니다 ❤️❤️❤️”", "reviews.n4": "Ana O.",
      "reviews.r5": "“살롱에 들어선 순간부터 나갈 때까지 멋진 경험이었습니다. 분위기는 고요하고 깨끗하며 매우 편안하고, 테라피스트는 매우 전문적이고 능숙합니다. 마사지는 적당히, 필요에 정확히 맞춰, 서두르거나 즉흥 없이 진행되었습니다. 무엇을 하는지 알고 고객을 아끼는 것이 느껴집니다. 트리트먼트 후 가볍고 완전히 이완되었습니다. 강력 추천 — 꼭 다시 올게요!”", "reviews.n5": "Mill.",
      "reviews.r6": "“사라예보에 오신다면 꼭 여기로 — Jenni라는 테라피스트가 있었고 엄마와 함께 왔는데, 엄마는 Tera라는 테라피스트였고 정말 좋았어요. 100% 추천! 이완할 수 있었고 갖고 있던 스트레스가 모두 사라진 느낌입니다. 매우 친절하고 편안합니다.”", "reviews.n6": "Thanjeela K.",
      "reviews.r7": "“정말 놀라웠고, 소녀들이 따뜻한 분위기로 맞이해 주었습니다 — 여기서 마사지를 예약하시길 진심으로 추천합니다!”", "reviews.n7": "Micaela P.",
      "reviews.r8": "“서비스에 매우 만족합니다. 분위기는 편안하고, 공간은 깨끗하고 쾌적하며, 직원은 전문적이고 친절합니다. 히자마는 매우 훌륭했습니다 — 이완과 긴장 해소에 딱 필요한 것이었습니다. 진정한 휴식을 원하는 모든 분께 따뜻한 추천. Omar와 그곳에서 일하는 소녀들도 매우 전문적이고 친절합니다.”", "reviews.n8": "Lejla M.",
      "reviews.showMore": "더 보기", "reviews.showLess": "접기",
      "booking.eyebrow": "예약", "booking.title": "예약하기", "booking.sub": "원하시는 서비스, 날짜, 시간을 선택하세요.",
      "booking.f1t": "영업시간", "booking.f1d": "월 – 토: 10:00 – 20:00", "booking.f2t": "위치", "booking.f2d": "Ferhadija 24, 사라예보", "booking.f3t": "전화",
      "booking.lservice": "서비스", "booking.selectPlaceholder": "서비스 선택",
      "booking.opt.r30": "릴랙스 마사지 — 30분 (40 KM)", "booking.opt.r45": "릴랙스 마사지 — 45분 (55 KM)", "booking.opt.r60": "릴랙스 마사지 — 60분 (70 KM)", "booking.opt.vip": "VIP 마사지 — 90분 (120 KM)", "booking.opt.bos": "보스니아 마사지 — 60분 (65 KM)", "booking.opt.hij": "하지마 — 45분 (60 KM)",
      "booking.ldate": "날짜", "booking.ltime": "시간", "booking.lname": "이름", "booking.lphone": "전화번호", "booking.lemail": "이메일", "booking.lnote": "메모 (선택)",
      "booking.errService": "서비스를 선택해 주세요.", "booking.errDate": "날짜를 선택해 주세요.", "booking.errTime": "시간을 선택해 주세요.", "booking.errName": "이름을 입력해 주세요.", "booking.errPhone": "전화번호를 입력해 주세요.", "booking.errEmail": "유효한 이메일을 입력해 주세요.",
      "booking.submit": "예약 확인", "booking.thanksTitle": "감사합니다!", "booking.thanksText": "예약이 접수되었습니다.",
      "booking.newBooking": "새 예약", "booking.sumService": "서비스", "booking.sumDate": "날짜", "booking.sumTime": "시간", "booking.sumName": "이름", "booking.sumTotal": "가격", "booking.pickHint": "선택됨",
      "contact.eyebrow": "연락처", "contact.title": "방문해 주세요", "contact.addrT": "주소", "contact.addrD": "Ferhadija 24, 71000 사라예보",
      "contact.phoneT": "전화", "contact.emailT": "이메일", "contact.hoursT": "영업시간", "contact.hoursD": "월 – 일: 11:00 – 23:00",
      "footer.desc": "사라예보 중심 페르하디야의 부티크 마사지 & 스파 살롱.",
      "footer.linksT": "빠른 링크", "footer.contactT": "연락처", "footer.copy": "© 2026 Zayn Massage & Spa. All rights reserved.", "footer.made": "Ferhadija · Sarajevo"
    }
  };

  function t(lang, key) {
    return (i18n[lang] && i18n[lang][key]) || (i18n.en && i18n.en[key]) || (i18n.bs && i18n.bs[key]);
  }

  function applyLang(lang) {
    if (!i18n[lang]) lang = "bs";
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var text = t(lang, key);
      if (text === undefined) return;
      if (String(text).indexOf("<") !== -1) el.innerHTML = text;
      else el.textContent = text;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var text = t(lang, key);
      if (text !== undefined) el.placeholder = text;
    });

    var langSelect = document.getElementById("langSelect");
    if (langSelect) langSelect.value = lang;

    try { localStorage.setItem("zayn-lang", lang); } catch (e) {}
  }

  window.toggleReview = function (btn) {
    var card = btn.closest(".review-card");
    if (!card) return;
    var expanded = card.classList.toggle("expanded");
    var lang = document.documentElement.lang || "bs";
    btn.textContent = expanded
      ? (t(lang, "reviews.showLess") || "Prikaži manje")
      : (t(lang, "reviews.showMore") || "Prikaži više");
  };

  function initReveal() {
    document.querySelectorAll(".service-group").forEach(function (group) {
      group.querySelectorAll(".service-item.reveal").forEach(function (item, i) {
        item.style.setProperty("--reveal-delay", (i * 0.1) + "s");
      });
    });

    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    els.forEach(function (el) { observer.observe(el); });
  }

  function initHeader() {
    var header = document.getElementById("siteHeader");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initBurger() {
    var burger = document.getElementById("burgerBtn");
    var nav = document.getElementById("navLinks");
    if (!burger || !nav) return;
    burger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  function initHeroMotes() {
    var wrap = document.getElementById("heroMotes");
    if (!wrap) return;
    for (var i = 0; i < 24; i++) {
      var mote = document.createElement("div");
      mote.className = "mote";
      var size = 4 + Math.random() * 8;
      mote.style.left = Math.random() * 100 + "%";
      mote.style.width = size + "px";
      mote.style.height = size + "px";
      mote.style.animationDuration = 8 + Math.random() * 14 + "s";
      mote.style.animationDelay = Math.random() * 12 + "s";
      wrap.appendChild(mote);
    }
  }


  function initWhatsAppForm() {
    var form = document.getElementById("whatsappForm");
    if (!form) return;

    var CONTACT_NUMBER = "38761231251";
    var waBtn = document.getElementById("waSendBtn");
    var viberBtn = document.getElementById("viberSendBtn");

    function setError(id, on) {
      var el = document.getElementById(id);
      if (!el) return;
      var field = el.closest(".field");
      if (field) field.classList.toggle("error", !!on);
    }

    function buildMessage() {
      var lang = document.documentElement.lang || "bs";
      var name = (document.getElementById("waName").value || "").trim();
      var note = (document.getElementById("waNote").value || "").trim();

      var ok = true;
      if (!name) { setError("waName", true); ok = false; } else setError("waName", false);
      if (!note) { setError("waNote", true); ok = false; } else setError("waNote", false);
      if (!ok) return null;

      return [
        t(lang, "wa.msgIntro") || "Zdravo Zayn Massage & Spa!",
        "",
        (t(lang, "wa.msgName") || "Ime") + ": " + name,
        (t(lang, "wa.msgNote") || "Poruka") + ": " + note
      ].join("\n");
    }

    function sendWhatsApp() {
      var message = buildMessage();
      if (!message) return;
      var url = "https://wa.me/" + CONTACT_NUMBER + "?text=" + encodeURIComponent(message);
      window.open(url, "_blank");
    }

    function sendViber() {
      var message = buildMessage();
      if (!message) return;
      // Viber otvara chat na broj; poruku kopiramo da se može odmah zalijepiti
      var openChat = function () {
        window.location.href = "viber://chat?number=%2B" + CONTACT_NUMBER;
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(message).then(openChat).catch(openChat);
      } else {
        openChat();
      }
    }

    if (waBtn) waBtn.addEventListener("click", sendWhatsApp);
    if (viberBtn) viberBtn.addEventListener("click", sendViber);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      sendWhatsApp();
    });

    ["waName", "waNote"].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.addEventListener("input", function () { setError(id, false); });
    });
  }

  function initBeforeAfter() {
    var slider = document.getElementById("baSlider");
    var afterLayer = document.getElementById("baAfterLayer");
    var handle = document.getElementById("baHandle");
    if (!slider || !afterLayer || !handle) return;

    var pos = 50;
    var dragging = false;

    function setPosition(pct) {
      pos = Math.min(92, Math.max(8, pct));
      // Desno = više opuštenosti (zlatni after sloj raste slijeva)
      afterLayer.style.clipPath = "inset(0 " + (100 - pos) + "% 0 0)";
      handle.style.left = pos + "%";
      handle.setAttribute("aria-valuenow", String(Math.round(pos)));
    }

    function pctFromClientX(clientX) {
      var rect = slider.getBoundingClientRect();
      return ((clientX - rect.left) / rect.width) * 100;
    }

    function startDrag(e) {
      dragging = true;
      if (e.type === "mousedown") e.preventDefault();
    }

    function stopDrag() { dragging = false; }

    function onMove(clientX) {
      if (!dragging) return;
      setPosition(pctFromClientX(clientX));
    }

    handle.addEventListener("mousedown", startDrag);
    handle.addEventListener("touchstart", startDrag, { passive: true });
    window.addEventListener("mousemove", function (e) { onMove(e.clientX); });
    window.addEventListener("touchmove", function (e) {
      if (dragging && e.touches[0]) onMove(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);

    slider.addEventListener("mousedown", function (e) {
      if (e.target === handle || handle.contains(e.target)) return;
      setPosition(pctFromClientX(e.clientX));
    });
    slider.addEventListener("touchstart", function (e) {
      if (e.target === handle || handle.contains(e.target)) return;
      if (e.touches[0]) setPosition(pctFromClientX(e.touches[0].clientX));
    }, { passive: true });

    handle.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); setPosition(pos - 4); }
      if (e.key === "ArrowRight") { e.preventDefault(); setPosition(pos + 4); }
    });

    setPosition(50);
  }

  function initNavDropdown() {
    var dropdown = document.getElementById("navDropdown");
    var btn = document.getElementById("navDropdownBtn");
    var nav = document.getElementById("navLinks");
    if (!dropdown || !btn) return;

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = dropdown.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });

    dropdown.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        dropdown.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        if (nav) nav.classList.remove("open");
      });
    });

    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var savedLang = "bs";
    try { savedLang = localStorage.getItem("zayn-lang") || "bs"; } catch (e) {}
    if (!i18n[savedLang]) savedLang = "bs";
    applyLang(savedLang);

    var langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.addEventListener("change", function () {
        applyLang(this.value);
      });
    }

    initReveal();
    initHeader();
    initNavDropdown();
    initBurger();
    initHeroMotes();
    initBeforeAfter();
    initWhatsAppForm();
  });
})();
