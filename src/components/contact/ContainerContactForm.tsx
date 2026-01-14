/* =======================================
 * ご依頼・お問い合わせ(CONTACT)ページ｜問合せフォーム
 * URL: src/components/contact/ContainerContactForm.tsx
 * Created: 2026-1-14
 * Last updated: 2026-1-14
 * ======================================= */
'use client';

import ExternalLink from '@/components/common/ExternalLink';
import Modal from '@/components/Modal';
import styles from '@/styles/PageContact.module.scss';
import { useState } from 'react';

const endpoint = 'https://demo-qun-kumamoto.tuna-pic.co.jp/backend/contact.php';
type ContactApiResponse =
  | { success: true; message?: string }
  | { success: false; error: string };

export default function ContainerContactForm() {
  const [inquiryType, setInquiryType] = useState('');
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const [isConfirming, setIsConfirming] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inquiryType || !name || !email || !phone || !message) {
      setStatus('必須項目を入力してください');
      return;
    }

    setIsConfirming(true);
    setStatus('');
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsConfirming(false);
    setStatus('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

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
        setStatus('サーバーの応答形式が不正です。');
        return;
      }

      if (!response.ok) {
        // 失敗側の型なら error が必ずある
        if (!result.success) {
          setStatus(result.error);
        } else {
          setStatus('送信に失敗しました。');
        }
        return;
      }

      if (result.success) {
        setInquiryType('');
        setCompany('');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setIsConfirming(false);
        setIsModalOpen(true);
        window.setTimeout(() => setIsModalOpen(false), 3000);
      } else {
        setStatus(result.error);
      }
    } catch (error) {
      console.error('エラー:', error);
      setStatus('通信エラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.containerContactForm}>
      <div className={styles.boxHead}>
        <p>＜お急ぎの場合＞ お急ぎの方は、お電話にてお問い合わせください。</p>
        <ExternalLink href="tel:0968383515">
          <span>TEL.</span>0968-38-3515
        </ExternalLink>
      </div>

      <form
        className={styles.blockForm}
        onSubmit={isConfirming ? handleSubmit : handleConfirm}
      >
        {/* エラーメッセージは上にも出す（気づきやすい） */}
        {status ? <p>{status}</p> : null}

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

            {/* 改行が潰れないように */}
            {/* <div style={{ whiteSpace: 'pre-wrap' }}>{message}</div> */}

            <div className={styles.box_btn}>
              <button
                type="button"
                onClick={(e) => handleEdit(e)}
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

            {/* 確認画面にも status を出しておく（下の方） */}
            {status ? <p>{status}</p> : null}
          </div>
        ) : (
          // ✅ 入力画面
          <div className={styles.boxForm}>
            <div className={styles.boxCategory}>
              <span>お問合せ内容</span>
              <div className={styles.checkRadio}>
                <label>
                  <input
                    type="radio"
                    name="form01"
                    value="依頼"
                    checked={inquiryType === '依頼'}
                    onChange={(e) => setInquiryType(e.target.value)}
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
                    onChange={(e) => setInquiryType(e.target.value)}
                  />
                  <span>お問合せ</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="form01"
                    value="求人"
                    checked={inquiryType === '求人'}
                    onChange={(e) => setInquiryType(e.target.value)}
                  />
                  <span>求人への応募</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="form01"
                    value="その他"
                    checked={inquiryType === 'その他'}
                    onChange={(e) => setInquiryType(e.target.value)}
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

      {/* ✅ モーダル表示 */}
      {isModalOpen && (
        <Modal
          message="お問い合わせが送信されました。"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}
