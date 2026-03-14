// ─────────────────────────────────────────────────────────────
//  ANKUR STUDIO — Gallery Data
//
//  HOW TO ADD YOUR POSTER IMAGES
//  ─────────────────────────────
//  1. Place your image files in:
//       artifacts/ankur-studio/public/images/
//
//  2. Name them exactly as shown in the `imagePath` field below.
//     Examples:
//       500-days.jpg
//       la-la-land-1.jpg
//       orchid-3.jpg
//       weeknd-old-7.jpg
//
//  3. Supported formats: .jpg  .jpeg  .png  .webp
//
//  4. No code changes needed — just drop the files in and reload.
//
//  HOW TO ADD A BRAND-NEW DESIGN
//  ───────────────────────────────
//  Add a new entry to rawGalleryData below:
//    { name: "my design", slug: "my-design", w: 1080, h: 1350, count: 1 }
//  Then place my-design.jpg in public/images/.
// ─────────────────────────────────────────────────────────────

export interface DesignItem {
  id: string;
  name: string;
  width: number;
  height: number;
  imagePath: string; // relative to /public  →  /images/filename.jpg
}

interface RawEntry {
  name: string;
  slug: string;  // used to build filenames
  w: number;
  h: number;
  count: number;
}

const rawGalleryData: RawEntry[] = [
  { name: "500 Days",           slug: "500-days",         w: 1842, h: 2304, count: 1  },
  { name: "Comfort",            slug: "comfort",           w: 1080, h: 1350, count: 1  },
  { name: "Did It",             slug: "did-it",            w: 808,  h: 1024, count: 1  },
  { name: "Fallen Star",        slug: "fallen-star",       w: 981,  h: 1266, count: 1  },
  { name: "Hammer",             slug: "hammer",            w: 1285, h: 644,  count: 1  },
  { name: "Indian",             slug: "indian",            w: 981,  h: 1472, count: 1  },
  { name: "La La Land",         slug: "la-la-land",        w: 980,  h: 1228, count: 2  },
  { name: "Lifafa",             slug: "lifafa",            w: 1280, h: 1600, count: 1  },
  { name: "Lifafa Poster Old",  slug: "lifafa-old",        w: 982,  h: 1226, count: 11 },
  { name: "Love",               slug: "love",              w: 820,  h: 1024, count: 4  },
  { name: "Nei",                slug: "nei",               w: 1024, h: 1536, count: 1  },
  { name: "Orchid",             slug: "orchid",            w: 1080, h: 1350, count: 10 },
  { name: "Orchid 2",           slug: "orchid2",           w: 1288, h: 1536, count: 4  },
  { name: "Politics",           slug: "politics",          w: 981,  h: 1226, count: 1  },
  { name: "Rakhlo",             slug: "rakhlo",            w: 2480, h: 3506, count: 2  },
  { name: "Rose",               slug: "rose",              w: 818,  h: 1024, count: 13 },
  { name: "Spider",             slug: "spider",            w: 736,  h: 1408, count: 1  },
  { name: "Talwinder",          slug: "talwinder",         w: 1024, h: 1024, count: 1  },
  { name: "Tamasha",            slug: "tamasha",           w: 820,  h: 1024, count: 1  },
  { name: "Weeknd New",         slug: "weeknd-new",        w: 1024, h: 716,  count: 1  },
  { name: "Weeknd Old",         slug: "weeknd-old",        w: 1024, h: 1024, count: 12 },
];

// Builds the filename: count=1 → "slug.jpg", count>1 → "slug-1.jpg", "slug-2.jpg" …
function imagePath(slug: string, index: number, total: number): string {
  const file = total === 1 ? `${slug}.jpg` : `${slug}-${index + 1}.jpg`;
  return `/images/${file}`;
}

export function getGalleryItems(): DesignItem[] {
  return rawGalleryData.flatMap((entry) =>
    Array.from({ length: entry.count }).map((_, i) => ({
      id:        `${entry.slug}-${i}`,
      name:      entry.name,
      width:     entry.w,
      height:    entry.h,
      imagePath: imagePath(entry.slug, i, entry.count),
    }))
  );
}
