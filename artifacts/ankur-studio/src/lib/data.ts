interface DesignItem {
  id: string;
  name: string;
  width: number;
  height: number;
}

const rawGalleryData = [
  { name: "500 days", w: 1842, h: 2304, count: 1 },
  { name: "comfort", w: 1080, h: 1350, count: 1 },
  { name: "did it", w: 808, h: 1024, count: 1 },
  { name: "fallen star", w: 981, h: 1266, count: 1 },
  { name: "hammer", w: 1285, h: 644, count: 1 },
  { name: "Indian", w: 981, h: 1472, count: 1 },
  { name: "la la land", w: 980, h: 1228, count: 2 },
  { name: "lifafa", w: 1280, h: 1600, count: 1 },
  { name: "lifafa poster old", w: 982, h: 1226, count: 11 },
  { name: "love", w: 820, h: 1024, count: 4 },
  { name: "nei", w: 1024, h: 1536, count: 1 },
  { name: "orchid", w: 1080, h: 1350, count: 10 },
  { name: "orchid 2", w: 1288, h: 1536, count: 4 },
  { name: "politics", w: 981, h: 1226, count: 1 },
  { name: "rakhlo", w: 2480, h: 3506, count: 2 },
  { name: "rose", w: 818, h: 1024, count: 13 },
  { name: "spider", w: 736, h: 1408, count: 1 },
  { name: "talwinder", w: 1024, h: 1024, count: 1 },
  { name: "tamasha", w: 820, h: 1024, count: 1 },
  { name: "weeknd new", w: 1024, h: 716, count: 1 },
  { name: "weeknd old", w: 1024, h: 1024, count: 12 },
];

export const getGalleryItems = (): DesignItem[] => {
  return rawGalleryData.flatMap((item) =>
    Array.from({ length: item.count }).map((_, index) => ({
      id: `${item.name.replace(/\s+/g, "-").toLowerCase()}-${index}`,
      name: item.name,
      width: item.w,
      height: item.h,
    }))
  );
};
