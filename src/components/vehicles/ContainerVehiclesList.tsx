/* =======================================
 * 保有車両(vehicles)ページ｜車両リスト
 * URL: src/components/vehicles/ContainerVehiclesList.tsx
 * Created: 2026-1-16
 * Last updated: 2026-1-16
 * ======================================= */
'use client';

import styles from '@/styles/PageVehicles.module.scss';
import { useMemo, useState } from 'react';
import {
  vehiclesData,
  type VehicleCategory,
} from '@/data/vehicles/vehiclesData';
import Image from 'next/image';

function CategoryBlock({ category }: { category: VehicleCategory }) {
  const initialId =
    category.items.find((v) => v.isFeatured)?.id ?? category.items[0]?.id ?? '';

  const [activeId, setActiveId] = useState<string>(initialId);
  const [prevId, setPrevId] = useState<string>('');
  const activeItem = useMemo(() => {
    return category.items.find((v) => v.id === activeId) ?? category.items[0];
  }, [activeId, category.items]);

  return (
    <li>
      <h3>{category.name}</h3>

      <div className={styles.boxHead}>
        <Image
          src={category.categoryImage}
          alt={category.name}
          width={600}
          height={374}
        />
        <div className={styles.wrapHeadDetails}>
          <div className={styles.innerTitle}>
            <h4>{category.name}</h4>
            <span className={styles.itemWeight}>
              {activeItem?.ton}
              <i>t</i>
            </span>
            <p>{activeItem?.typeLabel}</p>
          </div>
          <div className={styles.innerSize}>
            <h5>積載スペースサイズ</h5>
            <ul>
              <li>
                <span>L</span>
                <div className={styles.itemSize}>
                  {activeItem?.interior?.length
                    ? `${activeItem.interior.length.toLocaleString()}mm`
                    : '—'}
                </div>
              </li>
              <li>
                <span>W</span>
                <div className={styles.itemSize}>
                  {activeItem?.interior?.width
                    ? `${activeItem.interior.width.toLocaleString()}mm`
                    : '—'}
                </div>
              </li>
              <li>
                <span>H</span>
                <div className={styles.itemSize}>
                  {activeItem?.interior?.height
                    ? `${activeItem.interior.height.toLocaleString()}mm`
                    : '—'}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ul className={styles.sizeList}>
        {category.items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <div className={styles.itemImage}>
                {isActive ? (
                  <div className={styles.fadeStack}>
                    {prevId ? (
                      <div className={styles.fadePrev}>
                        <Image
                          src={
                            category.items.find((v) => v.id === prevId)
                              ?.tonImage ?? item.tonImage
                          }
                          alt=""
                          width={600}
                          height={374}
                        />
                      </div>
                    ) : null}

                    <div className={styles.fadeNext}>
                      <Image
                        src={item.tonImage}
                        alt={`${category.name} ${item.ton}t`}
                        width={600}
                        height={374}
                      />
                    </div>

                    <span>
                      {item.ton}
                      <i>t</i>
                    </span>
                  </div>
                ) : null}
              </div>
              <div className={styles.headTitle}>
                <p>{item.ton}t</p>
                <button
                  type="button"
                  className={isActive ? styles.isActive : undefined}
                  onClick={() => {
                    setPrevId(activeId);
                    setActiveId(item.id);
                  }}
                >
                  <span>view</span>
                </button>
              </div>
              <dl>
                <div>
                  <dt>外側</dt>
                  <dd>
                    <span>
                      <i>長さ</i>
                      {item.exterior?.length
                        ? `${item.exterior.length.toLocaleString()}mm`
                        : '—'}
                    </span>
                    <span>
                      <i>幅</i>
                      {item.exterior?.width
                        ? `${item.exterior.width.toLocaleString()}mm`
                        : '—'}
                    </span>
                    <span>
                      <i>高さ</i>
                      {item.exterior?.height
                        ? `${item.exterior.height.toLocaleString()}mm`
                        : '—'}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt>内側</dt>
                  <dd>
                    <span>
                      <i>長さ</i>
                      {item.interior?.length
                        ? `${item.interior.length.toLocaleString()}mm`
                        : '—'}
                    </span>
                    <span>
                      <i>幅</i>
                      {item.interior?.width
                        ? `${item.interior.width.toLocaleString()}mm`
                        : '—'}
                    </span>
                    <span>
                      <i>高さ</i>
                      {item.interior?.height
                        ? `${item.interior.height.toLocaleString()}mm`
                        : '—'}
                    </span>
                  </dd>
                </div>
              </dl>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default function ContainerVehiclesList() {
  return (
    <section className={styles.containerVehiclesList}>
      <ul className={styles.vehiclesList}>
        {vehiclesData.map((category) => (
          <CategoryBlock key={category.id} category={category} />
        ))}
      </ul>
    </section>
  );
}
