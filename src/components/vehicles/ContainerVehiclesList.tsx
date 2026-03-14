/* =======================================
 * 保有車両(vehicles)ページ｜車両リスト
 * URL: src/components/vehicles/ContainerVehiclesList.tsx
 * Created: 2026-1-16
 * Last updated: 2026-3-14
 * ======================================= */
'use client';

import styles from '@/styles/PageVehicles.module.scss';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import {
  vehiclesData,
  type VehicleCategory,
  type VehicleTonnageItem,
} from '@/data/vehicles/vehiclesData';

const getInitialVehicleId = (items: VehicleTonnageItem[]) => {
  const featuredItem = items.find((item) => item.isFeatured);
  return featuredItem?.id ?? items[0]?.id ?? '';
};

const formatSize = (value?: number) => {
  return value ? `${value.toLocaleString()}mm` : '—';
};

function CategoryBlock({ category }: { category: VehicleCategory }) {
  const initialId = getInitialVehicleId(category.items);

  const [activeId, setActiveId] = useState<string>(initialId);
  const [prevId, setPrevId] = useState<string>('');

  const activeItem = useMemo(() => {
    return (
      category.items.find((item) => item.id === activeId) ?? category.items[0]
    );
  }, [activeId, category.items]);

  const prevItem = useMemo(() => {
    return category.items.find((item) => item.id === prevId);
  }, [prevId, category.items]);

  return (
    <li>
      <h3>{category.name}</h3>

      <div className={styles.boxHead}>
        <Image
          src={activeItem?.frontImage}
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
                <span>D</span>
                <div className={styles.itemSize}>
                  {formatSize(activeItem?.cargoSize?.d)}
                </div>
              </li>
              <li>
                <span>W</span>
                <div className={styles.itemSize}>
                  {formatSize(activeItem?.cargoSize?.w)}
                </div>
              </li>
              <li>
                <span>H</span>
                <div className={styles.itemSize}>
                  {formatSize(activeItem?.cargoSize?.h)}
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
                    {prevItem ? (
                      <div className={styles.fadePrev}>
                        <Image
                          src={prevItem.rearImage}
                          alt=""
                          width={600}
                          height={374}
                        />
                      </div>
                    ) : null}

                    <div className={styles.fadeNext}>
                      <Image
                        src={item.rearImage}
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
                <p>
                  {item.ton}t<span>{item.typeLabel}</span>
                </p>
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
                  <dt>積載スペース</dt>
                  <dd>
                    <span>
                      <i>D</i>
                      {formatSize(item.cargoSize?.d)}
                    </span>
                    <span>
                      <i>W</i>
                      {formatSize(item.cargoSize?.w)}
                    </span>
                    <span>
                      <i>H</i>
                      {formatSize(item.cargoSize?.h)}
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
