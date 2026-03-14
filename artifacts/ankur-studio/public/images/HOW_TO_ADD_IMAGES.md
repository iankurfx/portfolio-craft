# How to Add Your Poster Images

Drop your image files into THIS folder (`public/images/`).

## File Naming — use EXACTLY these names

| Design               | File name(s)                                            |
| -------------------- | ------------------------------------------------------- |
| 500 Days             | `500-days.jpg`                                          |
| Comfort              | `comfort.jpg`                                           |
| Did It               | `did-it.jpg`                                            |
| Fallen Star          | `fallen-star.jpg`                                       |
| Hammer               | `hammer.jpg`                                            |
| Indian               | `indian.jpg`                                            |
| La La Land           | `la-la-land-1.jpg` `la-la-land-2.jpg`                   |
| Lifafa               | `lifafa.jpg`                                            |
| Lifafa Poster Old    | `lifafa-old-1.jpg` … `lifafa-old-11.jpg`                |
| Love                 | `love-1.jpg` `love-2.jpg` `love-3.jpg` `love-4.jpg`    |
| Nei                  | `nei.jpg`                                               |
| Orchid               | `orchid-1.jpg` … `orchid-10.jpg`                        |
| Orchid 2             | `orchid2-1.jpg` `orchid2-2.jpg` `orchid2-3.jpg` `orchid2-4.jpg` |
| Politics             | `politics.jpg`                                          |
| Rakhlo               | `rakhlo-1.jpg` `rakhlo-2.jpg`                           |
| Rose                 | `rose-1.jpg` … `rose-13.jpg`                            |
| Spider               | `spider.jpg`                                            |
| Talwinder            | `talwinder.jpg`                                         |
| Tamasha              | `tamasha.jpg`                                           |
| Weeknd New           | `weeknd-new.jpg`                                        |
| Weeknd Old           | `weeknd-old-1.jpg` … `weeknd-old-12.jpg`                |

## Rules
- Supported formats: `.jpg` `.jpeg` `.png` `.webp`
- Names are case-sensitive — keep them lowercase with hyphens
- No spaces in filenames
- If a file is missing, that card simply shows a dark placeholder — no error

## Adding a completely new design
1. Put your image in this folder
2. Open `src/lib/data.ts` and add a new entry:
   ```ts
   { name: "My New Design", slug: "my-new-design", w: 1080, h: 1350, count: 1 },
   ```
3. Save and reload — it appears in the gallery automatically
