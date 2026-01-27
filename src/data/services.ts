export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: 'general-repairs',
    name: 'General Repairs',
    shortDescription: 'From minor fixes to major repairs, we handle all your home maintenance needs.',
    description: 'When something breaks in your home, you need a reliable handyman who can fix it quickly and correctly. Our general repair services cover everything from squeaky doors and loose handles to broken fixtures and damaged walls. We understand that small problems can become big headaches if left unattended, which is why we provide prompt, professional repair services throughout Suffolk County.',
    icon: 'wrench',
    features: [
      'Door repairs and adjustments',
      'Window repairs and weatherstripping',
      'Lock installation and repair',
      'Cabinet repairs and hardware replacement',
      'Shelf installation and mounting',
      'Minor structural repairs',
      'Caulking and sealing',
      'Weather damage repairs'
    ],
    faqs: [
      {
        question: 'What types of repairs do you handle?',
        answer: 'We handle virtually any home repair including doors, windows, cabinets, fixtures, walls, and general maintenance issues. If you\'re unsure whether we can help, just give us a call for a free consultation.'
      },
      {
        question: 'Do you offer same-day repair services?',
        answer: 'We strive to accommodate urgent repairs whenever possible. Contact us to discuss your timeline and we\'ll do our best to fit you into our schedule quickly.'
      },
      {
        question: 'How much do general repairs cost?',
        answer: 'Repair costs vary depending on the scope of work. We provide free estimates so you know exactly what to expect before any work begins.'
      }
    ],
    metaTitle: 'General Home Repairs in Suffolk County, NY | NextDoor Handyman',
    metaDescription: 'Professional general repair services in Suffolk County, NY. From door fixes to cabinet repairs, our skilled handymen handle all your home maintenance needs. Call (631) 295-4020.'
  },
  {
    slug: 'plumbing',
    name: 'Plumbing Services',
    shortDescription: 'Expert plumbing repairs and installations for your home.',
    description: 'Plumbing problems can disrupt your daily routine and cause significant damage if not addressed promptly. Our experienced handymen provide reliable plumbing services for homes throughout Suffolk County. From leaky faucets and running toilets to pipe repairs and fixture installations, we deliver quality workmanship that stands the test of time.',
    icon: 'droplet',
    features: [
      'Faucet repair and replacement',
      'Toilet repairs and installation',
      'Pipe leak repairs',
      'Drain cleaning and unclogging',
      'Garbage disposal installation',
      'Water heater maintenance',
      'Showerhead and fixture installation',
      'Under-sink plumbing repairs'
    ],
    faqs: [
      {
        question: 'Do you handle emergency plumbing repairs?',
        answer: 'Yes, we understand that plumbing emergencies can\'t wait. Contact us immediately if you have a burst pipe, major leak, or other urgent plumbing issue and we\'ll prioritize your repair.'
      },
      {
        question: 'Can you install new plumbing fixtures?',
        answer: 'Absolutely! We install faucets, toilets, sinks, garbage disposals, and other fixtures. We can also help you select the right fixtures for your needs and budget.'
      },
      {
        question: 'What areas do you serve for plumbing services?',
        answer: 'We provide plumbing services throughout Suffolk County, NY, including all towns from Yaphank to the East End.'
      }
    ],
    metaTitle: 'Plumbing Services in Suffolk County, NY | NextDoor Handyman',
    metaDescription: 'Reliable plumbing repairs and installations in Suffolk County, NY. Faucet repairs, toilet installation, pipe fixes & more. Call NextDoor Handyman at (631) 295-4020.'
  },
  {
    slug: 'electrical',
    name: 'Electrical Services',
    shortDescription: 'Safe and reliable electrical repairs and installations.',
    description: 'Electrical work requires precision and expertise to ensure the safety of your home and family. Our skilled handymen provide a range of electrical services for homeowners in Suffolk County. Whether you need new outlets installed, light fixtures replaced, or ceiling fans mounted, we complete every job with attention to detail and strict adherence to safety standards.',
    icon: 'zap',
    features: [
      'Light fixture installation',
      'Ceiling fan installation and repair',
      'Outlet and switch replacement',
      'Dimmer switch installation',
      'GFCI outlet installation',
      'Smoke detector installation',
      'Doorbell installation and repair',
      'Basic electrical troubleshooting'
    ],
    faqs: [
      {
        question: 'Is it safe to do electrical work yourself?',
        answer: 'Electrical work can be dangerous and should be performed by experienced professionals. Improper electrical work can cause fires, shocks, and damage to your home\'s electrical system.'
      },
      {
        question: 'Can you install ceiling fans?',
        answer: 'Yes! Ceiling fan installation is one of our most popular services. We can replace existing fixtures with ceiling fans or install new fans where no fixture exists.'
      },
      {
        question: 'Do you install outdoor lighting?',
        answer: 'Yes, we install outdoor lighting including porch lights, security lights, landscape lighting, and motion-sensor fixtures to improve your home\'s safety and curb appeal.'
      }
    ],
    metaTitle: 'Electrical Services in Suffolk County, NY | NextDoor Handyman',
    metaDescription: 'Professional electrical repairs and installations in Suffolk County, NY. Light fixtures, ceiling fans, outlets & more. Safe, reliable service. Call (631) 295-4020.'
  },
  {
    slug: 'carpentry',
    name: 'Carpentry Services',
    shortDescription: 'Custom woodwork and carpentry solutions for your home.',
    description: 'Quality carpentry enhances both the functionality and beauty of your home. Our skilled craftsmen provide expert carpentry services throughout Suffolk County, from simple repairs to custom built-ins. Whether you need trim work, door installation, or custom shelving, we bring precision and craftsmanship to every project.',
    icon: 'hammer',
    features: [
      'Trim and molding installation',
      'Door installation and repair',
      'Custom shelving and built-ins',
      'Deck repairs and maintenance',
      'Fence repairs',
      'Baseboard installation',
      'Crown molding installation',
      'Wood rot repair'
    ],
    faqs: [
      {
        question: 'Do you do custom carpentry work?',
        answer: 'Yes, we create custom solutions including built-in shelving, entertainment centers, and storage solutions tailored to your specific needs and space.'
      },
      {
        question: 'Can you repair rotted wood?',
        answer: 'Absolutely. Wood rot repair is essential to maintain your home\'s structural integrity. We remove damaged wood, treat affected areas, and install new materials to prevent future rot.'
      },
      {
        question: 'Do you install interior doors?',
        answer: 'Yes, we install all types of interior doors including pre-hung doors, slab doors, pocket doors, and barn doors. We ensure proper fit and smooth operation.'
      }
    ],
    metaTitle: 'Carpentry Services in Suffolk County, NY | NextDoor Handyman',
    metaDescription: 'Expert carpentry services in Suffolk County, NY. Custom shelving, trim work, door installation & repairs. Quality craftsmanship guaranteed. Call (631) 295-4020.'
  },
  {
    slug: 'painting',
    name: 'Painting Services',
    shortDescription: 'Professional interior and exterior painting to refresh your home.',
    description: 'A fresh coat of paint can completely transform the look and feel of your home. Our professional painting services in Suffolk County deliver beautiful, lasting results for both interior and exterior projects. We take pride in our meticulous preparation, clean lines, and attention to detail that ensures a flawless finish every time.',
    icon: 'paintbrush',
    features: [
      'Interior wall painting',
      'Exterior house painting',
      'Trim and door painting',
      'Cabinet painting and refinishing',
      'Deck and fence staining',
      'Accent walls',
      'Ceiling painting',
      'Touch-up and repair painting'
    ],
    faqs: [
      {
        question: 'Do you provide paint and supplies?',
        answer: 'Yes, we can provide all necessary paint and supplies, or we can use materials you\'ve already purchased. We\'re happy to help you select the right paint colors and finishes for your project.'
      },
      {
        question: 'How long does a typical painting job take?',
        answer: 'Project duration depends on the scope of work. A single room typically takes 1-2 days, while whole-house projects may take a week or more. We\'ll provide a timeline estimate with your quote.'
      },
      {
        question: 'Do you do exterior painting?',
        answer: 'Yes, we provide exterior painting services including siding, trim, doors, decks, and fences. Weather permitting, exterior painting is best done in spring through fall.'
      }
    ],
    metaTitle: 'Painting Services in Suffolk County, NY | NextDoor Handyman',
    metaDescription: 'Professional painting services in Suffolk County, NY. Interior & exterior painting, cabinet refinishing, deck staining. Quality results guaranteed. Call (631) 295-4020.'
  },
  {
    slug: 'drywall',
    name: 'Drywall Services',
    shortDescription: 'Expert drywall installation, repair, and finishing.',
    description: 'Whether you have holes, cracks, water damage, or need new drywall installed, our skilled team delivers seamless results that blend perfectly with your existing walls. We provide comprehensive drywall services throughout Suffolk County, from small patch repairs to complete room installations. Our attention to detail ensures invisible repairs and smooth, paint-ready surfaces.',
    icon: 'square',
    features: [
      'Drywall hole repair',
      'Crack repair and sealing',
      'Water damage repair',
      'New drywall installation',
      'Drywall taping and finishing',
      'Texture matching',
      'Ceiling drywall repair',
      'Popcorn ceiling removal'
    ],
    faqs: [
      {
        question: 'Can you match existing wall texture?',
        answer: 'Yes, our skilled technicians can match most wall textures including orange peel, knockdown, and smooth finishes. We take care to blend repairs seamlessly with surrounding areas.'
      },
      {
        question: 'How do you repair water-damaged drywall?',
        answer: 'We first ensure the water source is addressed, then remove all damaged drywall, treat for mold if necessary, install new drywall, and finish to match your existing walls.'
      },
      {
        question: 'Do you remove popcorn ceilings?',
        answer: 'Yes, popcorn ceiling removal is one of our services. We carefully remove the texture, repair the underlying surface, and finish the ceiling smooth or with a modern texture.'
      }
    ],
    metaTitle: 'Drywall Repair & Installation in Suffolk County, NY | NextDoor Handyman',
    metaDescription: 'Professional drywall services in Suffolk County, NY. Hole repair, water damage repair, new installation & texture matching. Seamless results. Call (631) 295-4020.'
  },
  {
    slug: 'furniture-assembly',
    name: 'Furniture Assembly',
    shortDescription: 'Professional assembly of all types of furniture.',
    description: 'Save time and frustration with our professional furniture assembly services. We expertly assemble all types of furniture from IKEA, Wayfair, Amazon, and other retailers. Our experienced handymen follow manufacturer instructions precisely and ensure every piece is sturdy, level, and ready to use. Serving homes throughout Suffolk County.',
    icon: 'armchair',
    features: [
      'IKEA furniture assembly',
      'Bedroom furniture assembly',
      'Office furniture setup',
      'Outdoor furniture assembly',
      'Exercise equipment assembly',
      'Shelving unit assembly',
      'Entertainment center assembly',
      'Kids furniture and playsets'
    ],
    faqs: [
      {
        question: 'How long does furniture assembly take?',
        answer: 'Assembly time varies by item. Simple pieces may take 30-60 minutes, while complex items like wardrobes or entertainment centers can take 2-4 hours. We\'ll provide a time estimate when you describe your items.'
      },
      {
        question: 'Do you assemble IKEA furniture?',
        answer: 'Yes! IKEA furniture assembly is one of our most requested services. We\'re experienced with all IKEA products from simple shelves to complex PAX wardrobes and kitchen installations.'
      },
      {
        question: 'Can you disassemble furniture for moving?',
        answer: 'Yes, we provide furniture disassembly services for moving or reconfiguring your space. We carefully disassemble pieces and can reassemble them at your new location.'
      }
    ],
    metaTitle: 'Furniture Assembly Services in Suffolk County, NY | NextDoor Handyman',
    metaDescription: 'Professional furniture assembly in Suffolk County, NY. IKEA, Wayfair & more. Fast, reliable service for all furniture types. Call NextDoor Handyman at (631) 295-4020.'
  },
  {
    slug: 'office-furniture-assembly',
    name: 'Office Furniture Assembly',
    shortDescription: 'Professional setup of office furniture and workstations.',
    description: 'Create a productive workspace with our professional office furniture assembly services. We handle everything from executive desks and ergonomic chairs to complete cubicle systems and conference room setups. Our team serves businesses and home offices throughout Suffolk County, ensuring your workspace is set up correctly and efficiently.',
    icon: 'briefcase',
    features: [
      'Executive desk assembly',
      'Ergonomic chair setup',
      'Cubicle and partition installation',
      'Conference table assembly',
      'Filing cabinet assembly',
      'Standing desk installation',
      'Bookshelf and storage assembly',
      'Reception desk setup'
    ],
    faqs: [
      {
        question: 'Do you serve commercial businesses?',
        answer: 'Yes, we provide office furniture assembly for businesses of all sizes, from home offices to large corporate spaces. We can work after hours to minimize disruption to your operations.'
      },
      {
        question: 'Can you assemble standing desks?',
        answer: 'Absolutely! We assemble all types of standing desks including electric sit-stand desks, manual adjustment desks, and desk converters. We ensure proper setup and calibration.'
      },
      {
        question: 'Do you handle large office furniture projects?',
        answer: 'Yes, we can handle projects of any size, from single desk assembly to complete office buildouts. Contact us to discuss your project and receive a custom quote.'
      }
    ],
    metaTitle: 'Office Furniture Assembly in Suffolk County, NY | NextDoor Handyman',
    metaDescription: 'Professional office furniture assembly in Suffolk County, NY. Desks, chairs, cubicles & workstations. Commercial & home office setup. Call (631) 295-4020.'
  },
  {
    slug: 'pressure-washing',
    name: 'Pressure Washing',
    shortDescription: 'Powerful cleaning for driveways, decks, siding, and more.',
    description: 'Restore the beauty of your home\'s exterior with our professional pressure washing services. Over time, dirt, mold, mildew, and algae can accumulate on your home\'s surfaces, making them look aged and dingy. Our powerful yet careful pressure washing removes years of buildup, revealing clean, refreshed surfaces. We serve homeowners throughout Suffolk County.',
    icon: 'sparkles',
    features: [
      'Driveway and walkway cleaning',
      'Deck and patio cleaning',
      'House siding washing',
      'Fence cleaning and restoration',
      'Concrete cleaning',
      'Brick and stone cleaning',
      'Gutter exterior cleaning',
      'Pre-paint surface preparation'
    ],
    faqs: [
      {
        question: 'Is pressure washing safe for all surfaces?',
        answer: 'Different surfaces require different pressure levels and techniques. We adjust our equipment and methods to safely clean each surface type, from delicate wood to tough concrete.'
      },
      {
        question: 'How often should I pressure wash my home?',
        answer: 'Most homes benefit from annual pressure washing. However, homes in shaded areas or near trees may need more frequent cleaning due to faster mold and algae growth.'
      },
      {
        question: 'Can pressure washing damage my property?',
        answer: 'When done incorrectly, yes. That\'s why professional service is important. We use appropriate pressure levels and techniques to thoroughly clean without causing damage.'
      }
    ],
    metaTitle: 'Pressure Washing Services in Suffolk County, NY | NextDoor Handyman',
    metaDescription: 'Professional pressure washing in Suffolk County, NY. Driveways, decks, siding & more. Remove dirt, mold & grime. Restore your home\'s beauty. Call (631) 295-4020.'
  },
  {
    slug: 'gutter-cleaning',
    name: 'Gutter Cleaning',
    shortDescription: 'Keep your gutters clear and your home protected.',
    description: 'Clean gutters are essential for protecting your home from water damage. Clogged gutters can cause roof damage, foundation problems, basement flooding, and landscape erosion. Our professional gutter cleaning service removes leaves, debris, and buildup to keep water flowing properly away from your home. We serve homeowners throughout Suffolk County.',
    icon: 'home',
    features: [
      'Complete gutter debris removal',
      'Downspout clearing and flushing',
      'Gutter inspection',
      'Minor gutter repairs',
      'Gutter guard installation',
      'Roof debris removal',
      'Seasonal maintenance programs',
      'Before and after photos'
    ],
    faqs: [
      {
        question: 'How often should gutters be cleaned?',
        answer: 'We recommend cleaning gutters at least twice a year – in late spring after seeds fall and in late fall after leaves drop. Homes with many trees nearby may need more frequent cleaning.'
      },
      {
        question: 'What happens if I don\'t clean my gutters?',
        answer: 'Clogged gutters can cause water to overflow and damage your roof, fascia, siding, foundation, and landscaping. In winter, ice dams can form, causing additional roof damage.'
      },
      {
        question: 'Do you install gutter guards?',
        answer: 'Yes, we install various types of gutter guards and covers to reduce debris buildup and minimize the frequency of gutter cleaning needed.'
      }
    ],
    metaTitle: 'Gutter Cleaning Services in Suffolk County, NY | NextDoor Handyman',
    metaDescription: 'Professional gutter cleaning in Suffolk County, NY. Prevent water damage with clean, clear gutters. Debris removal & minor repairs. Call (631) 295-4020 today.'
  },
  {
    slug: 'tv-mounting',
    name: 'TV Mounting',
    shortDescription: 'Professional TV installation and cable management.',
    description: 'Transform your living space with a professionally mounted TV. Our TV mounting service ensures your television is securely installed at the perfect height and angle for optimal viewing. We handle all TV sizes and types, from small bedroom TVs to large home theater displays. Our service includes proper wall anchoring, level mounting, and clean cable management throughout Suffolk County.',
    icon: 'tv',
    features: [
      'Flat-screen TV mounting',
      'Full-motion mount installation',
      'Tilting mount installation',
      'In-wall cable concealment',
      'Soundbar mounting',
      'Component shelf installation',
      'Fireplace TV mounting',
      'Outdoor TV installation'
    ],
    faqs: [
      {
        question: 'What size TVs can you mount?',
        answer: 'We mount TVs of all sizes, from small 32" bedroom TVs to large 85"+ home theater displays. We select the appropriate mount and wall anchors based on your TV\'s size and weight.'
      },
      {
        question: 'Can you hide the cables in the wall?',
        answer: 'Yes! Clean cable management is part of our service. We can run cables through the wall for a clean, cord-free appearance, or use cable covers for a neat look when in-wall installation isn\'t possible.'
      },
      {
        question: 'Can you mount a TV above a fireplace?',
        answer: 'Yes, we install TVs above fireplaces using appropriate mounts that can angle down for comfortable viewing. We ensure proper heat clearance and secure mounting.'
      }
    ],
    metaTitle: 'TV Mounting Services in Suffolk County, NY | NextDoor Handyman',
    metaDescription: 'Professional TV mounting & installation in Suffolk County, NY. All TV sizes, cable management included. Perfect placement guaranteed. Call (631) 295-4020.'
  }
];

export const businessInfo = {
  name: 'NextDoor Handyman Long Island',
  phone: '(631) 295-4020',
  phoneLink: 'tel:+16312954020',
  email: 'contact@nextdoorhandymanli.com',
  serviceArea: 'Suffolk County, NY',
  city: 'Yaphank',
  state: 'NY',
  zipCode: '11980',
  hours: 'Monday - Saturday: 7:00 AM - 6:00 PM',
  description: 'Your trusted local handyman service in Suffolk County, Long Island. We provide professional home repair, maintenance, and improvement services.',
};

export const suffolkTowns = [
  'Yaphank', 'Patchogue', 'Medford', 'Coram', 'Selden', 'Centereach',
  'Holbrook', 'Ronkonkoma', 'Farmingville', 'Holtsville', 'Shirley',
  'Mastic', 'Mastic Beach', 'Brookhaven', 'Bellport', 'Blue Point',
  'Bayport', 'Sayville', 'Bohemia', 'Oakdale', 'West Islip',
  'Bay Shore', 'Brentwood', 'Central Islip', 'Islandia', 'Hauppauge',
  'Smithtown', 'St. James', 'Nesconset', 'Lake Grove', 'Stony Brook',
  'Port Jefferson', 'Miller Place', 'Sound Beach', 'Rocky Point',
  'Ridge', 'Manorville', 'Calverton', 'Riverhead', 'Wading River',
  'Shoreham', 'Mount Sinai', 'Setauket', 'East Setauket'
];
