let songlinks = [];
let songs = [];
let songs_listened = [];
let currentsongindex = 0;
let currentAudio = null;
let current_index = 0;
let newVolume = 0.7;



const songs2 = [
  {
    title: "Agar Tum Saath Ho",
    artist: "Alka Yagnik, Arijit Singh",
    filePath: "songs/agar_tum_saath_ho.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/agar_tum_saath_ho.jpeg" alt="agar_tum_saath_ho_img">'
  },
  {
    title: "Apna Bana Le",
    artist: "Arijit Singh",
    filePath: "songs/apna_bana_le.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/apna_bana_le.jpeg" alt="apna_bana_le_img">'
  },
  {
    title: "On & On",
    artist: "Cartoon feat. Daniel Levi",
    filePath: "songs/cartoon_on_and_on.mp3",
    language: "English",
    imgTag: '<img class="song_card_image" src="song_img/cartoon_on_and_on.jpeg" alt="cartoon_on_and_on_img">'
  },
  {
    title: "Dil Diyan Gallan",
    artist: "Atif Aslam",
    filePath: "songs/dil_diyaan_gallan.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/dil_diyaan_gallan.jpeg" alt="dil_diyaan_gallan_img">'
  },
  {
    title: "Finding Her",
    artist: "LesFM (No Copyright Music)",
    filePath: "songs/finding_her.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/finding_her.jpeg" alt="finding_her_img">'
  },
  {
    title: "Humdard",
    artist: "Arijit Singh",
    filePath: "songs/humdard_ek_villian.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/humdard_ek_villian.jpeg" alt="humdard_ek_villian_img">'
  },
  {
    title: "O Maahi",
    artist: "Arijit Singh",
    filePath: "songs/o_maahi.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/o_maahi.jpeg" alt="o_maahi_img">'
  },
  {
    title: "Royalty",
    artist: "Egzod, Maestro Chives, Neoni",
    filePath: "songs/royalty_song.mp3",
    language: "English",
    imgTag: '<img class="song_card_image" src="song_img/royalty.jpeg" alt="royalty_img">'
  },
  {
    title: "Sajni (Laapataa Ladies)",
    artist: "Ram Sampath, Arijit Singh",
    filePath: "songs/sajni_laapata_ladies.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/sajni_laapata_ladies.jpeg" alt="sajni_laapata_ladies_img">'
  },
  {
    title: "Sapphire",
    artist: "Tobu",
    filePath: "songs/sapphire.mp3",
    language: "English",
    imgTag: '<img class="song_card_image" src="song_img/sapphire.jpeg" alt="sapphire_img">'
  },
  {
    title: "Satranga (Animal)",
    artist: "Arijit Singh",
    filePath: "songs/satranga_animal.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/satranga_animal.jpeg" alt="satranga_animal_img">'
  },
  {
    title: "Tujhe Kitna Chahne Lage",
    artist: "Arijit Singh",
    filePath: "songs/tughe_kitna_chahne_lage_hum.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/tughe_kitna_chahne_lage_hum.jpeg" alt="tughe_kitna_chahne_lage_hum_img">'
  },
  {
    title: "Closer",
    artist: "The Chainsmokers",
    filePath: "songs/the_chainsmokers_closer.mp3",
    language: "English",
    imgTag: '<img class="song_card_image" src="song_img/the_chainsmokers_closer.jpeg" alt="the_chainsmokers_closer_img">'
  },
  {
    title: "Lovely",
    artist: "Billie Eilish, Khalid",
    filePath: "songs/lovely_billie_eilish_khalid.mp3",
    language: "English",
    imgTag: '<img class="song_card_image" src="song_img/lovely_billie_eilish_khalid.jpeg" alt="lovely_billie_eilish_khalid_img">'
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    filePath: "songs/imagine_dragons_believer.mp3",
    language: "English",
    imgTag: '<img class="song_card_image" src="song_img/imagine_dragons_believer.jpeg" alt="imagine_dragons_believer_img">'
  },
  {
    title: "Let Me Down Slowly",
    artist: "Alec Benjamin",
    filePath: "songs/let_me_down_slowly.mp3",
    language: "English",
    imgTag: '<img class="song_card_image" src="song_img/let_me_down_slowly.jpeg" alt="let_me_down_slowly_img">'
  },
  {
    title: "Alone",
    artist: "Alan Walker",
    filePath: "songs/alone_alan_walker.mp3",
    language: "English",
    imgTag: '<img class="song_card_image" src="song_img/alone_alan_walker.jpeg" alt="alone_alan_walker_img">'
  },
  {
    title: "Night Changes",
    artist: "One Direction",
    filePath: "songs/one_direction_night_changes.mp3",
    language: "English",
    imgTag: '<img class="song_card_image" src="song_img/one_direction_night_changes.jpeg" alt="one_direction_night_changes_img">'
  },
  {
    title: "Faded",
    artist: "Alan Walker",
    filePath: "songs/faded_alan_walker.mp3",
    language: "English",
    imgTag: '<img class="song_card_image" src="song_img/faded_alan_walker.jpeg" alt="faded_alan_walker_img">'
  },
  {
    title: "Mere Sohneya",
    artist: "Sachet-Parampara, Parampara Thakur",
    filePath: "songs/mere_sohneya_kabir_singh.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/mere_sohneya_kabir_singh.jpeg" alt="mere_sohneya_kabir_singh_img">'
  },
  {
    title: "Malang Sajna",
    artist: "Sachet-Parampara, Parampara Thakur",
    filePath: "songs/malang_sajna.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/malang_sajna.jpeg" alt="malang_sajna_img">'
  },
  {
    title: "Zinda",
    artist: "Anirudh Ravichander",
    filePath: "songs/zinda_bhaag_milkha_bhaag.mp3", // Assuming this is "Zinda" from Bhaag Milkha Bhaag
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/zinda_bhaag_milkha_bhaag.jpeg" alt="zinda_bhaag_milkha_bhaag_img">'
  },
  {
    title: "Hukum (Jailer)",
    artist: "Anirudh Ravichander",
    filePath: "songs/hukum_jailer.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/hukum_jailer.jpeg" alt="hukum_jailer_img">'
  },
  {
    title: "Chaleya Jawan",
    artist: "Arijit Singh, Shilpa Rao",
    filePath: "songs/chaleya_jawan.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/chaleya_jawan.jpeg" alt="chaleya_jawan_img">'
  },
  {
    title: "Why This Kolaveri Di",
    artist: "Dhanush",
    filePath: "songs/why_this_kolaveri_di.mp3",
    language: "Tamil", // This is a Tamil song, originally
    imgTag: '<img class="song_card_image" src="song_img/why_this_kolaveri_di.jpeg" alt="why_this_kolaveri_di_img">'
  },
  {
    title: "Nashe Si Chadh Gayi",
    artist: "Arijit Singh",
    filePath: "songs/nashe_si_chadh_gayi.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/nashe_si_chadh_gayi.jpeg" alt="nashe_si_chadh_gayi_img">'
  },
  {
    title: "Ghungroo (War)",
    artist: "Arijit Singh, Shilpa Rao",
    filePath: "songs/ghungroo_war.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/ghungroo_war.jpeg" alt="ghungroo_war_img">'
  },
  {
    title: "Tainu Khabar Nahi",
    artist: "Various", // Could be from an album, or various artists depending on version
    filePath: "songs/tainu_khabar_nahi.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/tainu_khabar_nahi.jpeg" alt="tainu_khabar_nahi_img">'
  },
  {
    title: "Tauba Tauba (Bad Newz)",
    artist: "Payal Dev, Jubin Nautiyal",
    filePath: "songs/tauba_tauba_bad_newz.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/tauba_tauba_bad_newz.jpeg" alt="tauba_tauba_bad_newz_img">'
  },
  {
    title: "Tere Vaaste",
    artist: "Varun Jain, Sachin-Jigar, Shadab Faridi, Altamash Faridi",
    filePath: "songs/tere_vaaste.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/tere_vaaste.jpeg" alt="tere_vaaste_img">'
  },
  {
    title: "Saibo",
    artist: "Tochi Raina, Shreya Ghoshal",
    filePath: "songs/saibo.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/saibo.jpeg" alt="saibo_img">'
  },
  {
    title: "Main Rang Sharbaton Ka",
    artist: "Atif Aslam, Chinmayi Sripada",
    filePath: "songs/main_rang_sharbaton_ka.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/main_rang_sharbaton_ka.jpeg" alt="main_rang_sharbaton_ka_img">'
  },
  {
    title: "Tera Hone Laga Hoon",
    artist: "Atif Aslam, Alisha Chinai",
    filePath: "songs/tera_hone_laga_hoon.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/tera_hone_laga_hoon.jpeg" alt="tera_hone_laga_hoon_img">'
  },
  {
    title: "Param Sundari",
    artist: "Shreya Ghoshal",
    filePath: "songs/param_sundari.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/param_sundari.jpeg" alt="param_sundari_img">'
  },
  {
    title: "Kun Faya Kun",
    artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
    filePath: "songs/kun_faya_kun.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/kun_faya_kun.jpeg" alt="kun_faya_kun_img">'
  },
  {
    title: "Jai Ho (Slumdog Millionaire)",
    artist: "A.R. Rahman, Sukhwinder Singh, Mahalaxmi Iyer, Vijay Prakash",
    filePath: "songs/jai_ho_slumdog_millionaire.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/jai_ho_slumdog_millionaire.jpeg" alt="jai_ho_slumdog_millionaire_img">'
  },
  {
    title: "Hawayein",
    artist: "Arijit Singh, Pritam",
    filePath: "songs/hawayein.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/hawayein.jpeg" alt="hawayein_img">'
  },
  {
    title: "Kabira",
    artist: "Tochi Raina, Rekha Bhardwaj",
    filePath: "songs/kabira.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/kabira.jpeg" alt="kabira_img">'
  },
  {
    title: "Tum Se Hi",
    artist: "Mohit Chauhan",
    filePath: "songs/tum_se_hi_jab_we_met.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/tum_se_hi_jab_we_met.jpeg" alt="tum_se_hi_jab_we_met_img">'
  },
  {
    title: "Jeene Laga Hoon",
    artist: "Atif Aslam, Shreya Ghoshal",
    filePath: "songs/jeene_laga_hoon.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/jeene_laga_hoon.jpeg" alt="jeene_laga_hoon_img">'
  },
  {
    title: "Ve Kamleya",
    artist: "Arijit Singh, Shreya Ghoshal",
    filePath: "songs/ve_kamleya.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/ve_kamleya.jpeg" alt="ve_kamleya_img">'
  },
  {
    title: "Samjhawan",
    artist: "Arijit Singh, Shreya Ghoshal",
    filePath: "songs/samjhawan.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/samjhawan.jpeg" alt="samjhawan_img">'
  },
  {
    title: "Tum Kya Mile",
    artist: "Pritam, Arijit Singh, Shreya Ghoshal",
    filePath: "songs/tum_kya_mile.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/tum_kya_mile.jpeg" alt="tum_kya_mile_img">'
  },
  {
    title: "Millionaire Song",
    artist: "Unknown", // Please specify artist if known
    filePath: "songs/millionaire_song.mp3",
    language: "Hindi", // Assuming English from filename
    imgTag: '<img class="song_card_image" src="song_img/millionaire_song.jpeg" alt="millionaire_song_img">'
  },
  {
    title: "Dheere Dheere Se Mere Zindagi",
    artist: "Yo Yo Honey Singh",
    filePath: "songs/dheere_dheere_se_mere_zindagi.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/dheere_dheere_se_mere_zindagi.jpeg" alt="dheere_dheere_se_mere_zindagi_img">'
  },
  {
    title: "Brown Rang",
    artist: "Yo Yo Honey Singh",
    filePath: "songs/brown_rang.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/brown_rang.jpeg" alt="brown_rang_img">'
  },
  {
    title: "Blue Eyes",
    artist: "Yo Yo Honey Singh",
    filePath: "songs/blue_eyes.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/blue_eyes.jpeg" alt="blue_eyes_img">'
  },
  {
    title: "Love Dose",
    artist: "Yo Yo Honey Singh",
    filePath: "songs/love_dose.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/love_dose.jpeg" alt="love_dose_img">'
  },
  {
    title: "Desi Kalakaar",
    artist: "Yo Yo Honey Singh",
    filePath: "songs/desi_kalakaar.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/desi_kalakaar.jpeg" alt="desi_kalakaar_img">'
  },
  {
    title: "Mitwa",
    artist: "Shafqat Amanat Ali, Shankar Mahadevan, Caralisa Monteiro",
    filePath: "songs/mitwa.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/mitwa.jpeg" alt="mitwa_img">'
  },
  {
    title: "Humraah Malang",
    artist: "Sachet Tandon",
    filePath: "songs/humraah_malang.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/humraah_malang.jpeg" alt="humraah_malang_img">'
  },
  {
    title: "Phir Bhi Tumko Chahunga",
    artist: "Arijit Singh, Shashaa Tirupati",
    filePath: "songs/phir_bhi_tumko_chahunga.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/phir_bhi_tumko_chahunga.jpeg" alt="phir_bhi_tumko_chahunga_img">'
  },
  {
    title: "O Saathi",
    artist: "Atif Aslam",
    filePath: "songs/o_saathi.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/o_saathi.jpeg" alt="o_saathi_img">'
  },
  {
    title: "Tujh Mein Rab Dikhta Hain",
    artist: "Roop Kumar Rathod",
    filePath: "songs/tujh_main_rab_dikhata_hain.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/tujh_main_rab_dikhata_hain.jpeg" alt="tujh_main_rab_dikhata_hain_img">'
  },
  {
    title: "Ve Maahi",
    artist: "Arijit Singh, Neha Kakkar",
    filePath: "songs/ve_maahi.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/ve_maahi.jpeg" alt="ve_maahi_img">'
  },
  {
    title: "Janam Janam",
    artist: "Arijit Singh, Antara Mitra",
    filePath: "songs/janam_janam.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/janam_janam.jpeg" alt="janam_janam_img">'
  },
  {
    title: "Ae Dil Hai Mushkil",
    artist: "Arijit Singh",
    filePath: "songs/ae_dil_hai_mushkil.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/ae_dil_hai_mushkil.jpeg" alt="ae_dil_hai_mushkil_img">'
  },
  {
    title: "Kalank Title Track",
    artist: "Arijit Singh",
    filePath: "songs/kalank_title_track.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/kalank_title_track.jpeg" alt="kalank_title_track_img">'
  },
  {
    title: "Tum Hi Aana (Marjaavaan)",
    artist: "Jubin Nautiyal",
    filePath: "songs/tum_hi_aana_marjaavaan.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/tum_hi_aana_marjaavaan.jpeg" alt="tum_hi_aana_marjaavaan_img">'
  },
  {
    title: "Raataan Lambiyan (Shershaah)",
    artist: "Jubin Nautiyal, Asees Kaur",
    filePath: "songs/raataan_lambiyan_shershaah.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/raataan_lambiyan_shershaah.jpeg" alt="raataan_lambiyan_shershaah_img">'
  },
  {
    title: "Hamari Adhuri Kahani",
    artist: "Arijit Singh",
    filePath: "songs/hamari_adhuri_kahani.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/hamari_adhuri_kahani.jpeg" alt="hamari_adhuri_kahani_img">'
  },
  {
    title: "Shayad (Love Aaj Kal)",
    artist: "Arijit Singh",
    filePath: "songs/shayad_love_aaj_kal.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/shayad_love_aaj_kal.jpeg" alt="shayad_love_aaj_kal_img">'
  },
  {
    title: "Channa Mereya",
    artist: "Arijit Singh",
    filePath: "songs/channa_mereya.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/channa_mereya.jpeg" alt="channa_mereya_img">'
  },
  {
    title: "Kesariya (Brahmastra)",
    artist: "Arijit Singh",
    filePath: "songs/kesariya_brahmastra.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/kesariya_brahmastra.jpeg" alt="kesariya_brahmastra_img">'
  },
  {
    title: "Hanuman Chalisa",
    artist: "Various", // Many versions exist, specify if a particular artist is preferred
    filePath: "songs/hanuman_chalisa.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/hanuman_chalisa.jpeg" alt="hanuman_chalisa_img">'
  },
  {
    title: "Aasman Ko Chukar Dekha",
    artist: "Various", // Often a patriotic song, various artists
    filePath: "songs/aasman_ko_chukar_dekha.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/aasman_ko_chukar_dekha.jpeg" alt="aasman_ko_chukar_dekha_img">'
  },
  {
    title: "Khamma Re Khamma",
    artist: "Unknown", // Please specify artist if known
    filePath: "songs/khamma_re_khamma.mp3",
    language: "Hindi", // Assuming Hindi/Rajasthani
    imgTag: '<img class="song_card_image" src="song_img/khamma_re_khamma.jpeg" alt="khamma_re_khamma_img">'
  },
  {
    title: "Tu Laung Main Elaachi (Luka Chuppi)",
    artist: "Tulsi Kumar",
    filePath: "songs/tu_laung_main_elaachi_lukka_chuppi.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/tu_laung_main_elaachi_lukka_chuppi.jpeg" alt="tu_laung_main_elaachi_lukka_chuppi_img">'
  },
  {
    title: "Pal",
    artist: "Arijit Singh, Shreya Ghoshal",
    filePath: "songs/pal.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/pal.jpeg" alt="pal_img">'
  },
  {
    title: "Paniyon Sa",
    artist: "Atif Aslam, Tulsi Kumar",
    filePath: "songs/paniyon_sa.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/paniyon_sa.jpeg" alt="paniyon_sa_img">'
  },
  {
    title: "Jeena Jeena",
    artist: "Atif Aslam",
    filePath: "songs/jeena_jeena.mp3",
    language: "Hindi",
    imgTag: '<img class="song_card_image" src="song_img/jeena_jeena.jpeg" alt="jeena_jeena_img">'
  }
];



const singer_data = [
  
  {
    singer_name: "Yo Yo Honey Singh",
    singer_img: "artist_images/yo_yo_honey_singh_artist.jpeg"
  },
  {
    singer_name: "Arijit Singh",
    singer_img: "artist_images/arijit_singh.jpeg"
  },
  {
    singer_name: "Shreya Ghoshal",
    singer_img: "artist_images/shreya_ghoshal.jpeg"
  },
  {
    singer_name: "Pritam",
    singer_img: "artist_images/pritam.jpeg"
  },
  {
    singer_name: "A.R. Rahman",
    singer_img: "artist_images/ar_rahman.jpeg"
  },
  {
    singer_name: "Atif Aslam",
    singer_img: "artist_images/atif_aslam.jpeg"
  },

  {
    singer_name: "Sachin-Jigar",
    singer_img: "artist_images/sachin_jigar.jpeg"
  },
  {
    singer_name: "Vishal-Shekhar",
    singer_img: "artist_images/vishal_shekhar.jpeg"
  },


  {
    singer_name: "Anirudh Ravichander",
    singer_img: "artist_images/anirudh_ravichander.jpeg"
  },
  {
    singer_name: "Udit Narayan",
    singer_img: "artist_images/udit_narayan.jpeg"
  },
  {
    singer_name: "Shankar-Ehsaan-Loy",
    singer_img: "artist_images/shankar_ehsaan_loy.jpeg"
  },

  {
    singer_name: "Alka Yagnik",
    singer_img: "artist_images/alka_yagnik.jpeg"
  },
  {
    singer_name: "Sachet-Parampara",
    singer_img: "artist_images/sachet_parampara.jpeg"
  }
];





async function getSongNames() {
  let a = await fetch("http://192.168.29.103:3000/songs/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  for (let i = 0; i < as.length; i++) {
    const element = as[i];
    if (element.href.endsWith(".mp3")) {
      songlinks.push(element.href)
    }
  }
  for (let i = 0; i < songlinks.length; i++) {
    let songurl = songlinks[i];
    let filename = songurl.split("/").pop();
    let songname = filename.replace(".mp3", "");
    songs.push(songname);
  }
  return response;
}





async function main() {
  let response = await getSongNames();
}
main();

function create_songs_listened_cards() {
  let container = document.querySelector(".songs_listened");
  let message = container.querySelector(".initial_song_message");
  if (message) {
    message.remove();
  }
  songs_listened.forEach(
    song => {
      let imgSrcMatch = song.imgTag.match(/src="([^"]+)"/);
      console.log(imgSrcMatch);
      let div = document.createElement("div");
      div.classList.add("song_listened_card", "flex", "hstart", "colgap_15", "vcentre");

      div.innerHTML = `
              <img class="songs_listened_img" src=${imgSrcMatch[1]} alt="">
              <p class="font_16 bold font_manrope">${song.title}</p>`
      container.prepend(div);
    }
  )
}

let singer_songs = [];
function getting_songs_of_singer() {
  songs2.forEach(song => {
    if (song.artist === "Arijit Singh") {
      singer_songs.push(song)
    }
  });

}
console.log("*****");

console.log(singer_songs);
getting_songs_of_singer();



function create_artist_image() {
  let container = document.querySelector(".popular_artists");
  singer_data.forEach(
    singer => {
      let div = document.createElement("div");
      div.classList.add("popular_artist_card", "font_manrope");
      div.innerHTML = `
                        <div class="playimg">
                            <img src="svgs/play.svg" alt="">
                        </div>
                        <img src="${singer.singer_img}" alt="">
                        <p class="font_16 bold artisit_name">${singer.singer_name}</p>
                        <p class="font_12 artist_tag">Artist</p>`
      container.appendChild(div);
    }
  )
}

create_artist_image()


function creating_song_cards() {
  let container = document.querySelector(".trending_songs")
  songs2.forEach(
    song => {
      let div = document.createElement("div");
      div.classList.add("song_card", "font_manrope");
      div.innerHTML = `
                    <div class="playimg">
                        <img src="svgs/play.svg" alt="">
                    </div>
                    ${song.imgTag}
                    <p class="font_16 bold song_title">${song.title}</p>
                    <p class="font_12 song_artist">${song.artist}</p>`;
      container.appendChild(div);
    }

  )
};


let english_songs = [];
function creating_english_song_cards() {
  let container = document.querySelector(".english_songs");
  songs2.forEach(
    song => {
      if (song.language === "English") {
        english_songs.push(song);
        let div = document.createElement("div");
        div.classList.add("song_card", "font_manrope");
        div.innerHTML = `
                    <div class="playimg english_song_card"">
                        <img src="svgs/play.svg" alt="">
                    </div>
                    ${song.imgTag}
                    <p class="font_16 bold song_title">${song.title}</p>
                    <p class="font_12 song_artist">${song.artist}</p>`;
        container.appendChild(div);
      }
      else {

      }
    }
  )
}

creating_english_song_cards();






let hindi_songs = [];
function creating_hindi_song_cards() {
  let container = document.querySelector(".hindi_songs");
  songs2.forEach(
    song => {
      if (song.language === "Hindi") {
        hindi_songs.push(song);
        let div = document.createElement("div");
        div.classList.add("song_card", "font_manrope");
        div.innerHTML = `
                    <div class="playimg english_song_card"">
                        <img src="svgs/play.svg" alt="">
                    </div>
                    ${song.imgTag}
                    <p class="font_16 bold song_title">${song.title}</p>
                    <p class="font_12 song_artist">${song.artist}</p>`;
        container.appendChild(div);
      }
      else {

      }
    }
  )
}

creating_hindi_song_cards();

function scroll_horizontally(to_be_scrolled, container) {


  document.addEventListener("DOMContentLoaded", () => {
    const containerClass = document.querySelector(container)


    const div_to_enable_scroll = containerClass.querySelector(to_be_scrolled);
    const btnForward = containerClass.querySelector(".forward_svg");
    const btnBackward = containerClass.querySelector(".backward_svg");

    const scrollAmount = 700;

    btnForward.addEventListener("click", () => {
      div_to_enable_scroll.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    });

    btnBackward.addEventListener("click", () => {
      div_to_enable_scroll.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });
    });
  });

}



function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${minutes}:${seconds}`
}


function remove_old_container() {
  const old_container = document.querySelector(".song_play_container");
  if (old_container) {
    old_container.remove();
  }
}

function pause_old_audio() {

  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
}


function playsong(index, type_of_song) {


  //selecting song by given index
  current_index = index;

  if (type_of_song === "English") {
    song_to_play = english_songs[index];
    songs_listened.push(song_to_play);

  }
  else if (type_of_song === "Trending_songs") {
    song_to_play = songs2[index];
    songs_listened.push(song_to_play);
  }
  else if (type_of_song === "Hindi") {
    song_to_play = hindi_songs[index];
    songs_listened.push(song_to_play);
  }
  else {

  }

  console.log("working till here a part");

  let listened_container = document.querySelector(".songs_listened");
  console.log("working till here b part");
  listened_container.innerHTML = "";
  console.log("working till here c part");
  create_songs_listened_cards();
  console.log("working till here d part");

  //removing old container and pausing the old audio
  remove_old_container();
  pause_old_audio();
  //adding new container to .song_play_container
  let container = document.createElement("div");
  container.classList.add("song_play_container", "flex", "hbetween", "vcentre")
  container.innerHTML =
    `<div class="back_button flex hcentre vcentre">
            <img src="svgs/back_page_btn.svg" alt="">
        </div>
        <div class="song_big_img flex hcentre vcentre ">
            <!-- image -->
            ${song_to_play.imgTag}
        </div>
        <div class="footer_playbar flex hequalaround vcentre font_manrope">
            <div class="song_img_name flex vcentre hcentre colgap_15">
                <!-- image -->
                <img class="small_img" src="${song_to_play.imgTag.match(/src="([^"]+)"/)[1]}" alt="">
                <div class="song_name_artist flex hstart vcentre ">
                    <!-- Artist and song name -->
                    <p class="song_name_playbar font_16 bold">${song_to_play.title}</p>
                    <p class="song_artist_name font_12">${song_to_play.artist}</p>
                </div>
            </div>
            <div class="song_controls_container flex hcentre vcentre ">
                <div class="song_controls flex hcentre vcentre">
                    <div class="play_buttons flex hcentre vcentre">
                        <!-- pause control changed -->
                        <img class="previous_song" src="svgs/previous.svg" alt="">
                        <img class="play_song" src="svgs/pause_controls.svg" alt="">
                        <img class="next_song" src="svgs/next.svg" alt="">
                    </div>
                    <div class="seekbar_container  flex vcentre hcentre">
                        <span class="current_time font_manrope font_14">0:00</span>
                        <div class="seekbar flex hcentre">
                            <div class="seekbar_color"></div>
                            <div class="seekbar_circle"></div>
                        </div>
                        <span class="total_time font_manrope font_14">0:00</span>
                    </div>
                </div>
            </div>
            <div class="mute_volume flex hequalaround vcentre">
                <img class="mute_btn" src="svgs/unmute_btn.svg" alt="">
                <div class="volume_inc_dec flex hcentre vcentre">
                    <div class="volume_slider flex vcentre">
                        <div class="volume_slider_circle"></div>
                    </div>
                    <div class="vol_inc_dec_btn flex hbetween">
                        <img class="volDec" src="svgs/volume_decrease.svg" alt="">
                        <img class="volInc" src="svgs/volume_increase.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>`
  //inseting the container just after .left_right
  const left_right_div = document.querySelector(".left_right");
  left_right_div.insertAdjacentElement("afterend", container);
  // setTimeout(() => {
  //   container.classList.add("show");
  // }, 50)
  back_button_functionality(container);
  let audio = new Audio(song_to_play.filePath);
  currentAudio = audio;
  setting_up_playbar(audio, container);
  seekbar_timeline(audio, container);
  let mute_btn = container.querySelector(".mute_btn");
  mute_unmute(audio, mute_btn);
  volume_slider_settings(audio, container);
  vol_inc_dec_functionality(audio, container);
  let play_btn = container.querySelector(".play_song");
  let prev_btn = container.querySelector(".previous_song");
  let next_btn = container.querySelector(".next_song");


  prev_next(prev_btn, next_btn, type_of_song);
  play_pause(play_btn);
  currentAudio.play()
};





//function for giving slider functionality of the seekbar playbar line
function seekbar_timeline(audio, container) {
  let seekbar_slider = container.querySelector(".seekbar");
  let total_time = container.querySelector(".total_time");
  let current_time = container.querySelector(".current_time");
  let seekbar_circle = container.querySelector(".seekbar_circle");
  let seekbarColor = container.querySelector(".seekbar_color")
  let currentTime = audio.currentTime;
  seekbar_slider.addEventListener("click", (e) => {
    let seekbar_slider_width = seekbar_slider.offsetWidth;
    let offsetX = e.offsetX;
    let clickPercent = offsetX / seekbar_slider_width;
    let newTime = clickPercent * audio.duration;

    audio.currentTime = newTime;
    seekbar_circle.style.left = (clickPercent * 100) + "%";
    seekbarColor.style.width = (clickPercent * 100) + "%";
    current_time.textContent = formatTime(audio.currentTime);


  })


}

function setting_up_playbar(audio, container) {
  let totalTime = container.querySelector(".total_time");
  let currentTime = container.querySelector(".current_time");
  let seekbar = container.querySelector(".seekbar");
  let seekbarCircle = container.querySelector(".seekbar_circle");
  let seekbarColor = container.querySelector(".seekbar_color");
  audio.addEventListener("loadedmetadata", () => {
    totalTime.textContent = formatTime(audio.duration);
  })
  audio.addEventListener("timeupdate", () => {
    currentTime.textContent = formatTime(audio.currentTime);
    let percentageshift = (audio.currentTime / audio.duration) * 100;
    //circle moves from left side of the seekbar that is why left
    seekbarCircle.style.left = `${percentageshift}%`;
    seekbarColor.style.width = `${percentageshift}%`;

  })
}

//function for volume slider settings
function volume_slider_settings(audio, container) {
  let volumeSlider = container.querySelector(".volume_slider");
  let volumeCircle = container.querySelector(".volume_slider_circle");
  // Set default volume and update UI
  audio.volume = 0.7;
  volumeCircle.style.left = (audio.volume * 100) + "%";
  // Handle clicking on the volume slider
  //e is the event object 
  volumeSlider.addEventListener("click", (e) => {
    //  This calculates the width of the slide
    let sliderWidth = volumeSlider.offsetWidth;
    // this tell the width where the slider currently is
    let offsetX = e.offsetX;
    newVolume = offsetX / sliderWidth;
    audio.volume = newVolume;
    volumeCircle.style.left = (newVolume * 100) + "%";
  });
}



//function for giving functionality of back button 
function back_button_functionality(container) {
  let back_button = container.querySelector(".back_button");
  let home_button = document.querySelector(".home_circle");
  let spotify_button = document.querySelector(".spotify_logo");
  if (back_button) {
    back_button.addEventListener("click", () => {
      container.classList.remove("show")
      setTimeout(() => {
        remove_old_container();
        pause_old_audio();
      }, 400)
    })
  }
  if (home_button) {
    home_button.addEventListener("click", () => {
      container.classList.remove("show")
      setTimeout(() => {
        remove_old_container();
        pause_old_audio();
      }, 400)
    })
  }
  if (spotify_button) {
    spotify_button.addEventListener("click", () => {
      container.classList.remove("show")
      setTimeout(() => {
        remove_old_container();
        pause_old_audio();
      }, 400)
    })
  }
  else {

  }


};

//function for play and pause of song
function play_pause(play_btn) {
  play_btn.src = "svgs/pause_controls.svg"
  play_btn.onclick = () => {
    if (currentAudio.paused) {
      currentAudio.play();
      play_btn.src = "svgs/pause_controls.svg";
    }
    else {
      currentAudio.pause();
      play_btn.src = "svgs/play_controls.svg";

    }
  }
}






//function for setting functionality of vol dec and inc btns 
function vol_inc_dec_functionality(audio, container) {
  let volInc = container.querySelector(".volInc");
  let volDec = container.querySelector(".volDec");
  let volumeCircle = container.querySelector(".volume_slider_circle");
  let step = 0.1;
  volInc.onclick = () => {
    let increaseVol = audio.volume + step;
    audio.volume = Math.min(increaseVol, 1);
    volumeCircle.style.left = (audio.volume * 100) + "%";
  }

  volDec.onclick = () => {
    let decreaseVol = audio.volume - step;
    audio.volume = Math.max(decreaseVol, 0);
    volumeCircle.style.left = (audio.volume * 100) + "%";
  }

}

//function for jumping on previous and next songs 
function prev_next(prev_btn, next_btn, type_of_song) {


  if (type_of_song === "English") {
    array_to_be_used = english_songs;
  }
  else if (type_of_song === "Trending_songs") {
    array_to_be_used = songs2;
  }
  else if (type_of_song === "Hindi") {
    array_to_be_used = hindi_songs;
  }
  else {

  }
  prev_btn.onclick = () => {
    if (current_index === 0) {
      current_index = array_to_be_used.length - 1;
      playsong(current_index, type_of_song);
    }
    else {
      current_index = current_index - 1;
      playsong(current_index, type_of_song);
    }
  }
  next_btn.onclick = () => {
    if (current_index === array_to_be_used.length - 1) {
      current_index = 0;
      playsong(current_index, type_of_song);
    }
    else {
      current_index = current_index + 1;
      playsong(current_index, type_of_song);
    }
  }



}

function mute_unmute(audio, mute_btn) {
  mute_btn.src = "svgs/unmute_btn.svg";
  mute_btn.onclick = () => {
    if (audio.muted) {
      audio.muted = false;
      mute_btn.src = "svgs/unmute_btn.svg";
    }
    else {
      audio.muted = true;
      mute_btn.src = "svgs/mute_btn.svg";
    }

  }


}







function song_fullscreen_play(container) {
  let song_playing_container = document.querySelector(container)



  const btns = song_playing_container.querySelectorAll(".song_card .playimg img");
  btns.forEach((btn, index) => {


    btn.addEventListener("click", () => {
      console.log("working");
      console.log(index);
      if (container === ".english_song_container") {


        playsong(index, "English");
      }
      else if (container === ".trending_container") {
        playsong(index, "Trending_songs");
      }
      else if (container === ".hindi_song_container") {
        playsong(index, "Hindi");
      }
      else {

      }
      window.scrollTo({
        top: window.innerHeight - 80,
        behavior: 'smooth'
      });
    });
  });
}

creating_song_cards();

scroll_horizontally(".trending_songs", ".trending_container");
scroll_horizontally(".popular_artists", ".popular_artist_container");
scroll_horizontally(".english_songs", ".english_song_container");
scroll_horizontally(".hindi_songs", ".hindi_song_container");
song_fullscreen_play(".english_song_container");
song_fullscreen_play(".hindi_song_container");
song_fullscreen_play(".trending_container");
console.log("songs listened are : ");
console.log(songs_listened);

