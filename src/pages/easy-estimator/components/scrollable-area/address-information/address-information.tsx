import { Button, Card } from 'antd';
import './address-information.scss';

export interface AddressInformationProps {}

export function AddressInformation(props: AddressInformationProps) {
  return (
    <Card
      className="info-card"
      title="Information"
      extra={<a href="#">More</a>}
    >
      <p> Our components : </p>

      <div>
        <Button type="primary">Primary Button</Button>
      </div>
      <p />
      <Button>Default Button</Button>
    </Card>
  );
}
