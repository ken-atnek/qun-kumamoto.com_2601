/* =======================================
 * 保有車両データ
 * URL: src/data/vehicles/vehiclesData.ts
 * Created: 2026-1-16
 * Last updated: 2026-1-16
 * ======================================= */

export type Mm = number;

export type CargoWhd = {
  w?: Mm; // mm
  h?: Mm; // mm
  d?: Mm; // mm
};

export type VehicleTonnageItem = {
  id: string; // 'wing-13' など一意
  ton: number; // 13
  tonLabel?: string; // 表示用（省略可）例: '13t'
  typeLabel?: string; // 例: 'ドライウイング、空調車'（必要なら）
  frontImage: string; // トン別画像（開いた状態など）
  rearImage: string; // トン別画像（開いた状態など）
  cargoSize?: CargoWhd; // 積載スペース（W/H/D）
  isFeatured?: boolean;
};

export type VehicleCategory = {
  id: string; // 'wing' | 'box' | 'gate' | 'unic' など
  name: string; // '増トンウイング車' など
  items: VehicleTonnageItem[];
};

export const vehiclesData: VehicleCategory[] = [
  {
    id: 'wing-max',
    name: '増トンウイング車',
    items: [
      {
        id: 'wing-max-13',
        ton: 13,
        isFeatured: true,
        typeLabel: 'ウイング',
        frontImage: '/images/vehicles/3471_f.webp',
        rearImage: '/images/vehicles/3471_b.webp',
        cargoSize: { w: 2400, h: 2800, d: 9600 },
      },
      {
        id: 'wing-max-13b',
        ton: 13,
        typeLabel: 'ウイング、ゲート車',
        frontImage: '/images/vehicles/1787_f.webp',
        rearImage: '/images/vehicles/1787_b.webp',
        cargoSize: { w: 2400, h: 2800, d: 9600 },
      },
      {
        id: 'wing-max-13c',
        ton: 13,
        typeLabel: 'ウイング、空調車',
        frontImage: '/images/vehicles/4496_f.webp',
        rearImage: '/images/vehicles/4496_b.webp',
        cargoSize: { w: 2400, h: 2800, d: 9600 },
      },
    ],
  },
  {
    id: 'wing',
    name: 'ウイング車',
    items: [
      {
        id: 'wing-4',
        ton: 4,
        isFeatured: true,
        typeLabel: 'ウイング',
        frontImage: '/images/vehicles/9532_f.webp',
        rearImage: '/images/vehicles/9532_b.webp',
        cargoSize: { w: 2290, h: 2400, d: 6200 },
      },
      {
        id: 'wing-4b',
        ton: 4,
        typeLabel: 'ウイング、ゲート車',
        frontImage: '/images/vehicles/9306_f.webp',
        rearImage: '/images/vehicles/9306_b.webp',
        cargoSize: { w: 2290, h: 2400, d: 6200 },
      },
    ],
  },
  {
    id: 'flatbed',
    name: '平ボディ',
    items: [
      {
        id: 'flatbed-13',
        ton: 13,
        isFeatured: true,
        frontImage: '/images/vehicles/8850_f.webp',
        rearImage: '/images/vehicles/8850_b.webp',
        cargoSize: { w: 2350, d: 9550 },
      },
      {
        id: 'wing-4',
        ton: 4,
        frontImage: '/images/vehicles/7897_f.webp',
        rearImage: '/images/vehicles/7897_b.webp',
        cargoSize: { w: 2200, d: 6200 },
      },
      {
        id: 'wing-3',
        ton: 3,
        typeLabel: 'ゲート車',
        frontImage: '/images/vehicles/1993_f.webp',
        rearImage: '/images/vehicles/1993_b.webp',
        cargoSize: { w: 1500, d: 3050 },
      },
    ],
  },
  {
    id: 'box',
    name: '箱　車',
    items: [
      {
        id: 'box-7',
        ton: 7,
        typeLabel: '冷蔵・ゲート車',
        isFeatured: true,
        frontImage: '/images/vehicles/4975_f.webp',
        rearImage: '/images/vehicles/4975_b.webp',
        cargoSize: { w: 2250, h: 2150, d: 6800 },
      },
      {
        id: 'box-4',
        ton: 4,
        frontImage: '/images/vehicles/6536_f.webp',
        rearImage: '/images/vehicles/6536_b.webp',
        cargoSize: { w: 2070, h: 2130, d: 6200 },
      },
      {
        id: 'box-2',
        ton: 2,
        typeLabel: 'ゲート車',
        frontImage: '/images/vehicles/9278_f.webp',
        rearImage: '/images/vehicles/9278_b.webp',
        cargoSize: { w: 2070, h: 2230, d: 4500 },
      },
    ],
  },
  {
    id: 'unic',
    name: 'ユニック車',
    items: [
      {
        id: 'unic-3',
        ton: 3,
        typeLabel: '冷蔵・ゲート車',
        isFeatured: true,
        frontImage: '/images/vehicles/79_f.webp',
        rearImage: '/images/vehicles/79_b.webp',
        cargoSize: { w: 2050, d: 4300 },
      },
    ],
  },
];
