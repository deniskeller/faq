//@ts-nocheck
import React, { useCallback, useEffect, useState } from 'react';
import { ToastType, toast as toastOBj, useToaster } from 'react-hot-toast';
import s from './BaseToast.module.scss';
import Link from 'next/link';

const BaseToast: React.FC = () => {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause, calculateOffset, updateHeight } = handlers;

  const [countdown, setCountdown] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);

  const startTimer = useCallback(() => {
    setIsPlaying(true);

    // if (isPlaying) {
    //   const interval = setInterval(() => {
    //     setCountdown((prevState) => prevState - 1);

    //     if (countdown === 0) {
    //       clearInterval(interval);
    //       setIsPlaying(false);
    //       setCountdown(3);
    //     }
    //   }, 1000);
    // }

    countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
    if (countdown == 0) {
      setCountdown(3);
    }
  }, [countdown]);

  useEffect(() => {
    console.log('countdown: ', countdown);
  }, [countdown]);

  useEffect(() => {
    if (toasts[0]?.visible) {
      startTimer();
    }
  }, [startTimer, toasts]);

  // console.log('toasts: ', toasts);

  const typeIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return <></>;

      case 'error':
        return <></>;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${s.BaseToast} ${
        toasts[0]?.className == 'dashboard' ? s.BaseToastApp : ''
      }`}
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      {toasts.map((toast) => {
        const offset = calculateOffset(toast, {
          reverseOrder: true,
          gutter: 8,
        });

        const ref = (el) => {
          if (el && typeof toast.height !== 'number') {
            const height = el.getBoundingClientRect().height;
            updateHeight(toast.id, height);
          }
        };

        return (
          <div
            className={s.BaseToast_Wrapper}
            ref={ref}
            key={toast.id}
            style={{
              opacity: toast.visible ? 1 : 0,
              transform: `translateY(-${offset}px)`,
            }}
            {...toast.ariaProps}
          >
            <div className={s.BaseToast_Toast}>
              <div className={s.Content}>
                {typeIcon(toast.type)}

                {toasts[0]?.type != 'custom' ? (
                  <div className={s.Content_Text}>
                    <p>{toast.message}</p>
                  </div>
                ) : (
                  <>{toast.message}</>
                )}

                {toasts[0]?.className == 'login' ? (
                  <Link href={'/log-in'} className={s.Content_ToLogin}>
                    <span>Log in</span>
                  </Link>
                ) : null}

                {}
                <div className={s.Content_CloseCounter}>
                  <svg
                    x="0px"
                    y="0px"
                    viewBox="0 0 200 200"
                    className={s.Progress}
                  >
                    <circle
                      stroke="rgb(118, 86, 245)"
                      fill="none"
                      strokeWidth="20"
                      cx="100"
                      cy="100"
                      r="80"
                    />
                  </svg>

                  <div className={s.Value}>{countdown}</div>
                </div>
              </div>

              {/* onClick={() => {
                  toast.visible = false;
                  toastOBj.dismiss(toast.id);
                }} */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BaseToast;
