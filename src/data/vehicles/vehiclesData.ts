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
    id: 'wing',
    name: '増トンウイング車',
    items: [
      {
        id: 'wing-13',
        ton: 13,
        isFeatured: true,
        typeLabel: 'ウイング',
        frontImage: '/images/vehicles/3471_f.webp',
        rearImage: '/images/vehicles/3471_b.webp',
        cargoSize: { w: 2400, h: 2800, d: 9600 },
      },
      {
        id: 'wing-13b',
        ton: 13,
        typeLabel: 'ウイング、ゲート車',
        frontImage: '/images/vehicles/wing/13t.webp',
        rearImage: '/images/vehicles/wing/13t.webp',
        cargoSize: { w: 2400, h: 2800, d: 9600 },
      },
      {
        id: 'wing-13c',
        ton: 13,
        typeLabel: 'ウイング、空調車',
        frontImage: '/images/vehicles/wing/13t.webp',
        rearImage: '/images/vehicles/wing/13t.webp',
        cargoSize: { w: 2400, h: 2800, d: 9600 },
      },
    ],
  },

  // {
  //   id: 'box',
  //   name: '箱　車',
  //   categoryImage: '/images/vehicles/box/main.webp',
  //   items: [
  //     {
  //       id: 'box-4',
  //       ton: 4,
  //       isFeatured: true,
  //       tonImage: '/images/vehicles/box/4t.webp',
  //       exterior: { length: undefined, width: undefined, height: undefined },
  //       interior: { length: undefined, width: undefined, height: undefined },
  //     },
  //     {
  //       id: 'box-2',
  //       ton: 2,
  //       tonImage: '/images/vehicles/box/2t.webp',
  //       exterior: { length: 4550, width: 2200, height: 2400 },
  //       interior: { length: 4450, width: 1900, height: 1900 },
  //     },
  //   ],
  // },

  // {
  //   id: 'gate',
  //   name: 'ゲート車',
  //   categoryImage: '/images/vehicles/gate/main.webp',
  //   items: [
  //     {
  //       id: 'gate-10',
  //       ton: 10,
  //       isFeatured: true,
  //       tonImage: '/images/vehicles/gate/10t.webp',
  //       cargoSize: { w: 9600, h: 2400, d: 2170 },
  //       exterior: { length: 9750, width: 2500, height: 3000 },
  //       interior: { length: 9600, width: 2400, height: 2550 },
  //     },
  //     {
  //       id: 'gate-4',
  //       ton: 4,
  //       tonImage: '/images/vehicles/gate/4t.webp',
  //       exterior: { length: 6400, width: 2450, height: 2350 },
  //       interior: { length: 6050, width: 2330, height: 2170 },
  //     },
  //   ],
  // },
];
