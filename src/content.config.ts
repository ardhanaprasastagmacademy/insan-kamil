import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pelatihan = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pelatihan' }),
  schema: z.object({
    judul: z.string(),
    ringkasan: z.string(),
    durasi: z.string(),
    kuota: z.number(),
    biaya: z.string(),
    syarat: z.array(z.string()),
    sertifikat: z.boolean(),
    gambar: z.string().optional(),
    urutan: z.number().default(0),
  }),
});

const domba = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/domba' }),
  schema: z.object({
    nama: z.string(),
    jenis: z.string(),
    kegunaan: z.array(z.string()),
    bobotMin: z.number(),
    bobotMax: z.number(),
    umur: z.string(),
    harga: z.number(),
    stok: z.enum(['tersedia', 'habis']),
    gambar: z.string().optional(),
  }),
});

const katering = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/katering' }),
  schema: z.object({
    nama: z.string(),
    deskripsi: z.string(),
    hargaMulai: z.number(),
    minimalPesan: z.string(),
    isiMenu: z.array(z.string()),
    gambar: z.string().optional(),
  }),
});

const bibit = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/bibit' }),
  schema: z.object({
    varietas: z.string(),
    ciri: z.string(),
    usiaBerbuah: z.string(),
    tinggi: z.string(),
    harga: z.number(),
    hargaPartai: z.array(z.object({ min: z.number(), max: z.number().optional(), harga: z.number() })).optional(),
    stok: z.enum(['tersedia', 'habis']),
    gambar: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    judul: z.string(),
    deskripsi: z.string(),
    tanggal: z.coerce.date(),
    kategori: z.string(),
    gambar: z.string().optional(),
    penulis: z.string().default('Tim Insan Kamil'),
  }),
});

export const collections = { pelatihan, domba, katering, bibit, blog };

