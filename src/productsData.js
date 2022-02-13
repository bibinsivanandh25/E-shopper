const products = [
  {
    id: "1",
    title: "Cotton Hooded Neck Hoodie",
    price: 900,
    rating: 5,
    specification: [
      "Care Instructions: Machine Wash",
      "Fit Type: Regular",
      "Comfort & Style : Best Fashionably Comfortable that you have wore till now, Fabric is so soft over the skin. you can use this sweatshirt for jogging",
      "Fabric: 100% Pure Cotton ; Premium Export Quality Branded Full Sleeve sweatshirt for Men; Unique Collection to your wardrobe casuals a hit of effortless cool with this best looking Sweatshirt",
      "Sleeve Type: Full Sleeve; Pockets : Kangaroo Pockets which is enough of cover your palm, when you feel cold; Style: Fashionable round neck Hoodie. Perfect for Trending Stylish Look",
    ],
    detail:
      "The More & More Men's Sweatshirt doesn't just keep you warm on a winter day, it makes you look good too.sweatshirt is ideal for a quick workout as well as a trip to the cafe after work.Adjustable hood protects your ears and neck when you step outdoors.The inside layer is made of fleece feel warm perfect for winter.",
    image: "https://m.media-amazon.com/images/I/61DdTLp4DQL._UX679_.jpg",
  },
  {
    id: "2",
    title: "Samsung Galaxy A52s 5G ",
    price: 38000,
    rating: 5,
    specification: [
      "64MP+12MP+5MP+5MP Quad Camera- Revolutionary 64MP (F2.2) OIS Auto Focus Main camera + 12MP(F2.2) UltraWideCamera + Refined Macro Camera 5MP(F2.4)+Depth Camera 5MP(F2.4) | 32MP Selfie Camera (F2.2)",
      "16.40 centimeters (6.5-inch) 6.5” FHD+ Super AMOLED- infinity-O display, FHD+ resolution with 1080 x 2400 pixels resolution, 407 PPI with 16M colours",
      "Memory, Storage & SIM: 8GB RAM | 128GB internal memory expandable up to 1TB| Dual SIM (nano+nano) dual-standby (5G+5G)",
    ],
    detail:
      "The phone comes with a 6.5-inch touchscreen HD display and features a 8 GB RAM along with a 128 GB internal memory. The phone is also decked with 64MP+12MP+5MP+5MP Quad rear camera and 32MP front camera for your images and videos. For power, the Phone relies on a 4500 mAh Li-Ion battery to give you that extra juice and power when you are on your phone. The phone features a beautiful and sleek design. The processing power of the phone is driven by the Snapdragon 778G Processor that comes along with it.The phone features Snapdragon 778G Processor for the processing power you need. Enjoy better shuffling through applications and multitasking with this processor.",
    image: "https://m.media-amazon.com/images/I/91zjIiEiPQL._SX679_.jpg",
  },
  {
    id: "3",
    title: "OnePlus Buds Pro Wireless ",
    price: 9989,
    rating: 4,
    specification: [
      "OnePlus Audio ID: Personalize your audio via simple listening test at first time setup. This unique hearing profile ID allows one to enjoy the most optimal listening experience best suited to him or her by compensating for mild hearing loss and related aural deficiencies. Smart Adaptive Noise Cancellation: Up to 40 dB hybrid noise cancelling with automated environmental noise detection & adjustment",
      "Worry-free Battery Life: Enjoy up to 38 hours of music and a quick Warp Charging of 10 minutes for 10 hours of playtime",
    ],
    detail:
      "Balance powerful sound with pure silence.Hybrid active noise cancellation keeps you in control of your audio.Enjoy crystal-clear calls and a truly personal music listening experience.OnePlus Audio ID next-grn meets high-def powerful,punchy bass",
    image: "https://m.media-amazon.com/images/I/51B2WwyalFS._SL1500_.jpg",
  },
  {
    id: "4",
    title: "Lenovo IdeaPad Slim 5  ",
    price: 64000,
    rating: 4,
    specification: [
      "2.5GHz Intel i5-10300H 10th Gen processor",
      "8GB DDR4 RAM",
      "1TB 7200rpm hard drive + 256GB SSD",
      "16-inch screen, NVIDIA GeForce GTX 1650 4GB Graphics",
      "Windows 10 Home operating system",
      "2.35kg laptop",
    ],
    detail:
      "The 17.9 mm Ideapad Slim 5i is more than just a laptop - it’s a style statement. Weighing just 1.66 kg while featuring durable aluminum surface and metallic finish, Slim adds a touch of class to all your ventures.Change the way you look at things with 15.6” FHD IPS antiglare display surrounded by 4-sided narrow bezels, giving you a 90% active screen area. Focus on the vivid details and stunning colour accuracy to take your experience from good to great.",
    image: "https://m.media-amazon.com/images/I/61WNxdAeAoL._SX679_.jpg",
  },
  {
    id: "5",
    title: "OnePlus Nord CE 5G ",
    price: 25000,
    rating: 4,
    specification: [
      "64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps",
      " 4k 30 fps | 16MP front camera with 1080p video at 30/60 fps",
      "6.43-inch, 90Hz fluid AMOLED display with 2400 x 1080 pixels resolution",
      "Storage & SIM: 8GB RAM | 128GB internal memory on UFS 2.1 storage system",
      "Dual SIM (nano + nano) | OnePlus Nord CE currently supports dual 4G SIM Cards or a single 5G SIM + 4G SIM",
    ],
    detail:
      "NordCE 5G runs on OxygenOS experience based on Android 11 and introduces a bunch of new features ",
    image: "https://m.media-amazon.com/images/I/61iy2Ru9KdS._SX679_.jpg",
  },
  {
    id: "6",
    title: "Sony Bravia(43 inches) 4K-UHD ",
    price: 54000,
    rating: 5,
    specification: [
      "Resolution: 4K Ultra HD (3840 x 2160) | Refresh Rate: 60 hertz",
      "Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices",
      "     Sound : 20 Watts Output | Bass Reflex speakers | Dolby Audio",
      "Display: X1 | 4K HDR | Live Colour Display | 4K X-Reality Pro | Motionflow XR100",
    ],
    detail:
      "Open baffle speaker delivers impressive low-end sound that's ideal for movies,sport and music.See glories 4K pictures,rich with real-world detail and texture,exclusively powered by our 4K Processor X1",
    image: "https://m.media-amazon.com/images/I/81zeKI1IG9L._SL1500_.jpg",
  },
  {
    id: "7",
    title: "JBL C100SI In Ear Wired Earphones",
    price: 679,
    rating: 4,
    specification: [
      "JBL Signature Sound",
      "Extra Deep Bass. Troubleshooting steps : Kindly ensure 3.5mm port on Host device is clean and dust free, and 3.5mm jack of the earphone is adequately inserted inside the input device port",
      "Noise Cancelling Microphone, Frequency range : 20-20kHz",
      "One-Button Universal Remote with Mic",
      "Quick Launch Access to Google Assistant",
      "Lightweight and Comfortable with 3 sizes of ear tips",
      "Sleek, Glossy & Ergonomic design",
    ],
    detail:
      " Experience deepened notes with true JBL level bass response making everyday musical journey more appealing.  The premium finish pertaining to the color and material used in the product makes it stand out and is sure to turn lot of heads. One button universal remote with noise isolation microphone enables you to answer   and manage your calls effortlessly and without any hindrance.  The 3.5mm gold plating on the jack provides an improved lossless connectivity and better data transfer.  ",
    image: "https://m.media-amazon.com/images/I/51rWFKSUS3L._SX522_.jpg",
  },
];

export { products };
