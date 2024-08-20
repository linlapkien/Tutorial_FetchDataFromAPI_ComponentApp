'use client';

import btnStyle from '@/styles/Button.module.css';

interface SetQuantityProps {
  quantity: number;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const SetQuantity: React.FC<SetQuantityProps> = ({
  quantity,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  console.log('SetQuantity component');
  return (
    <div className={btnStyle.button_container}>
      <button onClick={handleQtyIncrease} className={btnStyle.button_3d}>
        <div className={btnStyle.button_bottom}>
          <span className={btnStyle.material_icons}>+</span>
        </div>
        <div className={btnStyle.button_base}></div>
      </button>
      <div className={btnStyle.text}>{quantity}</div>
      <button onClick={handleQtyDecrease} className={btnStyle.button_3d}>
        <div className={btnStyle.button_bottom}>
          <span className={btnStyle.material_icons}>-</span>
        </div>
        <div className={btnStyle.button_base}></div>
      </button>
    </div>
  );
};

export default SetQuantity;
