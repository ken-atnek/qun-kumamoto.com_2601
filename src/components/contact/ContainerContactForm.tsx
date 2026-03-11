/* =======================================
 * ご依頼・お問い合わせ(CONTACT)ページ｜問合せフォーム
 * URL: src/components/contact/ContainerContactForm.tsx
 * Created: 2026-1-14
 * Last updated: 2026-1-15
 * ======================================= */
'use client';

import ExternalLink from '@/components/common/ExternalLink';
import Modal from '@/components/Modal';
import styles from '@/styles/PageContact.module.scss';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { useState, useRef } from 'react';

const endpoint = 'https://demo-qun-kumamoto.tuna-pic.co.jp/backend/contact.php';

type ContactApiResponse =
  | { success: true; message?: string }
  | { success: false; error: string };

type ModalVariant = 'default' | 'caution' | 'success';

// ✅ 未入力ハイライト用
type InvalidKey = 'inquiryType' | 'name' | 'email' | 'phone' | 'message';

export default function ContainerContactForm() {
  const [inquiryType, setInquiryType] = useState('');
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const formRef = useRef<HTMLFormElement | null>(null);

  const scrollToFormTop = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // ✅ モーダル一本化（B）
  const [modalMessage, setModalMessage] = useState<ReactNode | null>(null);
  const [modalVariant, setModalVariant] = useState<ModalVariant>('default');

  const openModal = (node: ReactNode, variant: ModalVariant = 'default') => {
    setModalVariant(variant);
    setModalMessage(node);
  };

  const closeModal = () => {
    setModalMessage(null);
    setModalVariant('default');
  };

  const [loading, setLoading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  // ✅ 未入力フィールドの枠線ハイライト管理
  const [invalidKeys, setInvalidKeys] = useState<InvalidKey[]>([]);

  const isInvalid = (key: InvalidKey) => invalidKeys.includes(key);

  const clearInvalid = (key: InvalidKey) => {
    setInvalidKeys((prev) => prev.filter((k) => k !== key));
  };

  const clearAllInvalid = () => setInvalidKeys([]);

  const handleConfirm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmpty = (v: string) => v.trim() === '';
    const missingLabels: string[] = [];
    const invalid: InvalidKey[] = [];

    if (isEmpty(inquiryType)) {
      missingLabels.push('お問合せ項目');
      invalid.push('inquiryType');
    }
    if (isEmpty(name)) {
      missingLabels.push('お名前');
      invalid.push('name');
    }
    if (isEmpty(email)) {
      missingLabels.push('メールアドレス');
      invalid.push('email');
    }
    if (isEmpty(phone)) {
      missingLabels.push('電話番号');
      invalid.push('phone');
    }
    if (isEmpty(message)) {
      missingLabels.push('お問い合わせ内容');
      invalid.push('message');
    }

    if (invalid.length > 0) {
      setInvalidKeys(invalid);

      scrollToFormTop();

      openModal(
        <>
          <h6>必須項目を入力してください</h6>
          <p>未入力の項目があります。以下をご確認ください。</p>
          <ul>
            {missingLabels.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </>,
        'caution'
      );
      return;
    }

    // ✅ すべてOKならハイライト解除
    clearAllInvalid();
    setIsConfirming(true);

    window.requestAnimationFrame(() => {
      scrollToFormTop();
    });
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsConfirming(false);
    closeModal();
    window.requestAnimationFrame(() => {
      scrollToFormTop();
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    closeModal();

    const formData = new FormData();
    formData.append('inquiryType', inquiryType);
    formData.append('name', name);
    formData.append('company', company);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });

      const raw = await response.text();

      let result: ContactApiResponse;

      try {
        result = JSON.parse(raw) as ContactApiResponse;
      } catch {
        openModal('サーバーの応答形式が不正です。', 'caution');
        return;
      }

      // HTTPエラー
      if (!response.ok) {
        if (!result.success) {
          openModal(result.error, 'caution');
        } else {
          openModal('送信に失敗しました。', 'caution');
        }
        return;
      }

      // アプリケーションエラー
      if (!result.success) {
        openModal(result.error, 'caution');
        return;
      }

      // 成功
      setInquiryType('');
      setCompany('');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsConfirming(false);
      clearAllInvalid();

      openModal(
        <>
          <h6>送信完了</h6>
          {result.message ? <p>{result.message}</p> : null}
        </>,
        'success'
      );
      window.setTimeout(() => closeModal(), 3000);
    } catch (error) {
      console.error('エラー:', error);
      openModal('通信エラーが発生しました。', 'caution');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className={styles.containerContactForm}>
        <div className={styles.boxHead}>
          <p>
            ＜お急ぎの場合＞ <br className="sp" />
            お急ぎの方は、お電話にてお問い合わせください。
          </p>
          <ExternalLink href="tel:0968383515">
            <span>TEL.</span>0968-38-3515
          </ExternalLink>
        </div>

        <form
          ref={formRef}
          className={styles.blockForm}
          noValidate
          onSubmit={isConfirming ? handleSubmit : handleConfirm}
        >
          {isConfirming ? (
            // ✅ 確認画面
            <div className={styles.statusConfirm}>
              <p className={styles.announce}>入力内容を確認してください。</p>

              <dl>
                <div>
                  <dt>お問合せ内容</dt>
                  <dd>{inquiryType}</dd>
                </div>
                <div>
                  <dt>御社名</dt>
                  <dd>{company}</dd>
                </div>
                <div>
                  <dt>お名前</dt>
                  <dd>{name}</dd>
                </div>
                <div>
                  <dt>メールアドレス</dt>
                  <dd>{email}</dd>
                </div>
                <div>
                  <dt>電話番号</dt>
                  <dd>{phone}</dd>
                </div>
                <div>
                  <dt className={styles.positionTop}>お問い合わせ用件</dt>
                  <dd>{message}</dd>
                </div>
              </dl>

              <div className={styles.box_btn}>
                <button
                  type="button"
                  onClick={handleEdit}
                  disabled={loading}
                  className={styles.btnBack}
                >
                  <span>修正</span>
                  <i></i>
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className={styles.btnSub}
                >
                  <span>{loading ? '送信中…' : '送信'}</span>
                  <i></i>
                </button>
              </div>
            </div>
          ) : (
            // ✅ 入力画面
            <div className={styles.boxForm}>
              <div className={styles.boxCategory}>
                <span>お問合せ内容</span>

                {/* ✅ ラジオは input に border を当てにくいので、グループをハイライト */}
                <div
                  className={clsx(styles.checkRadio, {
                    [styles.isInvalid]: isInvalid('inquiryType'),
                  })}
                >
                  <label>
                    <input
                      type="radio"
                      name="form01"
                      value="依頼"
                      checked={inquiryType === '依頼'}
                      onChange={(e) => {
                        setInquiryType(e.target.value);
                        clearInvalid('inquiryType');
                      }}
                      required
                    />
                    <span>ご依頼</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="form01"
                      value="問い合わせ"
                      checked={inquiryType === '問い合わせ'}
                      onChange={(e) => {
                        setInquiryType(e.target.value);
                        clearInvalid('inquiryType');
                      }}
                    />
                    <span>お問合せ</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="form01"
                      value="求人"
                      checked={inquiryType === '求人'}
                      onChange={(e) => {
                        setInquiryType(e.target.value);
                        clearInvalid('inquiryType');
                      }}
                    />
                    <span>求人への応募</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="form01"
                      value="その他"
                      checked={inquiryType === 'その他'}
                      onChange={(e) => {
                        setInquiryType(e.target.value);
                        clearInvalid('inquiryType');
                      }}
                    />
                    <span>その他</span>
                  </label>
                </div>
              </div>

              <dl>
                <div>
                  <dt>御社名</dt>
                  <dd>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="御社名"
                      autoComplete="organization"
                    />
                  </dd>
                </div>

                <div>
                  <dt>お名前</dt>
                  <dd>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => clearInvalid('name')}
                      className={clsx({
                        [styles.isInvalid]: isInvalid('name'),
                      })}
                      required
                      placeholder="お名前を入力してください"
                      autoComplete="name"
                    />
                  </dd>
                </div>

                <div>
                  <dt>メールアドレス</dt>
                  <dd>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => clearInvalid('email')}
                      className={clsx({
                        [styles.isInvalid]: isInvalid('email'),
                      })}
                      required
                      placeholder="メールアドレスを入力してください"
                      autoComplete="email"
                    />
                  </dd>
                </div>

                <div>
                  <dt>電話番号</dt>
                  <dd>
                    <input
                      type="tel"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onFocus={() => clearInvalid('phone')}
                      className={clsx({
                        [styles.isInvalid]: isInvalid('phone'),
                      })}
                      required
                      placeholder="お電話番号を入力してください"
                      autoComplete="tel"
                    />
                  </dd>
                </div>

                <div>
                  <dt className={styles.positionTop}>お問い合わせ用件</dt>
                  <dd>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => clearInvalid('message')}
                      className={clsx({
                        [styles.isInvalid]: isInvalid('message'),
                      })}
                      required
                      placeholder="お問い合わせ内容を入力してください"
                    />
                  </dd>
                </div>
              </dl>

              <div className={styles.box_btn}>
                <button
                  type="submit"
                  disabled={loading}
                  className={styles.btnSub}
                >
                  <span>確認</span>
                  <i></i>
                </button>
              </div>
            </div>
          )}
        </form>
      </section>
      {/* ✅ モーダル表示 */}
      {modalMessage && (
        <Modal
          variant={modalVariant}
          onClose={closeModal}
          message={modalMessage}
        />
      )}
    </>
  );
}
