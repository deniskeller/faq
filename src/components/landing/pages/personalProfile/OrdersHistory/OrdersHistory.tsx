import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import s from './OrdersHistory.module.scss';
import { BaseButton, BaseContainer } from '@base/index';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

import {
  OverlayScrollbarsComponent,
  useOverlayScrollbars,
} from 'overlayscrollbars-react';
// import 'overlayscrollbars/styles/overlayscrollbars.css';
// import 'overlayscrollbars/overlayscrollbars.css';

interface IOrder {
  id: number;
  orderId: number;
  service: string;
  writerLevel: string;
  pages: number;
  amount: number;
  status: string;
}

const orderList = [
  {
    id: 1,
    orderId: 1234567891,
    service: 'Essay',
    writerLevel: 'Undergraduate',
    pages: 10,
    amount: 1321646,
    status: 'Processing',
  },
  {
    id: 2,
    orderId: 1234567891,
    service: 'Essay',
    writerLevel: 'Undergraduate',
    pages: 10,
    amount: 1321646,
    status: 'Completed',
  },
  {
    id: 3,
    orderId: 1234567891,
    service: 'Essay',
    writerLevel: 'Undergraduate',
    pages: 10,
    amount: 1321646,
    status: 'Refund',
  },
];

///УВЕЛИЧИВАЕМ КОЛ-ВО ЭЛЕЕНТОВ(УДАЛИТЬ)
let order = {
  id: 1,
  orderId: 1234567891,
  service: 'Essay',
  writerLevel: 'Undergraduate',
  pages: 10,
  amount: 1321646,
  status: 'Processing',
};

for (let i = 1; i < 20; i++) {
  orderList.push({
    ...order,
    id: i,
    writerLevel: order.writerLevel + ' ' + i,
  });
}

const OrdersHistory: React.FC = () => {
  const [orders, setOrders] = useState(orderList);
  // const [orders, setOrders] = useState<IOrder[]>([]);

  //вычислаем ширину скрола в текущем браузере
  const scrollBlock = useRef<HTMLDivElement>(null);
  const [padding, setPadding] = useState(0);
  useLayoutEffect(() => {
    if (scrollBlock.current) {
      const scrollWidth =
        scrollBlock.current.offsetWidth - scrollBlock.current.clientWidth;
      setPadding(scrollWidth);
    }
    return () => {};
  }, [padding]);

  // вычисляем цвет маркера у статуса
  const computedStatusBackground = (status: string) => {
    if (status == 'Processing') return 'rgb(118, 86, 245)';
    if (status == 'Completed') return 'rgb(45, 172, 0)';
    if (status == 'Refund') return 'rgb(255, 5, 5)';
  };

  const [initialize, instance] = useOverlayScrollbars({
    // options,
    // events,
    // defer,
  });

  useEffect(() => {
    if (scrollBlock.current != null) {
      initialize(scrollBlock.current);
    }
  }, [initialize]);

  return (
    <section className={s.OrdersHistory}>
      <BaseContainer className={s.OrdersHistory_Container}>
        <div className={s.OrdersHistory_Title}>
          <h2>Orders history</h2>
        </div>

        <div className={s.OrdersHistory_Subtitle}>
          <p>Discover all of your orders for all time</p>
        </div>

        {orders?.length > 0 ? (
          <>
            <div className={s.OrdersHistory_Table}>
              <div className={s.ScrollWrapper}>
                {/* style={{ paddingRight: `${padding}px` }} */}
                <div className={s.THead}>
                  <div className={s.THead_Column}>
                    <span>Order ID</span>
                  </div>

                  <div className={s.THead_Column}>
                    <span>Service</span>
                  </div>

                  <div className={s.THead_Column}>
                    <span>Writer level</span>
                  </div>

                  <div className={s.THead_Column}>
                    <span>Pages</span>
                  </div>

                  <div className={s.THead_Column}>
                    <span>Amount</span>
                  </div>

                  <div className={s.THead_Column}>
                    <span>Status</span>
                  </div>
                </div>

                <ReactLenis options={{ smoothWheel: false }}>
                  <div className={s.TBody} ref={scrollBlock}>
                    {orders?.map((item, index) => {
                      return (
                        <div className={s.TBody_Row} key={index}>
                          <div className={s.TBody_Row_Column}>
                            <span className={s.OrderId}>{item.orderId}</span>
                          </div>

                          <div className={s.TBody_Row_Column}>
                            <span className={s.Service}>{item.service}</span>
                          </div>

                          <div className={s.TBody_Row_Column}>
                            <span className={s.WriterLevel}>
                              {item.writerLevel}
                            </span>
                          </div>

                          <div className={s.TBody_Row_Column}>
                            <span className={s.Pages}>{item.pages}</span>
                          </div>

                          <div className={s.TBody_Row_Column}>
                            <span className={s.Amount}>{item.amount}</span>
                          </div>

                          <div className={s.TBody_Row_Column}>
                            <span
                              className={s.Marker}
                              style={{
                                background: computedStatusBackground(
                                  item.status
                                ),
                              }}
                            ></span>

                            <span className={s.Status}>{item.status}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </ReactLenis>
              </div>
            </div>
          </>
        ) : (
          <div className={s.OrdersHistory_OrderListEmpty}>
            <div className={s.Title}>
              <h3>You haven't made any orders yet</h3>
            </div>

            <BaseButton as="a" href="/order" className={s.Button}>
              Place an order
            </BaseButton>
          </div>
        )}
      </BaseContainer>
    </section>
  );
};

export default OrdersHistory;
