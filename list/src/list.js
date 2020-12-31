function handleInput(e) {
   var ss = e.target.selectionStart;
   var se = e.target.selectionEnd;
   e.target.value = e.target.value.toUpperCase();
   e.target.selectionStart = ss;
   e.target.selectionEnd = se;
}







		new Vue({
      el: "#main",
      data: {
        heading: "PF Gun List (WIP)",
        lists: [
                 {
            "name": "M9",
            "cal": "9×19mm",
            "dmg": "35-10",
            "cap": "15+1 / 105",
			"rpm": "780",
                   "multi":"1.50/1.10",
            "desc": "A 9mm Italian pistol. One of the first 'wonder nines'. High capacity with deep reserves, light recoil, and high velocity. ",
          "r": "40-80",
             "rank": "0"
             
          },
		  {
            "name": "GLOCK 17 (G17)",
            "cal": "9×19mm",
            "dmg": "34-10",
            "cap": "17+1/102",
			"rpm": "780",
            "r":"40-90",
            "multi":"1.50/1.10",
            "desc": "A 9mm Austrian pistol renowned for its simplicity and ruggedness. Compared to the M9, it has a higher capacity, but less muzzle velocity.",
        "rank": "0"
          },
		  {
            "name": "M1911",
            "cal": ".45 ACP",
            "dmg": "48-29",
            "cap": "8+1/56",
			"rpm": "720",
        "r":"55-90",
        "multi":"1.40/1.15",
            "desc": "A classic American pistol brought into the modern age. Very high damage up close, with poor velocity and small magazine size.",
        "rank": "8"
          },
          {
            "name": "DESERT EAGLE (DEAGLE) L5",
            "cal": ".44 MAGNUM",
            "dmg": "56-32",
            "cap": "8+1/40",
			"rpm": "400",
            "r":"50-80",
            "multi":"2.00/  1.30",
            "desc": "A modern version of the iconic Israeli-American pistol. This specific model has been lightened as well as upgraded with dual Picatinny rails and a much-needed muzzle brake. Very high damage with the capacity to instantly kill to the head up close, with rough recoil.",
            "rank": "18"
          },
           {
            "name": "M45A1",
            "cal": ".45 ACP",
            "dmg": "45-28",
            "cap": "10+1/60",
			"rpm": "670",
             "r":"50-95",
             "multi":"1.40/1.15",
            "desc": "A modern American pistol with many custom parts. High damage, medium capacity, strong recoil.",
             "rank": "34"
          },
            
            {
            "name": "FIVE SEVEN",
            "cal": "5.7×28mm",
            "dmg": "29-22",
            "cap": "20+1/100",
			"rpm": "800",
              "r":"80-120",
              "multi":"1.40/1.20",
            "desc": "A modern Belgian pistol firing a unique caliber. Poor close-in performance, with great ranged performance, high velocity, large magazine, wall penetration and deep reserves.",
              "rank": "57"
          },
           {
            "name": "ZIP 22",
            "cal": ".22 LONG RIFLE",
            "dmg": "15-12",
            "cap": "10+1/180",
			"rpm": "1000 SEMI",
             "r":"30-60",
             "multi":"2.80/1.00",
            "desc": "A modern American 'pistol' with questionable quality. Abysmal damage, but with deep reserves and a high headshot multiplier. A weapon so bad it killed a million dollar company. 3 shots to the head at all ranges.",
             "rank": "61"
          },
            {
            "name": "DESERT EAGLE (DEAGLE) XIX",
            "cal": ".50 ACTION EXPRESS",
            "dmg": "72-37",
            "cap": "7+1/21",
			"rpm": "400",
              "r":"40-82",
              "multi":"2.50/1.40",
            "desc": "Finally, a gun that lets you make a statement. This semi-automatic hand cannon is chambered in .50 Action Express. It'll probably pulverize your wrists with its recoil, but hey, you can't argue with the stopping power. And you've got the king of mayhem...",
              "rank": "102"
          },
          {
            "name": "GLOCK 18 (G18)",
            "cal": "9×19mm",
            "dmg": "30-20",
            "cap": "19+1/57",
			"rpm": "1100 AUTO",
            "multi":"1.40/1.00",
            "r":"20-60",
            "desc": "A 9mm Austrian machine pistol. Fast fire rate with relatively stable handling characteristics.",
            "rank": "17"
          },
             {
            "name": "M93R",
            "cal": "9×19mm",
            "dmg": "34-20",
            "cap": "20+1/80",
			"rpm": "1100 3×BURST",
               "multi":"1.40/1.00",
               "r":"30-60",
            "desc": "An Italian machine pistol that fires rapid 3-round bursts. Strong vertical recoil with high close-in damage.",
               "rank": "26"
          },
             {
            "name": "TEC-9",
            "cal": "9×19mm",
            "dmg": "28-20",
            "cap": "20/60",
			"rpm": "1500 AUTO",
               "r":"21-65",
               "multi":"1.40/1.00",
            "desc": "A Swedish machine pistol with an incredibly high rate of fire, but lacks stopping power and has highly unstable handling.",
               "rank": "50"
          },
             {
            "name": "MICRO UZI",
            "cal": "9×19mm",
            "dmg": "34-19",
            "cap": "20/60",
			"rpm": "1200 AUTO",
               "r":"",
               "multi":"1.30/1.00",
            "desc": "A compact version of the Uzi, favored by criminals of all walks. Fires at an incredibly high rate of fire, but mind the ammo.",
               "rank": "68"
          },
          {
            "name": "ŠKORPION VZ. 61 (CZ-3A1) **",
            "cal": ".32 ACP",
            "dmg": "34-19",
            "cap": "20+1/60",
			"rpm": "850 AUTO",
            "r":"40-90",
            "multi":"1.40/1.00",
            "desc": "Czechoslovakia machine pistol of iconic design made in 1959 by Miroslav Rybář. It does have faults but at the same it is reliable with low recoil and good damage in close ranges.",
            "rank": "87"
          },
          {
            "name": "MP1911",
            "cal": ".45 ACP, .380 ACP",
            "dmg": "36-20",
            "cap": "15+1/45",
			"rpm": "1000 AUTO",
            "r":"25-70",
            "multi":"1.40/1.00",
            "desc": "A custom 1911 prototype from the Philippines. Features a custom foregrip and muzzle device for very stable firing characteristics, but has a bulky magazine resulting in slow reloads.",
            "rank": "106"
          },
		      {
            "name": "ARM PISTOL **",
            "cal": "5.56 NATO",
            "dmg": "34-20",
            "cap": "20+1.80",
			"rpm": "800 AUTO",
            "r":"45-75",
            "multi":"1.40/1.00",
            "desc": "Bushmaster ARM firearm legally categorized as a pistol. Despite the appearance it actually bears more mechanical similarity to the AK47. Good for damage and reload speed.",
            "rank": "87"
          },
		      {
            "name": "MP412 REX",
            "cal": ".357 MAGNUM",
            "dmg": "56-28",
            "cap": "6/42",
			"rpm": "600 SEMI",
            "r":"65-100",
            "multi":"3.00/1.40",
            "desc": "A break-open revolver prototype from Russia intended for export. High close-in damage and headshot multiplier with low ranged damage and a fast rate of fire.",
            "rank": "4"
          },
		      {
            "name": "MATEBA 6",
            "cal": ".44 MAGNUM",
            "dmg": "56-30",
            "cap": "6/42",
			"rpm": "600 SEMI",
            "r":"76-100",
            "multi":"2.50/1.40",
            "desc": "An Italian semi-automatic revolver. High close-in damage with better ranged performance, fast drop-off, fast rate of fire and unusual recoil.",
            "rank": "29"
          },
		      {
            "name": "1858 NEW ARMY",
            "cal": ".357 MAGNUM",
            "dmg": "60-35",
            "cap": "6/42",
			"rpm": "140 SEMI, 350 FAN FIRE",
            "multi":"2.50/1.40",
            "r":"75-140",
            "desc": "A modern reproduction of a vintage American ball-and-cap revolver. Single-action revolver with a slow rate of fire, excellent ranged performance, and the ability to fan-fire at high speed.",
            "rank": "58"
          },
		      {
            "name": "REDHAWK 44",
            "cal": ".44 MAGNUM",
            "dmg": "59-35",
            "cap": "6/42",
			"rpm": "400 SEMI",
            "r":"50-100",
            "multi":"2.50/1.25",
            "desc": "A traditional American revolver. Very high damage overall with a slow rate of fire and strong muzzle flip.",
            "rank": "83"
          },
		      {
            "name": "EXCECUTIONER",
            "cal": ".454 CASULL",
            "dmg": "80-38",
            "cap": "6/30",
			"rpm": "300 SEMI",
            "r":"55-120",
            "multi":"2.50/1.30",
            "desc": "A full-size Brazilian revolver, loaded with .454 Casull for incredible stopping power. Massive damage up close with a high headshot multiplier, with harsh recoil and slow recovery.",
            "rank": "137"
          },
		      {
            "name": "JUDGE",
            "cal": ".410 BORE",
            "dmg": "4×40-4×20",
            "cap": "5/25",
			"rpm": "300 SEMI",
            "r":"25-60",
            "multi":"1.14/1.00",
            "desc": "A compact Brazilian revolver firing .410 shotshells. High per-pellet damage with moderate spread and fast rate of fire.",
            "rank": "113"
          },
		      {
            "name": "SERBU SHOTGUN",
            "cal": "12 GAUGE (BUCKSHOT)",
            "dmg": "8×29-8×16",
            "cap": "2+1/20",
			      "rpm": "100 PUMP",
            "multi":"1.10/1.00",
            "desc": "An ultra-short pump action shotgun based on the Remington 870. Small capacity with wide spread.",
            "rank": "36"
          },
		      {
            "name": "SFG 50",
            "cal": ".50 BMG",
            "dmg": "100-85",
            "cap": "1/20",
			      "rpm": "30 SINGLE SHOT",
            "multi":"3.00/1.14",
            "desc": "A BFG 50 with the barrel hacked off. As should be expected from this 'modification', it hits hard, but is highly inaccurate at range.",
            "rank": "75"
          },
          {
            "name": "M79 THUMPER",
            "cal": ".22 LONG RIFLE",
            "dmg": "10×34-10×16",
            "cap": "1/20",
			      "rpm": "90 SINGLE SHOT",
            "multi":"1.50/1.00",
            "desc": "A single-action break-action grenade launcher that is loaded with 10-round hornet's nest of .22 Long Rifle and tons of other ammo using proper shells or adapters. First appeared during the Vietnam War, it earned many nicknames by the soldiers.",
            "rank": "79"
          },
          {
            "name": "SAWED OFF",
            "cal": "12 GAUGE",
            "dmg": "8×29-8×16",
            "cap": "2/20",
			      "rpm": "200 SEMI/INSTANT BURST (FIRES BOTH BARRELS AT ONCE)",
            "multi":"1.10/1.00",
            "desc": "An ultra-short double-barreled shotgun. Capable of firing both barrels at once. Very wide spread.",
            "rank": "90"
          },
          {
            "name": "SAIGA-12U",
            "cal": "12 GAUGE",
            "dmg": "8×29-8×16",
            "cap": "2+3/20",
			      "rpm": "350 SEMI",
            "multi":"1.10/1.00",
            "desc": "A Saiga 12 without a stock and a very short barrel. Has a high rate of fire with a very wide spread and a small magazine.",
            "rank": "95"
          },
		      {
            "name": "OBREZ",
            "cal": "7.62×54mmR",
            "dmg": "50-40",
            "cap": "5/30",
			      "rpm": "80 BOLT",
            "multi":"3.00/1.50",
            "desc": "A shortened Mosin Nagant intended for use by revolutionaries and insurgents. Inaccurate, but instantly kills with headshots.",
            "rank": "117"
          },
          {
            "name": "KSG-12",
            "cal": "12 GAUGE",
            "dmg": "8×32-8×17",
            "cap": "14+1/50",
			      "rpm": "130",
            "multi":"1.10/1.00",
            "desc": "A high-capacity pump-action, bullpup American shotgun, with dual 7-round tubes. Wide spread.",
            "rank": "1"
          },
          {
            "name": "REMINGTON 870",
            "cal": "12 GAUGE",
            "dmg": "8×33-8×18",
            "cap": "6+1/50",
			      "rpm": "100",
            "multi":"1.14/1.00",
            "desc": "A traditional pump action shotgun with a 7-round tube and polymer furniture. Tight spread.",
            "rank": "11"
          },
          {
            "name": "DBV12",
            "cal": "12 GAUGE",
            "dmg": "8×29-8×17",
            "cap": "10+1/50",
			      "rpm": "250 SEMI",
            "multi":"1.10/1.00",
            "desc": "A conceptualized prototype weapon based on the AK12 platform. Semi automatic, feeding from a 10 round box magazines. Middling spread, low damage.",
            "rank": "24"
          },
          {
            "name": "KS-23M",
            "cal": "23×75mmR",
            "dmg": "8×37-8×21 (19**)",
            "cap": "3+1",
			      "rpm": "65 PUMP",
            "multi":"1.14/1.00",
            "desc": "A Russian shotgun built using 23mm aircraft gun barrels. This makes it the largest-bore shotgun in use, but it only fits 3 rounds in the tube. High damage, slow firerate, extremely tight spread.",
            "rank": "56"
          },
          {
            "name": "SAIGA 12",
            "cal": "12 GAUGE",
            "dmg": "8×27-8×17 ",
            "cap": "8+1/50",
			      "rpm": "350 SEMI",
            "multi":"1.14/1.00",
            "desc": "A Russian shotgun based on the AK platform. It feeds from an 8-round box magazine and has a blisteringly fast fire rate, but a slow reload and wide spread.",
            "rank": "63"
          },
          {
            "name": "STEVENS DB",
            "cal": "12 GAUGE",
            "dmg": "8×36-8×19",
            "cap": "2/50",
			      "rpm": "200 SEMI/INSTANT BURST",
            "multi":"1.14/1.14",
            "desc": "A classic double-barrel shotgun with plenty of punch and an instantaneous burst. It spells doom for whatever's in front of it.",
            "rank": "81"
          },
          {
            "name": "AA-12",
            "cal": "12 GAUGE",
            "dmg": "8×28-8×19",
            "cap": "8/56 (20/40 with 20rd DRUM)",
			      "rpm": "300 AUTO",
            "multi":"1.14/1.00",
            "desc": "An iconic American shotgun produced exclusively in fully automatic. It has one of the fastest fire rates, and can accept a 20 round drum magazine. Very low damage with very wide spread.",
            "rank": "112"
          },
          {
            "name": "SPAS-12",
            "cal": "12 GAUGE",
            "dmg": "8×30-8×18",
            "cap": "8+1/50",
			      "rpm": "200 SEMI",
            "multi":"1.14/1.00",
            "desc": "An iconic Italian gas-actuated combat shotgun, with a 7 round tube magazine. Features a fast fire rate and tight spread with high damage.",
            "rank": "120"
          },
          {
            "name": "AK12",
            "cal": "5.45×39mmR",
            "dmg": "33-20",
            "cap": "30+1/120",
			      "rpm": "1000 3×BURST, 700 AUTO",
            "multi":"1.40/1.00",
            "desc": "A prototype assault rifle from the Kalashnikov Concern based off the AK400. Intended to replace the AK74 in service with the Russian military. A jack of all trades, but a master of none.",
            "rank": "0"
          },
          {
            "name": "AN-94",
            "cal": "5.45×39mmR",
            "dmg": "32-24",
            "cap": "30+1/120",
			      "rpm": "1800 2×BURST, 600 AUTO",
            "multi":"1.40/1.00",
            "desc": "A complex Russian assault rifle featuring a unique pulley-driven burst system. Fires two shots in the exact same place before recoil is felt.",
            "rank": "10"
          },
          {
            "name": "AS VAL",
            "cal": "9×39mm",
            "dmg": "34-20",
            "cap": "20+1/120",
			      "rpm": "900 AUTO",
            "multi":"1.40/1.00",
            "desc": "A tactical upgrade to the SR-3M, with a large suppressor for the purpose of being used by Russian special-ops troops. High damage up close, but lacking damage at range.",
            "rank": "15"
          },
          {
            "name": "SCAR-L",
            "cal": "5.56 NATO",
            "dmg": "33-25",
            "cap": "30+1/120",
			      "rpm": "625 AUTO",
            "multi":"1.40/1.00",
            "desc": "A modular Belgian assault rifle, built specially to satisfy the needs of SOCOM. Steady fire rate with low recoil and high minimum damage.",
            "rank": "16"
          },
          {
            "name": "AUG A1",
            "cal": "5.56 NATO",
            "dmg": "30-23",
            "cap": "30+1/120",
			      "rpm": "680 AUTO",
            "multi":"1.40/1.00",
            "desc": "An Austrian bullpup assault rifle with a built-in telescopic optic. Decently accurate with a long range and above-average fire rate. Press T and aim to use the scope.",
            "rank": "20"
          },
          {
            "name": "M16A4",
            "cal": "5.56 NATO",
            "dmg": "35-22",
            "cap": "30+1/120",
			      "rpm": "900 3×BURST",
            "multi":"1.50/1.00",
            "desc": "A traditional AR-15 platform assault rifle as used by the US military. This version features a burst-fire trigger group. Very accurate with low recoil and a long range. High vertical ADS recoil tho.",
            "rank": "22"
          },
          {
            "name": "G36",
            "cal": "5.56 NATO",
            "dmg": "31-25",
            "cap": "30+1/120",
			      "rpm": "750 AUTO",
            "multi":"1.40/1.00",
            "desc": "A modern modular German assault rifle, designed to replace the G3 that was in service at the time. Originally issued with a special optics package. Middle-of-the-road rifle with a preference for ranged performance.",
            "rank": "25"
          },
          {
            "name": "M16A3",
            "cal": "5.56 NATO",
            "dmg": "32-22",
            "cap": "30+1/120",
			      "rpm": "800 AUTO",
            "multi":"1.40/1.00",
            "desc": "A traditional AR-15 platform assault rifle as used by the US military. This version features a fully automatic trigger group. Accurate with low recoil and a fast reload.",
            "rank": "31"
          },
          {
            "name": "AUG A2",
            "cal": "5.56 NATO",
            "dmg": "34-20",
            "cap": "30+1/120",
			      "rpm": "700 AUTO",
            "multi":"1.40/1.00",
            "desc": "An intermediate upgrade to the AUG A1, foregoing the telescopic optic for a standard Picatinny rail. Trades ranged performance for close-in punch. Slow reload.",
            "rank": "39"
          },
          {
            "name": "FAMAS F1",
            "cal": "5.56 NATO",
            "dmg": "34-20",
            "cap": "25+1/125",
			      "rpm": "900 AUTO, 900 3×BURST",
            "multi":"1.40/1.00",
            "desc": "A French bullpup assault rifle. Higher fire rate than average, but with lacking damage and a slow reload.",
            "rank": "45"
          },
          {
            "name": "AK47",
            "cal": "7.62×39mmR",
            "dmg": "42-30",
            "cap": "30+1/120",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.00",
            "desc": "A Russian assault rifle. The most common rifle in the world, firing a heavy intermediate cartridge. High damage, high recoil.",
            "rank": "47"
          },
          {
            "name": "AUG A3",
            "cal": "5.56 NATO",
            "dmg": "32-21",
            "cap": "30+1/120",
			      "rpm": "720 AUTO",
            "multi":"1.40/1.00",
            "desc": "A further revision of the AUG platform with additional minor revisions. Jack of all trades of the AUG family, but has noticeable horizontal recoil.",
            "rank": "52"
          },
          {
            "name": "L85A2",
            "cal": "5.56 NATO",
            "dmg": "28-25",
            "cap": "30+1/120",
			      "rpm": "700 AUTO",
            "multi":"1.40/1.00",
            "desc": "A British bullpup rifle, much maligned for its reliability until it was remodeled. High minimum damage, moderate recoil.",
            "rank": "55"
          },
          {
            "name": "HK416",
            "cal": "5.56 NATO",
            "dmg": "31-24",
            "cap": "30+1/120",
			      "rpm": "850 AUTO",
            "multi":"1.40/1.00",
            "desc": "A German assault rifle, deriving its design from the AR-15 platform. Made famous for its use by SEAL Team Six. Fast fire rate with high damage, but a slow reload.",
            "rank": "64"
          },
          {
            "name": "AK74",
            "cal": "5.45×39mmR",
            "dmg": "34-23",
            "cap": "30+1/120",
			      "rpm": "650 AUTO",
            "multi":"1.40/1.00",
            "desc": "A revision of the Kalashnikov system to accept the less powerful 5.45x39mm cartrige, improving weapon handling and accuracy.",
            "rank": "74"
          },
          {
            "name": "AKM",
            "cal": "7.62×39mmR",
            "dmg": "40-32",
            "cap": "30+1/120",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.00",
            "desc": "Modernized version of the AK47 rifle with various improvements to handling and functionality. Slightly reduced damage compared to the AK47 with a preference for recoil control.",
            "rank": "94"
          },
          {
            "name": "AK103",
            "cal": "7.62×39mmR",
            "dmg": "38-29",
            "cap": "30+1/120",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.00",
            "desc": "A further modernized version of the AK platform, brought into the modern day with a polymer handguard and stock. Trades a small amount of close-range performance for a range preference.",
            "rank": "103"
          },
          {
            "name": "TAR-21",
            "cal": "5.56 NATO",
            "dmg": "29-22",
            "cap": "30+1/120",
			      "rpm": "850 AUTO",
            "multi":"1.50/1.10",
            "desc": "sraeli bullpup assault rifle chambered in standard 5.56x45 NATO. Features a long barrel for great ballistics over range.",
            "rank": "111"
          },
          {
            "name": "TYPE 88-2",
            "cal": "5.45×39mmR",
            "dmg": "34-20",
            "cap": "75/150",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.00",
            "desc": "An AK74 knock off for North Korean forces. Comes with a specialty overfolder stock, and absurdly large helical magazine. Extremely poor ergonomics plague this firearm.",
            "rank": "122"
          },
          {
            "name": "M231",
            "cal": "5.56 NATO",
            "dmg": "35-25",
            "cap": "30/150",
			      "rpm": "1225 AUTO",
            "multi":"1.40/1.00",
            "desc": "The M231 Firing Port Weapon is only intended to be used inside the Bradley AFV in a special mount. Hits hard, but good luck hitting anything... You're going to use it anyways, Boss?",
            "rank": "123"
          },
          {
            "name": "C7A2",
            "cal": "5.56 NATO",
            "dmg": "29-19",
            "cap": "30+1/120",
			      "rpm": "800 AUTO",
            "multi":"1.50/1.00",
            "desc": "A Canadian iteration upon the US military's M16A2. Features a full auto trigger group, speedy reload and an integrated optic. This gun reminds you of a simpler time.",
            "rank": "128"
          },
          {
            "name": "G11K2",
            "cal": "4.73x33mm CASELESS",
            "dmg": "28-21",
            "cap": "45/180",
			      "rpm": "2100 3×BURST, 460 AUTO",
            "multi":"1.70/1.00",
            "desc": "A prototype German assault rifle that fires caseless rounds, allowing for more bullets in the same space. It features an incredibly fast 3-round burst mode, but otherwise fires very slowly. It is mechanically complex, making it unwieldy and bulky. Wait a minute, this is the future. Where are all the phaser guns?",
            "rank": "211"
          },
          {
            "name": "K2",
            "cal": "5.56 NATO",
            "dmg": "34-24",
            "cap": "30+1/120",
			      "rpm": "750 AUTO",
            "multi":"1.40/1.00",
            "desc": "A modernized south korean Assault Rifle stemming from the K1A rifle. It is quite a balanced rifle in most every field.",
            "rank": "42"
          },
          {
            "name": "MK11",
            "cal": "7.62 NATO",
            "dmg": "45-38",
            "cap": "20+1/80",
			      "rpm": "330 SEMI",
            "multi":"1.50/1.20",
            "desc": "An American AR-10 platform rifle firing the 7.62 NATO round. Snappy, fast recoil and deep magazine with middling fire rate.",
            "rank": "3"
          },
          {
            "name": "SKS",
            "cal": "7.62×39mmR",
            "dmg": "40-32",
            "cap": "20+1/80",
			      "rpm": "433 SEMI",
            "multi":"1.50/1.20",
            "desc": "A modernized Tapco version of the traditional SKS carbine that saw use in WWII. Light recoil with moderate reserves and faster fire rate, but lower damage.",
            "rank": "13"
          },
          {
            "name": "SL-8",
            "cal": "5.56 NATO",
            "dmg": "38-28",
            "cap": "30+1/120",
			      "rpm": "625 SEMI",
            "multi":"1.40/1.08",
            "desc": "A semi-automatic target rifle with a heavy barrel, sold as the civilian version of the famed G36. Very fast fire rate... if your trigger finger can keep up.",
            "rank": "38"
          },
          {
            "name": "VSS VINTOREZ",
            "cal": "9×39mm SP",
            "dmg": "55-38",
            "cap": "10+1/100",
			      "rpm": "700 AUTO",
            "multi":"1.80/1.40  ",
            "desc": "A DMR variant of the AS VAL intended for special operations where normal sniper rifles aren't viable. Fully automatic capable. Fast fire rate and high damage, with high recoil and low velocity.",
            "rank": "46"
          },
          {
            "name": "MSG90",
            "cal": "7.62 NATO",
            "dmg": "50-40",
            "cap": "10+1/120",
			      "rpm": "355 SEMI",
            "multi":"2.00/1.20",
            "desc": "A ruggedized PSG-1 intended for use in rapid-response operations such as hostage situations. Has a 10 round magazine, deep reserves, and a slightly faster fire rate, countered by strong recoil.",
            "rank": "59 "
          },
          {
            "name": "BEOWULF TCR",
            "cal": ".50 BEOWULF",
            "dmg": "60-40",
            "cap": "10+1/70",
			      "rpm": "400 SEMI",
            "multi":"1.70/1.23",
            "desc": "A custom AR-15 platform rifle produced by Alexander Arms firing the heavy .50 Beowulf cartridge. Fast fire rate and high damage with poor velocity.",
            "rank": "70"
          },
          {
            "name": "SA58 SPR",
            "cal": "7.62 NATO",
            "dmg": "48-30",
            "cap": "20+1/120",
			      "rpm": "500 SEMI",
            "multi":"2.10/1.10",
            "desc": "A semi-automatic FAL submitted for US military trials. Features a high fire rate and deep reserves, but becomes unstable under rapid fire and reloads slowly.",
            "rank": "78"
          },
          {
            "name": "SCAR SSR",
            "cal": "7.62 NATO",
            "dmg": "57-48",
            "cap": "10+1/60",
			      "rpm": "220 SEMI",
            "multi":"2.00/1.70",
            "desc": "A heavy precision variant of the Belgian SCAR-H. Slowest fire rate in class with strong vertical recoil, but with fast recovery.",
            "rank": "85"
          },
          {
            "name": "BEOWULF ECR",
            "cal": ".50 BEOWULF",
            "dmg": "52-30",
            "cap": "10+1/100",
			      "rpm": "780 AUTO, 780 3×BURST",
            "multi":"1.40/1.10",
            "desc": "A custom AR-15 platform rifle produced by Alexander Arms firing the .50 Beowulf round. Packs quite a punch, but exhausts its ammo quickly.",
            "rank": "21"
          },
          {
            "name": "SCAR-H",
            "cal": "7.62 NATO",
            "dmg": "42-29",
            "cap": "20+1/120",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.10",
            "desc": "A Belgian rifle, favored by SOCOM. Stable, jack of all trades battle rifle.",
            "rank": "30"
          },
          {
            "name": "AK12BR",
            "cal": "5.45×39mmR",
            "dmg": "39-25",
            "cap": "20+1/120",
			      "rpm": "700 AUTO, 1000 2×BURST",
            "multi":"1.40/1.10",
            "desc": "A conceptualized Russian rifle using the AK12 platform. Features a 'balanced recoil' system, giving it very low recoil. High damage.",
            "rank": "44"
          },
          {
            "name": "G3",
            "cal": "7.62 NATO",
            "dmg": "35-25",
            "cap": "20+1/120",
			      "rpm": "580 AUTO",
            "multi":"2.00/1.00",
            "desc": "A German battle rifle featuring a roller-delayed blowback system. High fire rate, high recoil, middling reload speed.",
            "rank": "59"
          },
          {
            "name": "AG-3",
            "cal": "7.62 NATO",
            "dmg": "45-35",
            "cap": "20+1/120",
			      "rpm": "525 AUTO",
            "multi":"1.40/1.00",
            "desc": "A Norwegian take on the G3, featuring more modularity and special modifications made by the Norwegians. Slow fire rate with controllable recoil.",
            "rank": "76"
          },
          {
            "name": "HK417**",
            "cal": "7.62 NATO",
            "dmg": "40-32",
            "cap": "20+1/120",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.10",
            "desc": "A German battle rifle, deriving its design from the AR-10 platform. Made famous for its use by SEAL Team Six. Easy to learn, but a slow reload.",
            "rank": "78"
          },
          {
            "name": "HENRY 45-70",
            "cal": ".45-70",
            "dmg": "65-45",
            "cap": "5/50",
			      "rpm": "100 SEMI",
            "multi":"2.40/1.55",
            "desc": "A modern take on the classic lever-action rifle, firing the heavyweight .45-70 Government round. 5-round tube, slow muzzle velocity, but instantly kills to the head.",
            "rank": "96"
          },
          {
            "name": "FAL 50.00",
            "cal": "7.62 NATO",
            "dmg": "41-32",
            "cap": "20+1/120",
			      "rpm": "700 AUTO",
            "multi":"1.40/1.10",
            "desc": "A Belgian battle rifle that has rightfully earned the moniker of 'the right arm of the free world'. Fires quickly with moderate recoil, but suffers from a slow reload.",
            "rank": "107"
          },
          {
            "name": "M4A1",
            "cal": "5.56 NATO",
            "dmg": "34-19",
            "cap": "30+1/120",
			      "rpm": "780 AUTO",
            "multi":"1.40/1.00",
            "desc": "An American carbine based on the AR-15 platform. Fully automatic trigger group. Very stable firing characteristics, strong close range performance with weaker ranged performance.",
            "rank": "0"
          },
          {
            "name": "G36K",
            "cal": "5.56 NATO",
            "dmg": "34-19",
            "cap": "30+1/120",
			      "rpm": "750 AUTO",
            "multi":"1.40/1.00",
            "desc": "A slightly shortened carbine variant of the G36 rifle, featuring a shorter handguard and barrel. Above average ranged performance with a compromise on close range damage.",
            "rank": "6  "
          },
          {
            "name": "M4",
            "cal": "5.56 NATO",
            "dmg": "35-19",
            "cap": "30+1/120",
			      "rpm": "950 3×BURST",
            "multi":"1.50/1.10",
            "desc": "An American carbine based on the AR-15 platform. Burst fire trigger group. Very stable firing characteristics with a high rate of fire. Compared to the M4A1, it has slightly higher damage.",
            "rank": "14"
          },
          {
            "name": "L22",
            "cal": "5.56 NATO",
            "dmg": "30-21",
            "cap": "30+1/120",
			      "rpm": "775 AUTO",
            "multi":"1.40/1.00",
            "desc": "A bullpup British carbine based on the L85A2. High rate of fire with above-average ranged performance and moderate recoil.",
            "rank": "28"
          },
          {
            "name": "SCAR PDW",
            "cal": "5.56 NATO",
            "dmg": "36-19",
            "cap": "30+1/120",
			      "rpm": "650 AUTO",
            "multi":"1.40/1.00",
            "desc": "A carbine variant of the SCAR-L. Slow rate of fire, but has very strong close range performance and snappy weapon handling.",
            "rank": "32"
          },
          {
            "name": "AKU12",
            "cal": "5.45×39mmR",
            "dmg": "35-19",
            "cap": "30+1/120",
			      "rpm": "800 AUTO, 800 3×BURST",
            "multi":"1.40/1.00",
            "desc": "A conceptualized Russian prototype carbine based on the AK12. Strong close-range performance with weak ranged performance and a high rate of fire.",
            "rank": "35"
          },
          {
            "name": "GROZA-1",
            "cal": "7.62×39mmR",
            "dmg": "33-22",
            "cap": "30+1/120",
			      "rpm": "750 AUTO",
            "multi":"1.40/1.00",
            "desc": "A Russian bullpup carbine. Above-average perfomance in all respects with a stable firing characteristic.",
            "rank": "42"
          },
          {
            "name": "AK12C",
            "cal": "5.45×39mmR",
            "dmg": "35-21",
            "cap": "30+1/120",
			      "rpm": "700 AUTO",
            "multi":"1.40/1.00",
            "desc": "A conceptualized Russian prototype carbine based on the AK12. Strong close range performance with slightly better ranged performance but a slower rate of fire.",
            "rank": "51"
          },
          {
            "name": "HONEY BADGER",
            "cal": ".300 AAC BLACKOUT",
            "dmg": "30-22",
            "cap": "30+1/120",
			      "rpm": "800 AUTO",
            "multi":"1.40/1.00",
            "desc": "A suppressed American carbine based on the AR-15 platform firing the .300 Blackout round. Moderate recoil with average performance all around.",
            "rank": "62"
          },
          {
            "name": "SR-3M",
            "cal": "9×39mmR",
            "dmg": "34-20",
            "cap": "20+1/120",
			      "rpm": "900 AUTO",
            "multi":"1.40/1.00",
            "desc": "A Russian carbine chambered in 9x39mm, designed for police use. Exceptional close quarters performance, featuring a very high rate of fire with low recoil, but has a smaller magazine.  ",
            "rank": "69"
          },
          {
            "name": "GROZA-4",
            "cal": "9×39mmR",
            "dmg": "36-20",
            "cap": "20+1/120",
			      "rpm": "700 AUTO",
            "multi":"1.40/1.00",
            "desc": "An integrally suppressed version of the Groza-1 firing 9x39mm. Excellent close-range performance with mild recoil, but a slower fire rate and smaller magazine.",
            "rank": "79"
          },
          {
            "name": "MC51SD",
            "cal": "7.62 NATO",
            "dmg": "46-25",
            "cap": "20+1/120",
			      "rpm": "540 AUTO",
            "multi":"1.40/1.10",
            "desc": "An integrally suppressed version of the G3 rifle for special forces. Features battle rifle damage characteristics with mild recoil, slow fire rate, and a smaller magazine than average.",
            "rank": "86"
          },
          {
            "name": "FAL 50.63 PARA",
            "cal": "7.62 NATO",
            "dmg": "44-23",
            "cap": "20+1/120",
			      "rpm": "700 AUTO",
            "multi":"1.40/1.10",
            "desc": " A paratrooper variant of the FAL 50.00. Features battle rifle damage characteristics. Heavy with strong recoil, high velocity, and a smaller magazine than average.",
            "rank": "89"
          },
          {
            "name": "1858 CARBINE",
            "cal": ".44 MAGNUM",
            "dmg": "65-40",
            "cap": "6/72",
			      "rpm": "110 SEMI",
            "multi":"2.50/1.55",
            "desc": "A custom carbine variant of the 1858 New Army revolver. Very high damage capable of an instant kill to the head at any range, with a very slow fire rate and moderate muzzle velocity.",
            "rank": "93"
          },
          {
            "name": "AK105",
            "cal": "5.45×39mmR",
            "dmg": "36-20",
            "cap": "30+1/120",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.00",
            "desc": "A modernized AK74 rifle with a carbine barrel. Slow firerate with high close-range damage and moderate muzzle velocity.",
            "rank": "105"
          },
          {
            "name": "JURY",
            "cal": ".45 LONG COLT",
            "dmg": "80-50",
            "cap": "6/75",
			      "rpm": "300 SEMI",
            "multi":"1.80/1.25",
            "desc": "A carbine variant of the Brazilian-made Judge revolver. High damage and firerate with harsh recoil and reduced magazine capacity.",
            "rank": "114"
          },
          {
            "name": "KAC SRR",
            "cal": ".30 KAC",
            "dmg": "59-42",
            "cap": "6/42",
			      "rpm": "400 SEMI",
            "multi":"2.50/1.25",
            "desc": "A carbine variant of the Redhawk with a special suppressor. Lower damage and very slow velocity, with a high headshot multiplier, low recoil, and fast fire rate.",
            "rank": "125"
          },
          {
            "name": "X95R",
            "cal": "5.45×39mm",
            "dmg": "27-20",
            "cap": "30+1/150",
			      "rpm": "950 AUTO",
            "multi":"1.50/1.00",
            "desc": "A modern revision of the Tavor, an Israeli carbine, uniquely chambered in 5.45x39. It further improves on the TAR design with improved ergonomics by moving the charging handle and redesigning the stock. High fire rate with better torso performance, but below average damage.",
            "rank": "130"
          },
          {
            "name": "HK51B",
            "cal": "5.56 NATO",
            "dmg": "41-22",
            "cap": "100/200",
			      "rpm": "950 AUTO, 950 3×BURST",
            "multi":"1.40/1.00",
            "desc": "Aftermarket conversion of the HK21 heavy LMG. Fires at an extreme rate of speed from a 100 round box, but has awful recoil. Has a lengthy reload process.",
            "rank": "160"
          },
          {
            "name": "K1A",
            "cal": "5.56 NATO",
            "dmg": "33-19",
            "cap": "30+1/120",
			      "rpm": "900 AUTO",
            "multi":"1.40/1.00",
            "desc": "A south korean Carbine stemming from the prototype XK1 rifle. Much like K2, this rifle is quite balanced but leans more into CQC power.",
            "rank": "63"
          },
          {
            "name": "MP5K",
            "cal": "9×19mm",
            "dmg": "30-17",
            "cap": "30+1/120",
			      "rpm": "900 AUTO",
            "multi":"1.40/1.00",
            "desc": "A sub-compact version of the German MP5. Very lightweight with high fire rate, short range, and manageable recoil.",
            "rank": "0"
          },
          {
            "name": "UMP45",
            "cal": ".45 ACP",
            "dmg": "38-21",
            "cap": "25+1/125",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.00",
            "desc": "A mid-size German PDW. Fires the heavier .45 ACP round. Impressive ranged performance, but has a slow fire rate and slightly smaller magazine.",
            "rank": "5"
          },
          {
            "name": "G36C",
            "cal": "5.56 NATO",
            "dmg": "33-20",
            "cap": "30+1/120",
			      "rpm": "750 AUTO",
            "multi":"1.40/1.00",
            "desc": "An extremely short subcarbine variant of the G36 assault rifle. Being incredibly short, it can be used by armored vehicle crews. Trades some close range performance for better long range performance.",
            "rank": "7"
          },
          {
            "name": "MP7",
            "cal": "4.6×",
            "dmg": "30-18",
            "cap": "30+1/120",
			      "rpm": "950 AUTO",
            "multi":"1.40/1.00",
            "desc": "A compact German PDW with a unique ammunition type, intended as a competitor to the P90. High fire rate and wall penetration, moderate range, poor ranged performance.",
            "rank": "9"
          },
          {
            "name": "MAC10",
            "cal": ".45 ACP",
            "dmg": "36-19",
            "cap": "30/150",
			      "rpm": "1090 AUTO",
            "multi":"1.40/1.00",
            "desc": "An American PDW that fires .45 ACP at a blisteringly high rate of fire. Very lightweight. Poor accuracy while aimed, with stable hip-fire characteristics.",
            "rank": "23"
          },
          {
            "name": "P90",
            "cal": "5.7×28mm",
            "dmg": "25-17",
            "cap": "50+1/150",
			      "rpm": "900 AUTO",
            "multi":"1.40/1.00",
            "desc": "A Belgian PDW with a unique magazine feed system and curious ergonomics. High magazine capacity and great wall penetration with moderate recoil and low damage.",
            "rank": "24"
          },
          {
            "name": "MP5",
            "cal": "9×19mm",
            "dmg": "34-19",
            "cap": "30+1/120",
			      "rpm": "800 AUTO",
            "multi":"1.40/1.00",
            "desc": "A German PDW with a roller-delayed blowback system. It is one of the most popular weapons in the world. Middle-of-the-road performance in every respect.",
            "rank": "40"
          },
          {
            "name": "COLT SMG 633",
            "cal": "9×19mm",
            "dmg": "34-18",
            "cap": "32+1/128",
			      "rpm": "1000 AUTO",
            "multi":"1.40/1.00",
            "desc": "An American PDW based on the standard AR-15 platform. Very high fire rate with a slightly larger magazine and strong recoil.",
            "rank": "49"
          },
          {
            "name": "L2A3",
            "cal": "9×19mm",
            "dmg": "36-24",
            "cap": "34+1/128",
			      "rpm": "550 AUTO",
            "multi":"1.40/1.00",
            "desc": "A British PDW intended to replace the STEN in service. High damage with a low fire rate and uncanny stability.",
            "rank": "53"
          },
          {
            "name": "MP5SD",
            "cal": "9×19mm",
            "dmg": "34-19",
            "cap": "30+1/120",
			      "rpm": "800 AUTO",
            "multi":"1.40/1.00",
            "desc": "An integrally suppressed version of the MP5 for special operations forces. Reduced range and velocity compared to the MP5, but with better recoil control.",
            "rank": "60"
          },
          {
            "name": "MP10",
            "cal": "9×19mm",
            "dmg": "29-23",
            "cap": "30+1/120",
			      "rpm": "850 AUTO",
            "multi":"1.40/1.00",
            "desc": "E-",
            "rank": "66"
          },
          {
            "name": "MP5/10",
            "cal": "10mm AUTO",
            "dmg": "35-24",
            "cap": "30+1/120",
			      "rpm": "800 AUTO",
            "multi":"1.40/1.00",
            "desc": "A customized MP5 chambered in the 10mm Auto cartridge. Greatly improved damage at all ranges, with worse recoil control.",
            "rank": "74"
          },
          {
            "name": "M3A1",
            "cal": ".45 ACP",
            "dmg": "48-25",
            "cap": "30/120",
			      "rpm": "450 AUTO",
            "multi":"1.65/1.10",
            "desc": "A vintage American World War II firearm, cheaply made out of stamped steel. Very slow fire rate, with high per-shot damage and decent ranged performance.",
            "rank": "71"
          },
          {
            "name": "UZI",
            "cal": "9×19mm",
            "dmg": "35-18",
            "cap": "25/75",
			      "rpm": "600 AUTO",
            "multi":"1.55/1.10",
            "desc": "An Israeli submachine gun, favored by the IDF throughout the Cold War and famed for its reliability. Moderate rate of fire with low recoil and above-average damage.",
            "rank": "77"
          },
          {
            "name": "AUG A3 PARA",
            "cal": "9×19mm",
            "dmg": "34-19",
            "cap": "25+1/125",
			      "rpm": "780 AUTO, 780 3×BURST",
            "multi":"1.40/1.00",
            "desc": "A paratrooper model of the AUG A3, chambered in 9mm. Slightly reduced magazine size compared to most other PDWs, but features impressive recoil control.",
            "rank": "80"
          },
          {
            "name": "K7",
            "cal": "9×19mm",
            "dmg": "30-17",
            "cap": "30+1/120",
			      "rpm": "1100 AUTO, BURST",
            "multi":"1.40/1.00",
            "desc": "A south korean SMG variant stemming from the K1A rifle. It has quick handling, and even quicker RPM, unlike most weapons of it's type it can equip a few barrel attachments!",
            "rank": "84"
          },
          {
            "name": "KRINKOV",
            "cal": "5.45x39mmR",
            "dmg": "37-18",
            "cap": "30+1/120",
			      "rpm": "735 AUTO",
            "multi":"1.40/1.00",
            "desc": "An AKS-74U Personal Defense Weapon firing the 5.45x39mm cartridge. Fires much faster than the standard Kalashnikov automatic, and reloads at lightning fast speeds. Krinkov is the name given to extra short barreled AK’s in the USA market.",
            "rank": "88"
          },
          {
            "name": "PPSH-41",
            "cal": "7.62×25mm",
            "dmg": "25-19",
            "cap": "71/213",
			      "rpm": "1000 AUTO",
            "multi":"1.40/1.00",
            "desc": "A vintage Russian World War II firearm. Features a high capacity drum magazine and a high fire rate, but per-shot damage is overall weak, and recoil is difficult to manage.",
            "rank": "92"
          },
          {
            "name": "FAL PARA SHORTY",
            "cal": "7.62 NATO",
            "dmg": "40-24",
            "cap": "20+1/120",
			      "rpm": "700 AUTO",
            "multi":"1.40/1.10",
            "desc": "A heavily customized FAL 50.63, and as such has battle rifle characteristics. Has an incredibly short barrel, leading to poor recoil management and equally poor range.",
            "rank": "98"
          },
          {
            "name": "KRISS VECTOR",
            "cal": ".45 ACP",
            "dmg": "35-18",
            "cap": "25+1/150",
			      "rpm": "1200 AUTO",
            "multi":"1.40/1.00",
            "desc": "A uniquely designed American PDW with a special recoil management system. Extremely high fire rate with low recoil and poor ranged performance.",
            "rank": "100"
          },
          {
            "name": "PP-19 BIZON",
            "cal": "9×19mm",
            "dmg": "34-18",
            "cap": "53+1/159",
			      "rpm": "700 AUTO",
            "multi": "1.40/1.00",
            "desc": "Kept ya waiting, huh? 9mm submachine gun developed in 1993 at Izhmash by a team of engineers headed by Victor Kalashnikov. Small but packs a punch with plenty of ammo to spit. Not great for ranged encounters.",
            "rank": "105"
          },
          {
            "name": "MP40",
            "cal": "9×19mm",
            "dmg": "38-22",
            "cap": "32/128",
			      "rpm": "550 AUTO",
            "multi":"1.65/1.00",
            "desc": "A vintage German World War II firearm. Fires at a lower fire rate, but is relatively accurate with manageable recoil and reasonable ranged performance.",
            "rank": "108"
          },
          {
            "name": "X95 SMG",
            "cal": "9×19mm",
            "dmg": "32-18.2",
            "cap": "32+1/160",
			      "rpm": "750 AUTO",
            "multi":"1.50/1.10",
            "desc": "A 9mm conversion of the Tavor X95, which uses standard Uzi magazines. This conversion of the Tavor allows for the replacement of traditional SMGs with a modern platform. Better torso performance with slightly below-average damage.",
            "rank": "115"
          },
          {
            "name": "TOMMY GUN",
            "cal": ".45 ACP",
            "dmg": "37-19",
            "cap": "20/160",
			      "rpm": "725 AUTO",
            "multi":"1.40/1.00",
            "desc": "An iconic American World War I-era firearm designed in 1921. Fires .45 ACP, making for heavy recoil, but has incredible stopping power up close. Has multiple magazine options.  Make him an offer he can't refuse.",
            "rank": "121"
          },
          {
            "name": "INTERVENTION",
            "cal": ".408 CHEY TAC",
            "dmg": "90-80",
            "cap": "7+8/42",
			      "rpm": "50 BOLT",
            "multi":"3.00/1.11",
            "desc": "An American bolt-action sniper rifle famed for its precision and power. Slow fire rate, large magazine size.",
            "rank": "0"
          },
          {
            "name": "REMINGTON 700",
            "cal": ".308 WINCHESTER/7.62 NATO",
            "dmg": "75-70",
            "cap": "6+1/48",
			      "rpm": "60 BOLT",
            "multi":"3.00/1.35",
            "desc": "A classic American bolt-action sniper with a Magpul polymer frame. Middle-of-the-road in all aspects.",
            "rank": "12"
          },
          {
            "name": "DRAGUNOV SVU",
            "cal": "7.62×54mmR",
            "dmg": "60-50",
            "cap": "10+1/60",
			      "rpm": "150 SEMI",
            "multi":"1.90/1.40",
            "desc": "A modern semi-automatic bullpup Russian sniper rifle with a high rate of fire, but lacking stopping power at range.",
            "rank": "38"
          },
          {
            "name": "AWS",
            "cal": ".308 WINCHESTER/7.62 NATO",
            "dmg": "80-70",
            "cap": "",
			      "rpm": "55 BOLT",
            "multi":"3.00/1.25",
            "desc": "A suppressed version of the L115A3(AWM) firing a smaller cartridge. Suffers from reduced velocity, but feeds from a 10 round magazine, with middling firerate.",
            "rank": "41"
          },
          
          {
            "name": "BFG 50",
            "cal": ".50 BMG",
            "dmg": "100-95",
            "cap": "1/42",
			      "rpm": "16 BREECH LOADED",
            "multi":"3.00/1.50",
            "desc": "An American anti-materiel rifle. Hits like a truck, but only chambers a single round, necessitating frequent reloads.",
            "rank": "65"
          },
      {
            "name": "AWM",
            "cal": ".338 LAPUA MAGNUM",
            "dmg": "82-70",
            "cap": "5+1/1.25",
			      "rpm": "50 BOLT",
            "multi":"3.00/1.25",
            "desc": "A British bolt-action sniper rifle with a high rate of fire and a powerful cartridge, but a smaller magazine than normal.",
            "rank": "82"
          },
            {
            "name": "TRG-42",
            "cal": ".338 LAPUA MAGNUM",
            "dmg": "100-65",
            "cap": "5+1/45",
			      "rpm": "45 BOLT",
            "multi":"3.00/1.25",
            "desc": "A Finnish bolt-action rifle. Higher-than-average velocity with a fast reload, but slow bolt chambering action.",
            "rank": "84"
          },
          {
            "name": "MOSIN NAGANT",
            "cal": "7.62×39mmR",
            "dmg": "60-50",
            "cap": "5/50",
			      "rpm": "70 BOLT",
            "multi":"3.00/1.50",
            "desc": "A vintage Russian sniper rifle dating from the 1900s. 5-round internal magazine makes for quick reloading, alongside a reasonably swift fire rate. Poor damage to the body.",
            "rank": "91"
          },
          {
            "name": "DRAGUNOV SVDS",
            "cal": "7.62×54mmR",
            "dmg": "70-60",
            "cap": "10+1/50",
			      "rpm": "60 SEMI",
            "multi":"1.80/1.43",
            "desc": "A paratrooper version of the SVD rifle, with a light frame and a folding stock. Semi-automatic with 10 round magazine, but suffers from poor recoil recovery.",
            "rank": "104"
          },
          {
            "name": "K14",
            "cal": "--",
            "dmg": "68-55",
            "cap": "10+1/50",
			      "rpm": "50 BOLT",
            "multi":"3.00/1.50",
            "desc": "A south korean sniper rifle with light weight design. Balanced overall stats with lots of range, but slow bolting speed.",
            "rank": "138"
          },
          {
            "name": "HECATE II",
            "cal": ".50 BMG",
            "dmg": "97-93",
            "cap": "7+1/28",
			      "rpm": "28 BOLT",
            "multi":"3.00/1.80",
            "desc": "A French magazine-fed .50 BMG rifle. Sure, you could shoot someone from across the map with this, but the bolt takes a long time to cycle, and the reload is by no means swift.",
            "rank": "150"
          },
          {
            "name": "M107",
            "cal": ".50 BMG",
            "dmg": "98-88",
            "cap": "5+1/35",
			      "rpm": "80 SEMI",
            "multi":"3.00/1.50",
            "desc": "A magazine-fed semi-automatic .50 BMG rifle. Lethargic handling, reload, and mobility with very high damage. Big whoop, I've got a Barrett .50 cal. I could kill a building.",
            "rank": "170"
          },
          {
            "name": "STEYR SCOUT",
            "cal": ".376 STEYR",
            "dmg": "45-35",
            "cap": "8+1/64",
			      "rpm": "85 BOLT",
            "multi":"4.00/1.10",
            "desc": "An Austrian scout sniper rifle firing a specially-designed round. Poor damage to the body, but instantly kills to the head at any range, with the fastest bolt cycling rate in class.",
            "rank": "195"
          },
          {
            "name": "WA2000",
            "cal": ".300 WINCHESTER MAGNUM",
            "dmg": "72-66",
            "cap": "6+1/42",
			      "rpm": "90 SEMI",
            "multi":"1.85/1.36",
            "desc": "A semi-automatic German bullpup intended for law enforcement as a counter-terrorist weapon. Very few were made, making it highly sought after. Fast fire rate, moderate damage, poor recoil control. Section 26, paragraph 5 - need to know. I'm sure you understand.",
            "rank": "200"
          },
          {
            "name": "COLT LMG",
            "cal": "5.56 NATO",
            "dmg": "35-20",
            "cap": "60/180",
			      "rpm": "700 AUTO",
            "multi":"1.40/1.10",
            "desc": "A squad assault rifle based on the AR-15 platform with a heavy barrel, large shroud and 60-round magazine. A jack of all trades, with a slow reload.",
            "rank": "0"
          },
          {
            "name": "M60",
            "cal": "7.62 NATO",
            "dmg": "40-26",
            "cap": "100/200",
			      "rpm": "600 AUTO",
            "multi":"1.00/1.00",
            "desc": "A heavy American belt-fed machine gun. Fires slowly and accurately with high damage, but must be reloaded via a lengthy process.",
            "rank": "19"
          },
          {
            "name": "AUG HBAR",
            "cal": "5.56 NATO",
            "dmg": "35-23",
            "cap": "42/172",
			      "rpm": "650 AUTO",
            "multi":"1.40/1.10",
            "desc": "A heavy-barrel, open-bolt version of the AUG, with a slightly slower fire rate and larger magazine. Accurate, but with a slow reload.",
            "rank": "27"
          },
          {
            "name": "MG36",
            "cal": "5.56 NATO",
            "dmg": "30-23",
            "cap": "100+1/200",
			      "rpm": "750 AUTO",
            "multi":"1.40/1.00",
            "desc": "A heavy-barrel variant of the G36 rifle, using 100-round beta c-mags. Low damage, but has a high fire rate and low recoil.",
            "rank": "33"
          },
          {
            "name": "RPK12",
            "cal": "5.45×39mmR",
            "dmg": "32-21",
            "cap": "45+1/135",
			      "rpm": "700 AUTO, 1000 3×BURST",
            "multi":"1.40/1.00",
            "desc": "A  conceptuaized prototype LMG, essentially a heavy-barrel version of the AK12. Features low recoil and an incredibly fast burst fire mode with a fast reload and high damage.",
            "rank": "37"
          },
          {
            "name": "L86 LSW",
            "cal": "5.56 NATO",
            "dmg": "35-25",
            "cap": "30+1/210",
			      "rpm": "610 AUTO",
            "multi":"1.40/1.10",
            "desc": "A heavyweight squad support variant of the L85A2. Feeds from 30 round magazines, but has an incredibly high bullet velocity. Very stable.",
            "rank": "43"
          },
          {
            "name": "RPK",
            "cal": "7.62×39mmR",
            "dmg": "42-32",
            "cap": "45+1/180",
			      "rpm": "600 AUTO",
            "multi":"1.40/1.00",
            "desc": "A heavy variant of the AK47 with a more durable reciever and heavy barrel. Packs a punch, but fires slowly, with strong recoil.",
            "rank": "54"
          },
          
          {
            "name": "HK21",
            "cal": "7.62 NATO",
            "dmg": "39-29",
            "cap": "100/200",
			      "rpm": "800 AUTO, 3×BURST",
            "multi":"1.40/1.00",
            "desc": "Belt-fed heavy variant of the G3 rifle. Fires at a high rate of speed from a 100 round box, but has awful recoil. Has a lengthy reload process.",
            "rank": "67"
          },
      {
            "name": "SCAR HAMR",
            "cal": "5.56 NATO",
            "dmg": "32-23",
            "cap": "50+1/200",
			      "rpm": "650 AUTO",
            "multi":"1.40/1.10",
            "desc": "A heavy-barrel version of the Belgian SCAR rifle with modifications to allow it to adapt to prolonged firing. Feeds from a 50 round drum, making it slow to reload. Uncannily stable.",
            "rank": "72"
          },
            {
            "name": "RPK74",
            "cal": "5.45×39mmR",
            "dmg": "36-21",
            "cap": "45+1/180",
			      "rpm": "650 AUTO",
            "multi":"1.40/1.00",
            "desc": "An updated variant of the RPK based off the AK74, intended to use the less powerful 5.45x39mm cartridge for greater recoil control and better performance overall.",
            "rank": "88"
          },
            {
            "name": "MG3KWS",
            "cal": "7.62 NATO",
            "dmg": "38-23",
            "cap": "50/300",
			      "rpm": "1000 AUTO",
            "multi":"1.40/1.00",
            "desc": "A belt-fed German LMG with roots dating back to the MG42. Fastest fire rate, but has a 50 round magazine, lower damage, and a lengthy reload process.",
            "rank": "101"
          },
          {
            "name": "MG42**",
            "cal": "7.62 NATO",
            "dmg": "36-20",
            "cap": "50/250",
			      "rpm": "1200 AUTO",
            "multi":"1.40/1.00",
            "desc": "The original, the iconic, the feared... The buzzsaw of the axis powers during the second world war, back to prove it’s worth in the modern warzone. Fires extremely fast and hits even harder, but is slow and inaccurate.",
            "rank": "142"
          },
            
		  
        ],
        sortBy: "rank",
        filterByName: "",
        filterByCal: "",
        counter: 0
      },
      
      computed: {
        sortedlists() {
          return this.lists.filter(
            list => list.name.includes(this.filterByName)
          ).sort(
            (a, b) => a[this.sortBy] - b[this.sortBy]
          );
        }
      }
    });












