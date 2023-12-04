import { memo } from 'react';
import { classNames } from 'shared/lib/func';
import { Button } from 'shared/ui';
import { useParams } from 'react-router-dom';
import { useCreatePaymentMutation } from 'features/payments';
import cls from './PaymentsPage.module.scss';

interface PaymentsPageProps {
  className?: string;
}

export const PaymentsPage = memo((props: PaymentsPageProps) => {
  const { className } = props;
  const { status } = useParams();
  const isPaymentSuccess = status === 'success';
  const isPaymentFailure = status === 'failure';

  const [createPayment] = useCreatePaymentMutation();

  const handlePayment = (paymentOption: number) => async () => {
    const res = await createPayment({ paymentOption }).unwrap();

    if (!res.paymentUrl) {
      console.error('no payment url');
    }

    window.open(res.paymentUrl, '_self');
  };

  return (
    <div className={classNames(cls.paymentsPage, [className])}>
      <Button onClick={handlePayment(3)}>Monthly subscription</Button>
      <Button onClick={handlePayment(4)}>Yearly payment</Button>
      {isPaymentSuccess && <div>Payment success</div>}
      {isPaymentFailure && <div>Payment failure</div>}
    </div>
  );
});
